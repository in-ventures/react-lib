/*
 * File: RegexValidator.ts
 * Project:  @inventures/react-lib
 * File Created: Friday, 24th July 2020 3:54:54 pm
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Friday, 24th July 2020 3:55:59 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
import { Validator } from './Validator';
export class RegexValidator extends Validator {
  regex = new RegExp('');
  constructor(errorMsg: string, regex: RegExp) {
    super(errorMsg);
    this.regex = regex;
  }
  validate(input: string) {
    return Boolean(input.match(this.regex));
  }
}
