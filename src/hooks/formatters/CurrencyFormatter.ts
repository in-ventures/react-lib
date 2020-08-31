/*
 * File: CurrencyFormatter.ts
 * Project: @inventures/react-lib
 * File Created: Monday, 31st August 2020 6:08:15 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Monday, 31st August 2020 6:46:11 pm
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { Formatter } from './Formatter';

export class CurrencyFormatter extends Formatter {
  format(input: number) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'CLP',
      });
    const formattedText = '$ '
      .concat(
        formatter.format(input)
        .substr(4,)
      );
    return formattedText;
  }
}