/*
 * File: useDebouncedCallback.ts
 * Project: @inventures/react-lib
 * File Created: Wednesday, 7th October 2020 11:59:01 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Thursday, 14th October 2021 3:37:56 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
import 'regenerator-runtime/runtime.js';
import { useEffect, useRef } from 'react';
import throttle from 'lodash/throttle';

export function useThrottledCallback(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback: (...args: any[]) => any,
  throttleTime: number,
) {
  const executableCallback = useRef(callback);
  useEffect(() => {
    executableCallback.current = callback;
  }, [callback]);
  const debounceRef = useRef(
    throttle(
      (...args) => {
        executableCallback.current(...args);
      },
      throttleTime,
      { leading: false },
    ),
  );
  return debounceRef.current;
}
