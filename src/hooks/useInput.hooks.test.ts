/*
 * File: useInput.hooks.test.ts
 * Project: @inventures/react-lib
 * File Created: Tuesday, 25th August 2020 4:50:02 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Tuesday, 12th October 2021 11:14:09 am
 * Modified By: Luis Aparicio (luis@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { useInput } from './useInput.hooks';
import { renderHook, act } from '@testing-library/react-hooks';
import { LengthValidator } from '../validators/LengthValidator';
import { NumericValidator } from '../validators/NumericValidator';
import { EmailValidator } from '../validators/EmailValidator';
import { RutValidator } from '../validators/RutValidator';
import { RutFormatValidator } from '../validators/RutFormatValidator';

import { AccentRemoverFormatter } from '../formatters/AccentRemover';
import { RutFormatter } from '../formatters/RutFormatter';

describe('Should validate correct RUT last digit', () => {
  test('Correct last character of a Chilean RUT', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useInput('', {
        formatter: new RutFormatter(),
        validators: [
          new RutFormatValidator('incomplete'),
          new RutValidator('valid'),
        ],
        debounceTime: 10,
      }),
    );

    expect(result.current[2]).toBe('success');

    act(() => {
      result.current[1]('11');
    });
    // debounce wait
    expect(result.current[2]).toBe('pending');
    await waitForNextUpdate();
    expect(result.current[2]).toBe('error');

    act(() => {
      result.current[1]('111111111');
    });
    // debounce wait
    expect(result.current[2]).toBe('pending');
    await waitForNextUpdate();
    expect(result.current[2]).toBe('success');

    // Wrong verification digit
    act(() => {
      result.current[1]('111111115');
    });
    // debounce wait
    expect(result.current[2]).toBe('pending');
    await waitForNextUpdate();
    expect(result.current[2]).toBe('error');
  });
});

describe('Should validate the correct input for phone', () => {
  // test length validator works for fixed lenght
  test('Should validate the correct phone length for the selected country', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useInput('', {
        validators: [new LengthValidator('wrong phone length', 9)],
        debounceTime: 10,
      }),
    );

    expect(result.current[2]).toBe('success');

    // Correct phone length
    act(() => {
      result.current[1]('123456789');
    });
    // debounce wait
    expect(result.current[2]).toBe('pending');
    await waitForNextUpdate();
    expect(result.current[2]).toBe('success');

    // Wrong phone length
    act(() => {
      result.current[1]('11');
    });
    // debounce wait
    expect(result.current[2]).toBe('pending');
    await waitForNextUpdate();
    expect(result.current[2]).toBe('error');
  });

  // test that length validator works for changing length
  test('Should validate the correct phone length for the selected country', async () => {
    const { result, rerender, waitForNextUpdate } = renderHook(
      (props) =>
        useInput('', {
          validators: [
            new LengthValidator('wrong phone length', props.countryDigits),
          ],
          debounceTime: 10,
        }),
      { initialProps: { countryDigits: 9 } },
    );

    expect(result.current[2]).toBe('success');

    // Correct phone length
    act(() => {
      result.current[1]('123456789');
    });
    // debounce wait
    expect(result.current[2]).toBe('pending');
    await waitForNextUpdate();
    expect(result.current[2]).toBe('success');

    // CHANGE COUNTRY DIGITS
    rerender({ countryDigits: 10 });
    // debounce wait
    expect(result.current[2]).toBe('error');
  });

  // test that numeric validator works correctly
  test('Should validate only numeric inputs for phone', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useInput('', {
        validators: [new NumericValidator('non numeric input')],
        debounceTime: 10,
      }),
    );

    expect(result.current[2]).toBe('success');

    // Correct numeric phone
    act(() => {
      result.current[1]('123456789');
    });
    // debounce wait
    expect(result.current[2]).toBe('pending');
    await waitForNextUpdate();
    expect(result.current[2]).toBe('success');

    // Wrong alphabetic phone
    act(() => {
      result.current[1]('aaa');
    });
    // debounce wait
    expect(result.current[2]).toBe('pending');
    await waitForNextUpdate();
    expect(result.current[2]).toBe('error');
  });
});

describe('Should validate the presence of no accentuated characters', () => {
  test('Email formatter correctly removes accents', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useInput('', {
        formatter: new AccentRemoverFormatter(),
        validators: [new EmailValidator('incorrect email format')],
        debounceTime: 10,
      }),
    );

    expect(result.current[2]).toBe('success');

    // Try incorrect email
    act(() => {
      result.current[1]('email@gmail');
    });
    // debounce wait
    expect(result.current[2]).toBe('pending');
    await waitForNextUpdate();
    expect(result.current[2]).toBe('error');

    // Try correct email
    act(() => {
      result.current[1]('email@gmail.com');
    });
    // debounce wait
    expect(result.current[2]).toBe('pending');
    await waitForNextUpdate();
    expect(result.current[2]).toBe('success');

    // Try email with accents and caps --> should be removed by formatter
    act(() => {
      result.current[1]('éMáÍl@Gmáíl.Cóm');
    });

    expect(result.current[0]).toBe('email@gmail.com');

    // debounce wait
    expect(result.current[2]).toBe('pending');
    await waitForNextUpdate();
    expect(result.current[2]).toBe('success');
  });
});
