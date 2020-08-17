/*
 * File: Validator.ts
 * Project:  @inventures/react-lib
 * File Created: Friday, 24th July 2020 3:45:21 pm
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Monday, 17th August 2020 7:29:37 pm
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
interface ValidatorInterface<T = string> {
  validate: (input: T) => boolean;
  errorMsg: string;
}
export class Validator<T = string> implements ValidatorInterface<T> {
  errorMsg = '';
  constructor(errorMsg: string) {
    /**
     * Abstract Validator class, which implements the Validator Interface.
     *
     *
     * @param errorMsg - a @type String with the message to show in case the input is not valid
     *
     * @beta
     */
    this.errorMsg = errorMsg;
  }
  /* eslint-disable */
  validate(input: T) {
    /**
   * Validation abstract method. Needs to be implemented.
   *
   * @param input - The user input generic
   * @returns Method rises error if not implemented. 
   *
   * @beta
   */
    throw new Error('validate is not implemented');
    return false;
  }
  /* eslint-enable */
}
