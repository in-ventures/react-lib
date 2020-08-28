/*
 * File: RutFormatter.ts
 * Project: @inventures/react-lib
 * File Created: Tuesday, 25th August 2020 4:00:26 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Friday, 28th August 2020 11:05:27 am
 * Modified By: Mario Merino (mario@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { rutFormat } from 'rut-helpers';
import { Formatter } from './Formatter';

export class RutFormatter extends Formatter {
  format(input: string) {
    // limit the max amount of characters
    const inputSliced = input.slice(0, 12);
    // format and validate
    const formattedText = rutFormat(inputSliced);
    return formattedText;
  }
}
