/*
 * File: useDebugStateChange.ts
 * Project: meki
 * File Created: Monday, 28th September 2020 10:45:35 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Thursday, 14th October 2021 3:37:40 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
import 'regenerator-runtime/runtime.js';
import { useEffect, useRef } from 'react';

export function useDebugStateChange(msg: string, state: unknown) {
  const valueRef = useRef(state);
  useEffect(() => {
    console.log(msg, { from: valueRef.current, to: state });
    valueRef.current = state;
  }, [state, msg]);
}
