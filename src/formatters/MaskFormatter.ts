/*
 * File: MaskFormatter.ts
 * Project: @inventures/react-lib
 * File Created: Tuesday, 1st September 2020 3:45:13 pm
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Monday, 7th September 2020 10:33:07 am
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { Formatter } from './Formatter';
import is from 'is_js';

type Char = string | RegExp;
type Mask = string | string[] | Char[];

type SupportChecker = (char: Char) => boolean;
type MatchChecker = (input: string, regex?: RegExp) => boolean;
const CHAR_SUPPORT: [SupportChecker, MatchChecker][] = [
  [(char: Char) => is.string(char) && char === '*', () => true],
  [
    (char: Char) => is.string(char) && char === 'A',
    (char: string) => !!char.match(/[a-zA-Z]/),
  ],
  [
    (char: Char) => is.string(char) && char === '9',
    (char: string) => !!char.match(/[0-9]/),
  ],
  [
    (char: Char) => is.regexp(char),
    (char: string, regex?: RegExp) => !!regex && !!char.match(regex),
  ],
];

export class MaskFormatter extends Formatter {
  mask: Mask;
  constructor(mask: Mask) {
    super();
    this.mask = mask;
  }
  isSupportedChar(char: Char) {
    return CHAR_SUPPORT.some(([supportVerify]) => supportVerify(char));
  }

  // If current mask char is supported, but current char doesn't match, omit char
  isSupportedButMiss(inputChar: string, maskChar: Char) {
    return CHAR_SUPPORT.some(
      ([supportVerify, matchVerify]) =>
        supportVerify(maskChar) &&
        !matchVerify(
          inputChar,
          maskChar instanceof RegExp ? maskChar : undefined,
        ),
    );
  }

  isSupportedAndMatch(inputChar: string, maskChar: Char) {
    return CHAR_SUPPORT.some(
      ([supportVerify, matchVerify]) =>
        supportVerify(maskChar) &&
        matchVerify(
          inputChar,
          maskChar instanceof RegExp ? maskChar : undefined,
        ),
    );
  }
  /**
   * Format the string following a mask
   * MaskChar replace supported:
   * - *: replace any char
   * - A: replace a alphabetic char
   * - 9: replace a numeric char
   * - /regex/: replace with a char if match
   * Also supports an array of chars or RegExps.
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
      if (this.isSupportedButMiss(char, maskChar)) return;

      missingMask = missingMask.slice(1);
      if (maskChar === char) return (newText += char);

      while (missingMask.length > 0 && !this.isSupportedChar(maskChar)) {
        newText += maskChar;
        maskChar = missingMask[0];
        missingMask = missingMask.slice(1);
      }
      if (this.isSupportedAndMatch(char, maskChar)) return (newText += char);
    });
    const index = newText.indexOf('*');
    return index > -1 ? newText.slice(0, index) : newText;
  }
}
