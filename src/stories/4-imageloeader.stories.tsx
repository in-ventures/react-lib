import React, { useState } from 'react';
import ImageLoader from '../components/ImageLoader';
import { text, number } from '@storybook/addon-knobs';

export default {
  title: 'Image Loader',
};

const onError = () => {
  alert('Ha ocurrido un error');
};

export const Base = () => {
  const [file, setFile] = useState('');
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const types = ['application/pdf', 'text/plain', 'image/jpeg', 'image/png'];
  const alt = text('Name', 'Medicamento');
  const objectFit = text('Object fit', 'contain');
  const maxFileSize = number('Max size', 14);
  const defaultImage = text(
    'Default image',
    'https://previews.123rf.com/images/creativepriyanka/creativepriyanka1906/creativepriyanka190600379/124982633-prescription-icon.jpg',
  );

  return (
    <div style={{ width: '400px', height: '300px' }}>
      <ImageLoader
        types={types}
        alt={alt}
        objectFit={objectFit}
        maxFileSize={maxFileSize}
        defaultImage={defaultImage}
        onError={onError}
        file={file}
        setFile={setFile}
        loading={loading}
        setLoading={setLoading}
        loaded={loaded}
        setLoaded={setLoaded}
      ></ImageLoader>
    </div>
  );
};

export const BaseTwo = () => {
  const [file, setFile] = useState('');
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const types = ['application/pdf', 'text/plain', 'image/jpeg', 'image/png'];
  const alt = text('Name', 'Medicamento');
  const objectFit = text('Object fit', 'contain');
  const maxFileSize = number('Max size', 8);
  const defaultImage = text(
    'Default image',
    'https://previews.123rf.com/images/creativepriyanka/creativepriyanka1906/creativepriyanka190600379/124982633-prescription-icon.jpg',
  );

  return (
    <div style={{ width: '300px', height: '400px' }}>
      <ImageLoader
        types={types}
        alt={alt}
        objectFit={objectFit}
        maxFileSize={maxFileSize}
        defaultImage={defaultImage}
        onError={onError}
        file={file}
        setFile={setFile}
        loading={loading}
        setLoading={setLoading}
        loaded={loaded}
        setLoaded={setLoaded}
      ></ImageLoader>
    </div>
  );
};
