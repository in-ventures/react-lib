/*
 * File: useDeepEffect.ts
 * Project: @inventures/react-lib
 * File Created: Wednesday, 7th October 2020 11:22:32 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Thursday, 14th October 2021 3:37:49 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
import 'regenerator-runtime/runtime.js';
import { EffectCallback, useEffect } from 'react';
import { useDeepDependencies } from './useDeepDependencies';

export function useDeepEffect(
  callback: EffectCallback,
  dependencies: unknown[],
) {
  const deepDependencies = useDeepDependencies(dependencies);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useEffect(callback, deepDependencies);
}
