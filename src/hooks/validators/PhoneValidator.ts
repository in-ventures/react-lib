/*
 * File: PhoneValidator.ts
 * Project: @inventures/react-lib
 * File Created: Friday, 14th August 2020 3:09:48 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Monday, 17th August 2020 5:46:25 pm
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { Validator } from './Validator';
import { RegexValidator } from './RegexValidator';

export class PhoneValidator extends Validator {

  countryDigits = 0;
  constructor(errorMsg: string, countryDigits: number) {
    super(errorMsg);
    this.countryDigits = countryDigits;
  }
  
  validate(input: string) {
    console.log('validate with:', this.countryDigits);
    return Boolean(input.length == this.countryDigits);
  }
}

export class NumericValidator extends RegexValidator {
    constructor(input: string) {
        super(
          input,
          /^\d+$/,
        );
      }
}
