/*
 * File: PhoneValidator.ts
 * Project: @inventures/react-lib
 * File Created: Friday, 14th August 2020 3:09:48 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Monday, 24th August 2020 5:26:44 pm
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { Validator } from './Validator';

export class LengthValidator extends Validator {
  requiredLength: number;
  constructor(errorMsg: string, maxLength: number) {
    super(errorMsg);
    this.requiredLength = maxLength;
  }

  validate(input: string) {
    return Boolean(input.length === this.requiredLength);
  }
  get _tag() {
    return this.errorMsg + `-${this.requiredLength}`;
  }
}
