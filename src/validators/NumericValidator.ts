/*
 * File: NumericValidator.ts
 * Project: @inventures/react-lib
 * File Created: Monday, 24th August 2020 3:29:54 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Monday, 24th August 2020 3:30:24 pm
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { RegexValidator } from './RegexValidator';

export class NumericValidator extends RegexValidator {
  constructor(input: string) {
    super(input, /^\d+$/);
  }
}
