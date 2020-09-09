import React, { useCallback } from 'react';
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
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '100%',
  },
  cardactionarea: {
    height: '80%',
    display: 'flex',
  },
  loading: {
    opacity: 0.4,
    width: '100%',
    height: '100%',
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
  defaultImage?: string;
  onError?: () => void;
  file?: string;
  setFile?: (url: string) => void;
  loading?: boolean;
  setLoading?: (loading: boolean) => void;
  loaded?: boolean;
  setLoaded?: (loaded: boolean) => void;
} & TextFieldProps;

export default function ImageLoader({
  types = [],
  alt,
  objectFit = 'cover',
  maxFileSize = 14,
  defaultImage,
  onError = () => {},
  file,
  setFile = () => {},
  loading,
  setLoading = () => {},
  loaded,
  setLoaded = () => {},
}: ImageLoaderProps) {
  const classes = useStyles();
  const iframeRef: React.RefObject<HTMLIFrameElement> = React.createRef();
  const mediaRef: React.RefObject<HTMLImageElement> = React.createRef();
  const inputRef: React.RefObject<HTMLInputElement> = React.createRef();

  //Update object fit atr
  React.useEffect(() => {
    //Reset default image's property
    const media = mediaRef.current;
    if (media) media.style.objectFit = objectFit;

    //Reset iframe's objectFit property
    const iframe = iframeRef.current;
    if (iframe && iframe.contentDocument) {
      const imgs = iframe.contentDocument.getElementsByTagName('img');
      if (imgs.length) {
        imgs[0].style.objectFit = objectFit ? objectFit : '';
      }
    }
  }, [objectFit, iframeRef, mediaRef]);

  const loadFile = useCallback(
    (event: React.BaseSyntheticEvent) => {
      const divisor = 1024 * 1024;
      const file = event.target.files[0];
      if (file && types.includes(file.type)) {
        if (file.size / divisor <= maxFileSize) {
          setLoading(true);
          setLoaded(false);

          //Compression

          //Then (if success)
          setFile(URL.createObjectURL(file));
          setLoaded(true);
          setLoading(false);

          //If error
          //setLoading(false);
        } else {
          onError();
        }
      } else {
        onError();
      }
    },
    [setFile, setLoaded, setLoading, maxFileSize, onError, types],
  );

  const deleteFile = useCallback(() => {
    setFile('');
    setLoaded(false);
  }, [setFile, setLoaded]);

  //Set iframe's properties
  function onIframeLoad() {
    const iframe = iframeRef.current;
    if (iframe && iframe.contentDocument) {
      const imgs = iframe.contentDocument.getElementsByTagName('img');
      if (imgs.length) {
        imgs[0].style.width = '100%';
        imgs[0].style.height = '100%';
        imgs[0].style.objectFit = objectFit ? objectFit : '';
        imgs[0].alt = alt ? alt : 'Default';
      }
    }
  }

  function onCardActionAreaClick() {
    const input = inputRef.current;
    input?.click();
  }

  return (
    <div className={classes.container}>
      <Card className={classes.container}>
        <CardActionArea
          className={classes.cardactionarea}
          onClick={onCardActionAreaClick}
        >
          {!loaded && !loading ? (
            <CardMedia
              className={classes.container}
              ref={mediaRef}
              component="img"
              alt="Subir elemento"
              title="Subir elemento"
              image={defaultImage}
            />
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

        {loading ? <LinearProgress variant="determinate" value={10} /> : ''}
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
