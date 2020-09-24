import React, { useState } from 'react';
import ImageLoader from '../components/ImageLoader';
import { text, number, boolean } from '@storybook/addon-knobs';
import imageCompression from 'browser-image-compression';
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
  const objectFit = text('Object fit', 'contain');
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
        objectFit={objectFit}
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
  const objectFit = text('Object fit', 'contain');
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
        objectFit={objectFit}
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
  const alt = text('Name', 'Medicamento');
  const objectFit = text('Object fit', 'contain');
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
        alt={alt}
        objectFit={objectFit}
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
  const alt = text('Name', 'Medicamento');
  const objectFit = text('Object fit', 'contain');
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
    <div style={{ width: '300px', height: '400px' }}>
      <ImageLoader
        types={types}
        alt={alt}
        objectFit={objectFit}
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
