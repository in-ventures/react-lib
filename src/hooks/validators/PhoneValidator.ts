/*
 * File: PhoneValidator.ts
 * Project: @inventures/react-lib
 * File Created: Friday, 14th August 2020 3:09:48 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Tuesday, 18th August 2020 7:03:38 pm
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
  countryDigitLength: Number;
  countryPrefix: Number;
}

export class PhoneValidator extends Validator {

  //countryDigits = 0;
  constructor(errorMsg: string) {
    super(errorMsg);
    //this.countryDigits = countryDigits;
  }
  
  validate(input: string, countryInfo: CountryType) {
    console.log('validate with:', countryInfo);
    console.log('input at validator is: ', input);
    if (countryInfo) return Boolean(input.length == countryInfo.countryDigitLength);
    return Boolean(true);
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
