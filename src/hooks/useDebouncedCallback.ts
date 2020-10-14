/*
 * File: useDebouncedCallback.ts
 * Project: @inventures/react-lib
 * File Created: Wednesday, 7th October 2020 11:59:01 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Wednesday, 14th October 2020 1:20:41 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { useEffect, useRef } from 'react';
import debounce from 'lodash/debounce';

export function useDebouncedCallback(
  callback: (...args: any[]) => any,
  debounceTime: number,
) {
  const executableCallback = useRef(callback);
  useEffect(() => {
    console.log('change');
    executableCallback.current = callback;
  }, [callback]);
  const debounceRef = useRef(
    debounce((...args) => {
      console.log('execute debounce');
      executableCallback.current(...args);
    }, debounceTime),
  );
  return debounceRef.current;
}
