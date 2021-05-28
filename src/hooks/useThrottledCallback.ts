/*
 * File: useDebouncedCallback.ts
 * Project: @inventures/react-lib
 * File Created: Wednesday, 7th October 2020 11:59:01 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Friday, 28th May 2021 11:59:52 am
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { useEffect, useRef } from 'react';
import throttle from 'lodash/throttle';

export function useThrottledCallback(
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
