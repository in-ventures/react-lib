import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextFieldProps } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import LinearProgress from '@material-ui/core/LinearProgress';
import DeleteIcon from '@material-ui/icons/Delete';
import clsx from 'clsx';

const useStyles = makeStyles({
  totallyFilled: {
    width: '100%',
    height: '100%',
  },
  container: {
    border: 'none',
  },
  cardactionarea: {
    display: 'flex',
    padding: 0,
  },
  loadingHeight: {
    height: 'calc(100% - 56px)',
  },
  notloadingHeight: {
    height: 'calc(100% - 52px)',
  },
  loading: {
    opacity: 0.4,
    border: 'none',
  },
  actions: {
    justifyContent: 'center',
    padding: 0,
  },
  input: {
    display: 'none',
    padding: 0,
  },
  marginLeftZero: {
    marginLeft: '0!important',
  },
  preview: {
    objectFit: 'contain',
  },
});

//Type
type ImageLoaderProps = {
  types?: string[];
  maxFileSize?: number;
  Placeholder?: React.ReactNode;
  onError?: () => void;
  compressImage?: (file: File) => void;
  file?: string;
  setFile?: (url: string) => void;
  loading?: boolean;
  setLoading?: (loading: boolean) => void;
  progress?: number;
  loaded?: boolean;
  setLoaded?: (loaded: boolean) => void;
  handleCustomClick?: () => void;
} & TextFieldProps;

function ImageLoaderComponent(
  {
    types = [],
    maxFileSize = 14,
    Placeholder = null,
    onError = () => {},
    compressImage = (file: File) => {},
    file,
    setFile = () => {},
    loading,
    setLoading = () => {},
    progress,
    loaded,
    setLoaded = () => {},
    handleCustomClick,
  }: ImageLoaderProps,
  ref: any,
) {
  const classes = useStyles();
  const inputRef = React.useRef(ref);

  React.useImperativeHandle(ref, () => ({
    click: () => {
      inputRef.current?.click();
    },
  }));

  const loadFile = React.useCallback(
    (event: React.BaseSyntheticEvent) => {
      const divisor = 1024 * 1024;
      const file = event.target.files[0];
      if (file && types.includes(file.type)) {
        const sizeIsPermitted = file.size / divisor <= maxFileSize;
        const isImage = file.type === 'image/jpeg' || file.type === 'image/png';

        //Compression
        if (isImage && !sizeIsPermitted) {
          setLoading(true);
          setLoaded(false);
          setFile(URL.createObjectURL(file));
          //Compression
          compressImage(file);
        } else if (sizeIsPermitted) {
          setFile(URL.createObjectURL(file));
          setLoaded(true);
        } else {
          onError();
        }
      } else {
        onError();
      }
    },
    [
      setFile,
      setLoaded,
      setLoading,
      maxFileSize,
      onError,
      compressImage,
      types,
    ],
  );

  const deleteFile = React.useCallback(() => {
    setFile('');
    setLoaded(false);
    const input = inputRef.current;
    if (input) input.value = '';
  }, [setFile, setLoaded, inputRef]);

  const onClick = React.useCallback(() => {
    inputRef.current?.click();
  }, []);

  console.log('loaded: ', loaded);

  return (
    <div className={clsx(classes.container, classes.totallyFilled)}>
      <Card className={clsx(classes.container, classes.totallyFilled)}>
        <CardActionArea
          className={
            loading
              ? clsx(classes.cardactionarea, classes.loadingHeight)
              : clsx(classes.cardactionarea, classes.notloadingHeight)
          }
          onClick={handleCustomClick ? handleCustomClick : onClick}
        >
          {!file && !loading ? (
            Placeholder
          ) : (
            <>
              <object
                data={file}
                type="image/png"
                className={clsx(
                  classes.totallyFilled,
                  { [classes.loading]: loading, [classes.container]: !loading },
                  classes.preview,
                )}
                title="Contenedor"
              >
                <object
                  data={file}
                  type="application/pdf"
                  className={clsx(
                    classes.totallyFilled,
                    {
                      [classes.loading]: loading,
                      [classes.container]: !loading,
                    },
                    classes.preview,
                  )}
                  title="Contenedor"
                ></object>
              </object>
            </>
          )}
        </CardActionArea>

        {loading && <LinearProgress variant="determinate" value={progress} />}
        <Divider />
        <input
          ref={inputRef}
          id="icon-button-file"
          type="file"
          accept="image/*;capture=camera"
          className={classes.input}
          onChange={loadFile}
          disabled={loading}
          //onClick={onClick}
        />
        <CardActions className={classes.actions}>
          {loaded && (
            <IconButton
              color="primary"
              aria-label="Eliminar elemento"
              component="span"
              disabled={loading}
              onClick={deleteFile}
            >
              <DeleteIcon />
            </IconButton>
          )}
          <IconButton
            color="primary"
            aria-label="Subir elemento"
            component="span"
            disabled={loading}
            onClick={handleCustomClick ? handleCustomClick : onClick}
          >
            <PhotoCamera />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

// Replace this line with the code below:
const ImageLoader = React.forwardRef(ImageLoaderComponent);
/* const ImageLoader = React.forwardRef((props, ref) => {
  return <ImageLoaderComponent {...props} ref={ref}/>;
}); */
export default ImageLoader;
