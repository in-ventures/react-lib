/*
 * File: RequiredValidator.ts
 * Project:  @inventures/react-lib
 * File Created: Friday, 24th July 2020 3:46:35 pm
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Friday, 24th July 2020 3:50:59 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { Validator } from './Validator';
export class RequiredValidator extends Validator {
  validate(input: string) {
    return Boolean(input);
  }
}
