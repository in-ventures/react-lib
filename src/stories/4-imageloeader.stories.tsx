import React, { useState } from 'react';
import ImageLoader from '../components/ImageLoader';
import { AlertModal } from '../components/Modal';
import { text, number, boolean } from '@storybook/addon-knobs';
import imageCompression from 'browser-image-compression';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import {
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';

export default {
  title: 'Image Loader',
};

const onError = () => {
  alert('Ha ocurrido un error');
};

const useStyles = makeStyles({
  media: {
    backgroundSize: 'contain',
    height: 140,
  },
  container: { display: 'flex', flexDirection: 'column' },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
type PlaceholderProps = {
  defaultImage: string;
  title: string;
  description: string;
};
const Placeholder = ({
  defaultImage,
  title,
  description,
}: PlaceholderProps) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <CardMedia
        className={classes.media}
        image={defaultImage}
        title="Contemplative Reptile"
      />
      <CardContent className={classes.contentContainer}>
        <Typography variant="caption" color="primary" align="center">
          {title}
        </Typography>
        <Typography
          variant="caption"
          color="textSecondary"
          align="center"
          component="p"
        >
          {description}
        </Typography>
      </CardContent>
    </div>
  );
};
export const LandscapeEditable = () => {
  const types = ['application/pdf', 'text/plain', 'image/jpeg', 'image/png'];

  const defaultImage = text(
    'Default image',
    'https://previews.123rf.com/images/creativepriyanka/creativepriyanka1906/creativepriyanka190600379/124982633-prescription-icon.jpg',
  );
  const defaultTitle = text('Default title', 'Adjunta tu receta aquí');
  const defaultDescription = text(
    'Default description',
    'Puedes subir una imagen o PDF ',
  );
  const [file, setFile] = useState('');
  const loading = boolean('Loading', false);
  const progress = number('Progress', 0);
  return (
    <div style={{ width: '400px', height: '300px' }}>
      <ImageLoader
        types={types}
        Placeholder={
          <Placeholder
            defaultImage={defaultImage}
            title={defaultTitle}
            description={defaultDescription}
          />
        }
        onError={onError}
        file={file}
        setFile={setFile}
        loading={loading}
        progress={progress}
        loaded={file ? true : false}
      ></ImageLoader>
    </div>
  );
};

export const PortraitEditable = () => {
  const types = ['application/pdf', 'text/plain', 'image/jpeg', 'image/png'];

  const defaultImage = text(
    'Default image',
    'https://previews.123rf.com/images/creativepriyanka/creativepriyanka1906/creativepriyanka190600379/124982633-prescription-icon.jpg',
  );
  const defaultTitle = text('Default title', 'Adjunta tu receta aquí');
  const defaultDescription = text(
    'Default description',
    'Puedes subir una imagen o PDF ',
  );
  const [file, setFile] = useState('');
  const loading = boolean('Loading', false);
  const progress = number('Progress', 0);

  return (
    <div style={{ width: '300px', height: '400px' }}>
      <ImageLoader
        types={types}
        Placeholder={
          <Placeholder
            defaultImage={defaultImage}
            title={defaultTitle}
            description={defaultDescription}
          />
        }
        onError={onError}
        file={file}
        setFile={setFile}
        loading={loading}
        progress={progress}
        loaded={file ? true : false}
      ></ImageLoader>
    </div>
  );
};

export const Landscape = () => {
  const [file, setFile] = useState('');
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  const types = ['application/pdf', 'text/plain', 'image/jpeg', 'image/png'];

  const maxFileSize = number('Max size', 14);
  const defaultImage = text(
    'Default image',
    'https://previews.123rf.com/images/creativepriyanka/creativepriyanka1906/creativepriyanka190600379/124982633-prescription-icon.jpg',
  );
  const defaultTitle = text('Default title', 'Adjunta tu receta aquí');
  const defaultDescription = text(
    'Default description',
    'Puedes subir una imagen o PDF ',
  );

  const compressImage = async (file: File) => {
    const options = {
      maxSizeMB: maxFileSize,
      useWebWorker: true,
      onProgress: (progress: number) => {
        setProgress(progress);
      },
    };

    try {
      //Compression
      const compressedFile = await imageCompression(file, options);
      setLoaded(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div style={{ width: '400px', height: '300px' }}>
      <ImageLoader
        types={types}
        maxFileSize={maxFileSize}
        Placeholder={
          <Placeholder
            defaultImage={defaultImage}
            title={defaultTitle}
            description={defaultDescription}
          />
        }
        onError={onError}
        compressImage={compressImage}
        file={file}
        setFile={setFile}
        loading={loading}
        setLoading={setLoading}
        progress={progress}
        loaded={loaded}
        setLoaded={setLoaded}
      ></ImageLoader>
    </div>
  );
};

export const Portrait = () => {
  const [file, setFile] = useState('');
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  const types = ['application/pdf', 'text/plain', 'image/jpeg', 'image/png'];

  const maxFileSize = number('Max size', 14);
  const defaultImage = text(
    'Default image',
    'https://previews.123rf.com/images/creativepriyanka/creativepriyanka1906/creativepriyanka190600379/124982633-prescription-icon.jpg',
  );

  const defaultTitle = text('Default title', 'Adjunta tu receta aquí');
  const defaultDescription = text(
    'Default description',
    'Puedes subir una imagen o PDF ',
  );
  const compressImage = async (file: File) => {
    const options = {
      maxSizeMB: maxFileSize,
      useWebWorker: true,
      onProgress: (progress: number) => {
        setProgress(progress);
      },
    };

    try {
      //Compression
      const compressedFile = await imageCompression(file, options);
      console.log(compressedFile);
      setLoaded(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div style={{ width: '300px', height: '400px' }}>
      <ImageLoader
        types={types}
        maxFileSize={maxFileSize}
        Placeholder={
          <Placeholder
            defaultImage={defaultImage}
            title={defaultTitle}
            description={defaultDescription}
          />
        }
        onError={onError}
        compressImage={compressImage}
        file={file}
        setFile={setFile}
        loading={loading}
        setLoading={setLoading}
        progress={progress}
        loaded={loaded}
        setLoaded={setLoaded}
      ></ImageLoader>
    </div>
  );
};

export const DefaultImageUploaded = () => {
  const [file, setFile] = useState(
    'https://meki-public.s3.us-east-2.amazonaws.com/images/1-paleta-desechable-0a9ea08b-088c-49c1-900a-84946978ad35',
  );
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  const types = ['application/pdf', 'text/plain', 'image/jpeg', 'image/png'];

  const maxFileSize = number('Max size', 14);
  const defaultImage = text(
    'Default image',
    'https://previews.123rf.com/images/creativepriyanka/creativepriyanka1906/creativepriyanka190600379/124982633-prescription-icon.jpg',
  );

  const defaultTitle = text('Default title', 'Adjunta tu receta aquí');
  const defaultDescription = text(
    'Default description',
    'Puedes subir una imagen o PDF ',
  );
  const compressImage = async (file: File) => {
    const options = {
      maxSizeMB: maxFileSize,
      useWebWorker: true,
      onProgress: (progress: number) => {
        setProgress(progress);
      },
    };

    try {
      //Compression
      const compressedFile = await imageCompression(file, options);
      setLoaded(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const inputRef = React.createRef<HTMLInputElement | undefined>();
  const openFileLoader = React.useCallback(() => {
    inputRef.current?.click();
  }, [inputRef]);
  return (
    <div style={{ width: '300px', height: '400px' }}>
      <ImageLoader
        types={types}
        maxFileSize={maxFileSize}
        Placeholder={
          <Placeholder
            defaultImage={defaultImage}
            title={defaultTitle}
            description={defaultDescription}
          />
        }
        onError={onError}
        compressImage={compressImage}
        file={file}
        setFile={setFile}
        loading={loading}
        setLoading={setLoading}
        progress={progress}
        loaded={loaded}
        setLoaded={setLoaded}
        ref={inputRef}
      ></ImageLoader>
      <Box paddingTop={2}>
        <Button variant="contained" onClick={openFileLoader}>
          Activar cargar archivo
        </Button>
      </Box>
    </div>
  );
};

export const UploaderWithModal = () => {
  const [file, setFile] = useState(
    'https://meki-public.s3.us-east-2.amazonaws.com/images/1-paleta-desechable-0a9ea08b-088c-49c1-900a-84946978ad35',
  );
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  const types = ['application/pdf', 'text/plain', 'image/jpeg', 'image/png'];

  const maxFileSize = number('Max size', 14);
  const defaultImage = text(
    'Default image',
    'https://previews.123rf.com/images/creativepriyanka/creativepriyanka1906/creativepriyanka190600379/124982633-prescription-icon.jpg',
  );

  const defaultTitle = text('Default title', 'Adjunta tu receta aquí');
  const defaultDescription = text(
    'Default description',
    'Puedes subir una imagen o PDF ',
  );
  const compressImage = async (file: File) => {
    const options = {
      maxSizeMB: maxFileSize,
      useWebWorker: true,
      onProgress: (progress: number) => {
        setProgress(progress);
      },
    };

    try {
      //Compression
      const compressedFile = await imageCompression(file, options);
      setLoaded(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const inputRef = React.createRef<HTMLInputElement | undefined>();

  const openFileLoader = React.useCallback(() => {
    inputRef.current?.click();
  }, [inputRef]);

  const clickYesModal = React.useCallback(() => {
    console.log('You clicked YES');
    openFileLoader();
    setOpen(false);
  }, [openFileLoader, setOpen]);

  const handleCustomClick = React.useCallback(() => {
    if (loaded) {
      console.log('OPEN MODAL!!');
      setOpen(true);
    } else {
      inputRef.current?.click();
    }
  }, [loaded, setOpen]);

  console.log('open: ', open);
  return (
    <>
      <div style={{ width: '300px', height: '400px' }}>
        <ImageLoader
          types={types}
          maxFileSize={maxFileSize}
          Placeholder={
            <Placeholder
              defaultImage={defaultImage}
              title={defaultTitle}
              description={defaultDescription}
            />
          }
          onError={onError}
          compressImage={compressImage}
          file={file}
          setFile={setFile}
          loading={loading}
          setLoading={setLoading}
          progress={progress}
          loaded={loaded}
          setLoaded={setLoaded}
          ref={inputRef}
          handleCustomClick={handleCustomClick}
        />
      </div>
      <AlertModal
        title="Reemplazo imagen 📷"
        content={'¿Estás seguro que quieres reemplazar la imagen cargada?'}
        open={open}
        setOpen={setOpen}
        actions={[
          {
            text: 'NO',
            onActionClick: () => setOpen(false),
          },
          {
            text: 'SÍ',
            onActionClick: clickYesModal,
            variant: 'contained',
          },
        ]}
      />
    </>
  );
};
