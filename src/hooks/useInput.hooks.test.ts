/*
 * File: useInput.hooks.test.ts
 * Project: @inventures/react-lib
 * File Created: Tuesday, 25th August 2020 4:50:02 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Tuesday, 25th August 2020 6:56:42 pm
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import {useInput} from './useInput.hooks'
import { renderHook, act } from '@testing-library/react-hooks';
import {
    Validator,
    RutFormatValidator,
    RutValidator,
} from '../hooks/validators';
import { AccentRemoverFormatter, RutFormatter } from '../hooks/formatters';


describe('Should validate correct RUT last digit', () => {
    test('Correct RUT last ', () => {
        const {result} = renderHook(() => useInput('111111111', {
            formatter: new RutFormatter(),
            validators: [
                new RutFormatValidator('incomplete'),
                new RutValidator('valid'),
            ],
        }));

        act(() => {
            result.current.validate();
        });
        expect(result.current.status).toBe('success')
        

    });
});

describe('Should validate the correct country digit length', () => {

});

describe('Should validate the presence of no accentuated characters', () => {
    
});





/*
- test de validar dígito verificador correcto
- test de validar largo de país correcto
- Validar ausencia de tildes
*/