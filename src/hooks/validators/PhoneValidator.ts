/*
 * File: PhoneValidator.ts
 * Project: @inventures/react-lib
 * File Created: Friday, 14th August 2020 3:09:48 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Thursday, 20th August 2020 4:12:08 pm
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
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
  //countryDigits = 0;
  constructor(errorMsg: string) {
    super(errorMsg);
    //this.countryDigits = countryDigits;
  }

  validate(input: string, maxLength: number) {
    if (maxLength) {
      this.errorMsg =
        '¡Ojo! Te faltan ' + (maxLength - input.length) + ' dígitos';
      if (input.length > maxLength)
        this.errorMsg =
          '¡Ojo! Te has pasado por ' + (input.length - maxLength) + ' dígitos';
      return Boolean(input.length == maxLength);
    }

    return Boolean(true);
  }
}

export class NumericValidator extends RegexValidator {
  constructor(input: string) {
    super(input, /^\d+$/);
  }
}
