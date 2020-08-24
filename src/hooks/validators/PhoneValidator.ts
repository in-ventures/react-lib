/*
 * File: PhoneValidator.ts
 * Project: @inventures/react-lib
 * File Created: Friday, 14th August 2020 3:09:48 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Monday, 24th August 2020 2:40:51 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { Validator } from './Validator';
import { RegexValidator } from './RegexValidator';

export type CountryType = {
  id: number;
  countryName: string;
  countryDigitLength: number;
  countryPrefix: number;
};

export class LengthValidator extends Validator {
  maxLength: number;
  constructor(errorMsg: string, maxLength: number) {
    super(errorMsg);
    this.maxLength = maxLength;
  }

  validate(input: string) {
    console.log(this.maxLength);
    if (input.length !== this.maxLength)
      this.errorMsg = `¡Ojo! Te faltan ${
        this.maxLength - input.length
      } dígitos`;
    if (input.length !== this.maxLength && input.length > this.maxLength)
      this.errorMsg = `¡Ojo! Te has pasado por  ${
        input.length - this.maxLength
      } dígitos`;
    return Boolean(input.length === this.maxLength);
  }
  get _tag() {
    return this.errorMsg + `-${this.maxLength}`;
  }
}

export class NumericValidator extends RegexValidator {
  constructor(input: string) {
    super(input, /^\d+$/);
  }
}
