/*
 * File: MaskFormatter.ts
 * Project: @inventures/react-lib
 * File Created: Tuesday, 1st September 2020 3:45:13 pm
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Tuesday, 1st September 2020 4:54:35 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { Formatter } from './Formatter';

export class MaskFormatter extends Formatter {
  mask: string;
  constructor(mask: string) {
    super();
    this.mask = mask;
  }
  format(input: string) {
    let missingMask = this.mask;
    let newText = '';
    input.split('').forEach((char) => {
      if (missingMask.length === 0) return;
      let maskChar = missingMask[0];
      missingMask = missingMask.slice(1);
      if (maskChar === char) return (newText += char);
      while (missingMask.length > 0 && maskChar !== '*') {
        newText += maskChar;
        maskChar = missingMask[0];
        missingMask = missingMask.slice(1);
      }
      if (maskChar === '*') return (newText += char);
    });
    const index = newText.indexOf('*');
    return index > -1 ? newText.slice(0, index) : newText;
  }
}
