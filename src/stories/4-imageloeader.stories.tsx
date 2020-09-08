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
  const types = ['application/pdf', 'text/plain', 'image/jpeg', 'image/png'];
  const alt = text('Name', 'Medicamento');
  const objectFit = text('Object fit', 'contain');
  const maxFileSize = number('Max size', 14);

  return (
    <div style={{ width: '400px', height: '300px' }}>
      <ImageLoader
        types={types}
        objectFit={objectFit}
        file={file}
        maxFileSize={maxFileSize}
        alt={alt}
        setFile={setFile}
        onError={onError}
      ></ImageLoader>
    </div>
  );
};

export const BaseTwo = () => {
  const [file, setFile] = useState('');
  const types = ['application/pdf', 'text/plain', 'image/jpeg'];
  const alt = text('Name', 'Medicamento');
  const objectFit = text('Object fit', 'contain');
  const maxFileSize = number('Max size', 8);

  return (
    <div style={{ width: '300px', height: '400px' }}>
      <ImageLoader
        types={types}
        objectFit={objectFit}
        file={file}
        maxFileSize={maxFileSize}
        alt={alt}
        setFile={setFile}
        onError={onError}
      ></ImageLoader>
    </div>
  );
};
