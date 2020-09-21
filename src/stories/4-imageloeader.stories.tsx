import React, { useState } from 'react';
import ImageLoader from '../components/ImageLoader';
import { text, number, boolean } from '@storybook/addon-knobs';
import imageCompression from 'browser-image-compression';

export default {
  title: 'Image Loader',
};

const onError = () => {
  alert('Ha ocurrido un error');
};

export const LandscapeEditable = () => {
  const types = ['application/pdf', 'text/plain', 'image/jpeg', 'image/png'];
  const objectFit = text('Object fit', 'contain');
  const defaultImage = text(
    'Default image',
    'https://previews.123rf.com/images/creativepriyanka/creativepriyanka1906/creativepriyanka190600379/124982633-prescription-icon.jpg',
  );
  const [file, setFile] = useState('');
  const loading = boolean('Loading', false);
  const progress = number('Progress', 0);

  return (
    <div style={{ width: '400px', height: '300px' }}>
      <ImageLoader
        types={types}
        objectFit={objectFit}
        defaultImage={defaultImage}
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
  const [file, setFile] = useState('');
  const loading = boolean('Loading', false);
  const progress = number('Progress', 0);

  return (
    <div style={{ width: '300px', height: '400px' }}>
      <ImageLoader
        types={types}
        objectFit={objectFit}
        defaultImage={defaultImage}
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
        defaultImage={defaultImage}
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
        defaultImage={defaultImage}
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
