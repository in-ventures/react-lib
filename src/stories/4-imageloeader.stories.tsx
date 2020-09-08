import React, { useState } from 'react';
import ImageLoader from '../components/ImageLoader';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'Image Loader',
};

export const Base = () => {
  const [file, setFile] = useState('');
  const alt = text('Alt', 'Medicamento');
  const objectFit = text('Object fit', 'contain');

  return (
    <div style={{ width: '200px', height: '200px' }}>
      <ImageLoader
        objectFit={objectFit}
        file={file}
        alt={alt}
        setFile={setFile}
      ></ImageLoader>
    </div>
  );
};
