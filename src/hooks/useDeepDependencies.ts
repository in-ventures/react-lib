/*
 * File: useDeepDependencies.ts
 * Project: @inventures/react-lib
 * File Created: Wednesday, 7th October 2020 11:17:29 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Thursday, 14th October 2021 3:37:47 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
import 'regenerator-runtime/runtime.js';
import { DependencyList, useEffect, useRef } from 'react';
import isEqual from 'lodash/isEqual';

export function useDeepDependencies(dependencies: DependencyList) {
  const dependenciesRef = useRef(dependencies);
  useEffect(() => {
    if (!isEqual(dependencies, dependenciesRef.current)) {
      dependenciesRef.current = dependencies;
    }
  });
  return dependenciesRef.current;
}
