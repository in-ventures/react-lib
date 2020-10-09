/*
 * File: useDebouncedCallback.ts
 * Project: @inventures/react-lib
 * File Created: Wednesday, 7th October 2020 11:59:01 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Friday, 9th October 2020 5:07:03 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { useCallback, useRef } from 'react';
import debounce from 'lodash/debounce';

export function useDebouncedCallback(
  callback: (...args: any[]) => any,
  debounceTime: number,
  dependencies: any[],
) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const executableCallback = useCallback(callback, dependencies);
  const debounceRef = useRef(
    debounce((...args) => {
      executableCallback(...args);
    }, debounceTime),
  );
  return debounceRef.current;
}
