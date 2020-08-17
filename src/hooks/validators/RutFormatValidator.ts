/*
 * File: RutFormatValidator.ts
 * Project:  @inventures/react-lib
 * File Created: Friday, 24th July 2020 3:54:21 pm
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Monday, 17th August 2020 7:27:49 pm
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { RegexValidator } from './RegexValidator';
export class RutFormatValidator extends RegexValidator {
  constructor(input: string) {
    /**
     * Class checks the format of a given input and matches to Chilean RUT format.
     *
     * @remarks
     * This class is a RegexValidator class.
     *
     * @param input - The user input string
     * @returns a @type Boolean whether or not the input matches the given RUT RegEx
     *
     * @beta
     */
    super(input, /^\d{1,2}\.\d{3}\.\d{3}[-][0-9K]{1}$/);
  }
}
