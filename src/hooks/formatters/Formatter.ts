/*
 * File: Formatter.ts
 * Project: @inventures/react-lib
 * File Created: Monday, 17th August 2020 5:43:25 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Tuesday, 25th August 2020 3:10:10 pm
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

interface FormatterInterface<T = string> {
  format: (input: T) => string;
}

export class Formatter<T = string> implements FormatterInterface<T> {
  /* eslint-disable */
  format(input: T) {
      throw new Error('Format function is not implemented');
      return '';
  }
  /* eslint-enable */
}
