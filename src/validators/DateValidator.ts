/*
 * File: DateValidator.ts
 * Project: @inventures/react-lib
 * File Created: Thursday, 3rd September 2020 6:40:13 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Friday, 4th September 2020 3:08:26 pm
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
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
    this.dateRegex = this.dateRegex;
  }
  validate(input: string) {
    if (Boolean(input.match(this.dateRegex))) {
      const date = input.split('/');
      const inputDate = new Date(+date[2], +date[1] - 1, +date[0]);
      const correctDayMonth =
        date[0].match(new RegExp(/^(3[01]|[12][0-9]|[1-9])$/)) &&
        date[1].match(new RegExp(/^(1[0-2]|[1-9])$/));
      const thisYear = new Date().getFullYear();

      if (correctDayMonth) return true;
      return false;
    }
    return false;
  }
}
