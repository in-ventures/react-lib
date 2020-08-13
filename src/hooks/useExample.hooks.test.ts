/*
 * File: useExample.hooks.test.ts
 * Project: @inventures/react-lib
 * File Created: Thursday, 13th August 2020 11:43:43 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Thursday, 13th August 2020 11:52:41 am
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { useState, useCallback } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = useCallback(() => setCount((x) => x + 1), []);
  const incrementAsync = useCallback(
    () => setTimeout(() => setCount((x) => x + 1), 1000),
    [],
  );
  return { count, increment, incrementAsync };
}
describe('sould use counter', () => {
  test('no initial value', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
    expect(typeof result.current.increment).toBe('function');
  });
  test('initial value', () => {
    const initialValue = 17;
    const { result } = renderHook(() => useCounter(initialValue));
    expect(result.current.count).toBe(initialValue);
    expect(typeof result.current.increment).toBe('function');
  });
});

describe('sould increment counter', () => {
  test('increment once', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });
  test('increment multiple', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
    act(() => {
      result.current.increment();
      result.current.increment();
      result.current.increment();
    });

    expect(result.current.count).toBe(4);
  });
  test('increment async', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCounter());

    result.current.incrementAsync();

    await waitForNextUpdate();
    expect(result.current.count).toBe(1);
  });
});
