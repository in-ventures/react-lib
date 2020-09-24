/*
 * File: DateValidator.ts
 * Project: @inventures/react-lib
 * File Created: Thursday, 3rd September 2020 6:40:13 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Thursday, 24th September 2020 3:12:13 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { Validator } from './Validator';
export class DateValidator extends Validator {
  dateRegex = new RegExp(/^([\d+]{2})\/([\d+]{2})\/([\d+]{4})$/);
  constructor(errorMsg: string) {
    super(errorMsg);
  }
  validate(input: string) {
    if (Boolean(input.match(this.dateRegex))) {
      const date = input.split('/');
      const correctDayMonth =
        +date[0] >= 1 && +date[0] <= 31 && +date[1] >= 1 && +date[1] <= 12;
      const thisYear = new Date().getFullYear();

      if (correctDayMonth && +date[2] <= thisYear) return true;
      return false;
    }
    return false;
  }
}
