/*
 * File: RutValidator.ts
 * Project: components-lib
 * File Created: Friday, 24th July 2020 4:06:33 pm
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Friday, 24th July 2020 4:07:55 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
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
    return rutValidate(input);
  }
}
