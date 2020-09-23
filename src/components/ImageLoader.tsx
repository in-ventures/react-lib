import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextFieldProps } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import LinearProgress from '@material-ui/core/LinearProgress';
import CardContent from '@material-ui/core/CardContent';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '100%',
    border: 'none',
  },
  cardactionarea: {
    height: '80%',
    display: 'flex',
  },
  loading: {
    opacity: 0.4,
    width: '100%',
    height: '100%',
    border: 'none',
  },
  actions: {
    justifyContent: 'center',
  },
  input: {
    display: 'none',
  },
});

//Type
type ImageLoaderProps = {
  types?: string[];
  alt?: string;
  objectFit?: string;
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
} & TextFieldProps;

export default function ImageLoader({
  types = [],
  alt,
  objectFit = 'contain',
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
}: ImageLoaderProps) {
  const classes = useStyles();
  const iframeRef: React.RefObject<HTMLIFrameElement> = React.createRef();

  const inputRef: React.RefObject<HTMLInputElement> = React.createRef();

  //Update object fit atr
  React.useEffect(() => {
    //Reset iframe's objectFit property
    const iframe = iframeRef.current;
    if (iframe && iframe.contentDocument) {
      const imgs = iframe.contentDocument.getElementsByTagName('img');
      if (imgs.length) {
        imgs[0].style.objectFit = objectFit ? objectFit : '';
      }
    }
  }, [objectFit, iframeRef]);

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

  //Set iframe's properties
  const onIframeLoad = React.useCallback(() => {
    const iframe = iframeRef.current;

    if (iframe && iframe.contentDocument) {
      const imgs = iframe.contentDocument.getElementsByTagName('img');
      if (imgs.length) {
        imgs[0].style.width = '100%';
        imgs[0].style.height = '100%';
        imgs[0].style.objectFit = objectFit ? objectFit : 'contain';
        imgs[0].alt = alt ? alt : 'Default';
      }
    }
  }, [iframeRef, alt, objectFit]);

  const onCardActionAreaClick = React.useCallback(() => {
    const input = inputRef.current;
    input?.click();
  }, [inputRef]);

  return (
    <div className={classes.container}>
      <Card className={classes.container}>
        <CardActionArea
          className={classes.cardactionarea}
          onClick={onCardActionAreaClick}
        >
          {!loaded && !loading ? (
            Placeholder
          ) : (
            <iframe
              title="Contenedor"
              ref={iframeRef}
              src={file}
              className={loading ? classes.loading : classes.container}
              onLoad={onIframeLoad}
            ></iframe>
          )}
        </CardActionArea>

        {loading ? (
          <LinearProgress variant="determinate" value={progress} />
        ) : (
          ''
        )}
        <Divider />

        <CardActions className={classes.actions}>
          {loaded ? (
            <IconButton
              color="primary"
              aria-label="Eliminar elemento"
              component="span"
              disabled={loading}
              onClick={deleteFile}
            >
              <DeleteIcon />
            </IconButton>
          ) : (
            ''
          )}
          <input
            ref={inputRef}
            id="icon-button-file"
            type="file"
            accept="image/*;capture=camera"
            className={classes.input}
            onChange={loadFile}
            disabled={loading}
          />
          <label htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="Subir elemento"
              component="span"
              disabled={loading}
            >
              <PhotoCamera />
            </IconButton>
          </label>
        </CardActions>
      </Card>
    </div>
  );
}
