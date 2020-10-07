/*
 * File: useDebouncedCallback.ts
 * Project: @inventures/react-lib
 * File Created: Wednesday, 7th October 2020 11:59:01 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Wednesday, 7th October 2020 12:09:28 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { useCallback } from 'react';
import debounce from 'lodash/debounce';
import { useDeepDependencies } from './useDeepDependencies';

export function useDebouncedCallback(
  callback: (...args: any[]) => any,
  debounceTime: number,
  dependencies: any[],
) {
  const deepDependencies = useDeepDependencies(dependencies);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(debounce(callback, debounceTime), deepDependencies);
}
