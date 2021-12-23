/*
 * File: CellphoneValidator.ts
 * Project: @inventures/react-lib
 * File Created: Wednesday, 22nd December 2021 4:41:17 pm
 * Author: Luis Aparicio (luis@inventures.cl)
 * -----
 * Last Modified: Wednesday, 22nd December 2021 4:48:33 pm
 * Modified By: Luis Aparicio (luis@inventures.cl)
 * -----
 * Copyright 2019 - 2021 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { RegexValidator } from './RegexValidator';

export class CellphoneValidator extends RegexValidator {
  constructor(input: string) {
    super(input, /^9/);
  }
}
