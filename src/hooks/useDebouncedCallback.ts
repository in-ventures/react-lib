/*
 * File: useDebouncedCallback.ts
 * Project: @inventures/react-lib
 * File Created: Wednesday, 7th October 2020 11:59:01 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Tuesday, 3rd August 2021 3:44:19 pm
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback: (...args: any[]) => any,
  debounceTime: number,
) {
  const executableCallback = useRef(callback);
  useEffect(() => {
    executableCallback.current = callback;
  }, [callback]);
  const debounceRef = useRef(
    debounce((...args) => {
      executableCallback.current(...args);
    }, debounceTime),
  );
  return debounceRef.current;
}
