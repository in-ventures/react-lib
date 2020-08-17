/*
 * File: RequiredValidator.ts
 * Project:  @inventures/react-lib
 * File Created: Friday, 24th July 2020 3:46:35 pm
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Monday, 17th August 2020 7:28:04 pm
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { Validator } from './Validator';
export class RequiredValidator extends Validator {
  validate(input: string) {
    /**
     * This class checks if input has been given. It is a Validator Class
     *
     * @param input - The user input string
     * @returns a @type Boolean wether input is present or not
     *
     * @beta
     */
    return Boolean(input);
  }
}
