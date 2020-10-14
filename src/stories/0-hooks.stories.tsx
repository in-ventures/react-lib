/*
 * File: 0-hooks.stories.tsx
 * Project: @inventures/react-lib
 * File Created: Friday, 9th October 2020 4:50:42 pm
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Wednesday, 14th October 2020 1:22:14 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import React, { useState } from 'react';
import { useDebouncedCallback } from '../hooks';

export default {
  title: 'Helpful Hooks',
};
export const useDebouncedCallbackExample = () => {
  const [count, setCount] = useState(0);
  const [debouncedCount, setDebouncedCount] = useState(0);
  const debouncedIncrement = useDebouncedCallback(() => {
    console.log('debounced count', { count });
    setDebouncedCount(count);
  }, 600);
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <button
        onClick={() => {
          setCount((c) => c + 1);
          debouncedIncrement();
        }}
      >
        +
      </button>
      <span>count {count}</span>
      <span>debounced count {debouncedCount}</span>
    </div>
  );
};
