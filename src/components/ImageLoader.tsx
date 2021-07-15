import React, { useEffect, useState } from 'react';
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
  cardActionFull: {
    height: '100%',
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
  test: {
    background: 'red',
  },
});

export type LoadFileError = 'DOCUMENT_SIZE' | 'UNSUPPORTED_FILE';
export const isLoadFileError = (error: string): error is LoadFileError => {
  if (['DOCUMENT_SIZE', 'UNSUPPORTED_FILE'].includes(error)) return true;
  return false;
};

//Type
type ImageLoaderProps = {
  types?: string[];
  maxFileSize?: number;
  Placeholder?: React.ReactNode;
  PreviewFallback?: React.ReactNode;
  onError?: (code: LoadFileError) => void;
  compressImage?: (file: File) => Promise<void>;
  file?: string;
  setFile?: (url: string) => void;
  progress?: number;
  handleCustomClick?: () => void;
  loading?: boolean;
  onStatusChange?: (newStatus: string) => void;
  bottomAction?: boolean;
  classes?: {
    card?: string;
  };
} & TextFieldProps;

function ImageLoaderComponent(
  {
    types = [],
    maxFileSize = 14,
    Placeholder = null,
    onError = () => {},
    compressImage = async (file: File) => {},
    file,
    setFile = () => {},
    progress,
    handleCustomClick,
    PreviewFallback,
    loading,
    onStatusChange,
    bottomAction = false,
    classes: propClasses = {},
  }: ImageLoaderProps,
  ref: any,
) {
  const classes = useStyles();

  const [status, setStatus] = useState<
    'WAITING' | 'COMPRESSING' | 'LOADED' | 'ERROR'
  >('WAITING');
  const inputRef = React.useRef(ref);

  useEffect(
    function handleStatusChange() {
      onStatusChange?.(status);
    },
    [status, onStatusChange],
  );
  useEffect(
    function handleFileChange() {
      if (!file) setStatus('WAITING');
    },
    [file],
  );
  React.useImperativeHandle(ref, () => ({
    click: () => {
      inputRef.current?.click();
    },
  }));

  const loadFile = React.useCallback(
    async (event: React.BaseSyntheticEvent) => {
      const divisor = 1024 * 1024;
      const file = event.target.files[0];
      if (!file) {
        return;
      }
      if (file && types.includes(file.type)) {
        const sizeIsPermitted = file.size / divisor <= maxFileSize;
        const isImage = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!sizeIsPermitted && !isImage) {
          setStatus('ERROR');
          onError('DOCUMENT_SIZE');
          return;
        }
        setFile(URL.createObjectURL(file));
        if (isImage && !sizeIsPermitted) {
          setStatus('COMPRESSING');
          await compressImage(file);
        }
        setStatus('LOADED');
      } else {
        setStatus('ERROR');
        onError('UNSUPPORTED_FILE');
      }
    },
    [setFile, maxFileSize, onError, compressImage, types],
  );

  const deleteFile = React.useCallback(() => {
    setFile('');
    setStatus('WAITING');
    const input = inputRef.current;
    if (input) input.value = '';
  }, [setFile, setStatus, inputRef]);

  const onClick = React.useCallback(() => {
    inputRef.current?.click();
  }, []);
  const loadingStatus = loading || status === 'COMPRESSING';

  return (
    <div className={clsx(classes.container, classes.totallyFilled)}>
      <Card
        classes={{
          root: clsx(
            classes.container,
            classes.totallyFilled,
            propClasses.card,
          ),
        }}
      >
        <CardActionArea
          className={clsx(
            classes.cardactionarea,
            bottomAction && loadingStatus && classes.loadingHeight,
            bottomAction && !loadingStatus && classes.notloadingHeight,
            !bottomAction && classes.cardActionFull,
          )}
          onClick={handleCustomClick ? handleCustomClick : onClick}
        >
          {!file && status === 'WAITING' ? (
            Placeholder
          ) : (
            <>
              <object
                data={file}
                type="image/png"
                className={clsx(
                  classes.totallyFilled,
                  {
                    [classes.loading]: loadingStatus,
                    [classes.container]: !loadingStatus,
                  },
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
                      [classes.loading]: loadingStatus,
                      [classes.container]: !loadingStatus,
                    },
                    classes.preview,
                  )}
                  title="Contenedor"
                >
                  {PreviewFallback ? PreviewFallback : <p>Preview error</p>}
                </object>
              </object>
            </>
          )}
        </CardActionArea>

        {loadingStatus && (
          <LinearProgress variant="determinate" value={progress} />
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
        {bottomAction && (
          <>
            <Divider />
            <CardActions className={classes.actions}>
              {!loading &&
                (status === 'LOADED' || (status === 'WAITING' && file)) && (
                  <IconButton
                    color="primary"
                    aria-label="Eliminar elemento"
                    component="span"
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
          </>
        )}
      </Card>
    </div>
  );
}

// Forward Ref:
const ImageLoader = React.forwardRef(ImageLoaderComponent);
export default ImageLoader;
