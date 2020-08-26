/*
 * File: useInput.hooks.test.ts
 * Project: @inventures/react-lib
 * File Created: Tuesday, 25th August 2020 4:50:02 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Wednesday, 26th August 2020 4:30:35 pm
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { useInput } from './useInput.hooks';
import { renderHook, act } from '@testing-library/react-hooks';
import {
  RutFormatValidator,
  RutValidator,
  EmailValidator,
  NumericValidator,
  LengthValidator,
} from '../hooks/validators';
import { AccentRemoverFormatter, RutFormatter } from '../hooks/formatters';

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
    test('Should validate the correct phone length for the selected country', async () => {
        let countryDigits = 9;
        const { result, waitForNextUpdate } = renderHook(() => 
            useInput('', {
                validators: [
                new LengthValidator('wrong phone length', countryDigits),
                ],
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

        // CHANGE COUNTRY DIGITS
        countryDigits = 10;
        act(() => {
            result.current[1]('123456789');
        });
        // debounce wait
        expect(result.current[2]).toBe('pending');
        await waitForNextUpdate();
        expect(result.current[2]).toBe('error');
    });

    test('Should validate only numeric inputs for phone', async () => {
        const { result, waitForNextUpdate } = renderHook(() => 
            useInput('', {
                validators: [
                    new NumericValidator('non numeric input'),
                ],
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
                validators: [
                    new EmailValidator('incorrect email format'),
                ],
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
        // debounce wait
        expect(result.current[2]).toBe('pending');
        await waitForNextUpdate();
        expect(result.current[2]).toBe('success'); 
    });
});

