/*
 * File: RegexValidator.ts
 * Project:  @inventures/react-lib
 * File Created: Friday, 24th July 2020 3:54:54 pm
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Monday, 17th August 2020 7:08:09 pm
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
import { Validator } from './Validator';
export class RegexValidator extends Validator {
  regex = new RegExp('');
  constructor(errorMsg: string, regex: RegExp) {
    /**
     * Regex Validator Class matches given string to a given RegExp
     *
     * @remarks
     * This class is implemented by specific Regex validators such as EmailValidator
     *
     * @param errorMsg - string with the error message to show in case of negative match
     * @param regex - RegExp containing the RegExp to match the given string
     *
     * @beta
     */
    super(errorMsg);
    this.regex = regex;
  }
  validate(input: string) {
    /**
     * Regex validation method
     *
     * @param input - The user input string to check
     * @returns The match with the regex set in the constructor
     *
     * @beta
     */
    return Boolean(input.match(this.regex));
  }
}
