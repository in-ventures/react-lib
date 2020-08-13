/*
 * File: EmailValidator.ts
 * Project: components-lib
 * File Created: Friday, 24th July 2020 3:51:36 pm
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Thursday, 13th August 2020 11:39:10 am
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { RegexValidator } from './RegexValidator';
export class EmailValidator extends RegexValidator {
  constructor(input: string) {
    super(
      input,
      /^([a-zA-Z0-9_\-\+\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
    );
  }
}
