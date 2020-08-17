/*
 * File: EmailValidator.ts
 * Project:  @inventures/react-lib
 * File Created: Friday, 24th July 2020 3:51:36 pm
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Monday, 17th August 2020 7:07:53 pm
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { RegexValidator } from './RegexValidator';
export class EmailValidator extends RegexValidator {
  constructor(input: string) {
    /**
     * Class implements RegexValidator to check email format accuracy
     *
     * @param input - The user input string
     * @returns The match with the given regex
     *
     * @beta
     */

    super(
      input,
      /^([a-zA-Z0-9_\-\+\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
    );
  }
}
