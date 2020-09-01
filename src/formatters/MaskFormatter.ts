/*
 * File: MaskFormatter.ts
 * Project: @inventures/react-lib
 * File Created: Tuesday, 1st September 2020 3:45:13 pm
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Tuesday, 1st September 2020 5:21:31 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { Formatter } from './Formatter';

const SUPPORTED_MASK_CHAR_REPLACE = ['*', 'A', '9'];

export class MaskFormatter extends Formatter {
  mask: string;
  constructor(mask: string) {
    super();
    this.mask = mask;
  }
  /**
   * Format the string following a mask
   * MaskChar replace supported:
   * - *: replace any char
   * - A: replace a alphabetic char
   * - 9: replace a numeric char
   * Replace all mask char supported with the input char given.
   * If the mask have chars not supported for replace, the char will be put in the output string
   * For examples, check the test file
   * @param input String
   */
  format(input: string) {
    let missingMask = this.mask;
    let newText = '';
    input.split('').forEach((char) => {
      if (missingMask.length === 0) return;
      let maskChar = missingMask[0];
      // If current mask char is supported, but current char doesn't match, omit char
      if (
        SUPPORTED_MASK_CHAR_REPLACE.includes(maskChar) &&
        ((maskChar === 'A' && !char.match(/[a-zA-Z]/)) ||
          (maskChar === '9' && !char.match(/[0-9]/)))
      )
        return;
      missingMask = missingMask.slice(1);
      if (maskChar === char) return (newText += char);

      while (
        missingMask.length > 0 &&
        !SUPPORTED_MASK_CHAR_REPLACE.includes(maskChar)
      ) {
        newText += maskChar;
        maskChar = missingMask[0];
        missingMask = missingMask.slice(1);
      }
      if (maskChar === '*') return (newText += char);
      if (maskChar === 'A' && char.match(/[a-zA-Z]/)) return (newText += char);
      if (maskChar === '9' && char.match(/[0-9]/)) return (newText += char);
    });
    const index = newText.indexOf('*');
    return index > -1 ? newText.slice(0, index) : newText;
  }
}
