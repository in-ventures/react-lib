/*
 * File: 2-TextField.stories.tsx
 * Project: components-lib
 * File Created: Wednesday, 8th July 2020 1:55:18 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Tuesday, 21st July 2020 10:40:00 pm
 * Modified By: Mario Merino (mario@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
import React from 'react';
import { text, boolean, number } from '@storybook/addon-knobs';
import { Input, RutInput } from '../lib/components/input';

export default {
  title: 'Input',
};
export const Base = () => <Input />;
export const InputForRut = () => {
  // const required = boolean('Required', false);
  const debounceTime = number('Debounce time (ms)', 800);
  const defaultValue = text('Default RUT', '11.111.111');
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <RutInput label="Rut* (1600 ms)" style={{ margin: '20px' }} />
      <RutInput
        label="Rut* (800 ms)"
        style={{ margin: '20px' }}
        debounceTime={debounceTime}
      />
    </div>
  );
};

Base.story = {
  name: 'Base element',
};
