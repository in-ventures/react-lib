/*
 * File: RutValidator.ts
 * Project:  @inventures/react-lib
 * File Created: Friday, 24th July 2020 4:06:33 pm
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Monday, 17th August 2020 7:22:31 pm
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
import { Validator } from './Validator';
import { rutValidate } from 'rut-helpers';
export class RutValidator extends Validator {
  validate(input: string) {
    /**
     * Checks wether or not a given Chilean RUT is valid
     *
     * @remarks
     * This method uses the {@link rut-helpers | rutValidate} method.
     *
     * @param input - The user input string
     * @returns a @type Boolean if the given RUT's digits are valid according to Chilean standards.
     *
     * @beta
     */
    return rutValidate(input);
  }
}
