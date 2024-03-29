/*
 * File: useDeepCallback.ts
 * Project: @inventures/react-lib
 * File Created: Wednesday, 7th October 2020 11:15:35 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Thursday, 14th October 2021 3:37:45 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
import 'regenerator-runtime/runtime.js';
import { DependencyList, useCallback } from 'react';
import { useDeepDependencies } from './useDeepDependencies';

export function useDeepCallback(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback: (...args: any[]) => any,
  dependencies: DependencyList,
) {
  const deepDependencies = useDeepDependencies(dependencies);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(callback, deepDependencies);
}
