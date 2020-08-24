/*
 * File: Validator.ts
 * Project:  @inventures/react-lib
 * File Created: Friday, 24th July 2020 3:45:21 pm
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Monday, 24th August 2020 1:33:21 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
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
    this.errorMsg = errorMsg;
  }
  /* eslint-disable */
  validate(input: T, extra?: any) {
    throw new Error('validate is not implemented');
    return false;
  }
  /* eslint-enable */

  get _tag() {
    return this.errorMsg;
  }
}
