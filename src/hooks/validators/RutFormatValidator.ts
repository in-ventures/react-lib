/*
 * File: RutFormatValidator.ts
 * Project: components-lib
 * File Created: Friday, 24th July 2020 3:54:21 pm
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Friday, 24th July 2020 3:58:12 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { RegexValidator } from './RegexValidator';
export class RutFormatValidator extends RegexValidator {
  constructor(input: string) {
    super(input, /^\d{1,2}\.\d{3}\.\d{3}[-][0-9K]{1}$/);
  }
}
