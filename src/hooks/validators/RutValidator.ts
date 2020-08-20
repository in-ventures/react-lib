/*
 * File: RutValidator.ts
 * Project: components-lib
 * File Created: Friday, 24th July 2020 4:06:33 pm
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Thursday, 20th August 2020 4:12:00 pm
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
    return rutValidate(input);
  }
}
