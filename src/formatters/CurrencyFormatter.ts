/*
 * File: CurrencyFormatter.ts
 * Project: @inventures/react-lib
 * File Created: Monday, 31st August 2020 6:08:15 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Monday, 1st February 2021 11:30:29 am
 * Modified By: Vicente Melin (vicente@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { Formatter } from './Formatter';

export class CurrencyFormatter extends Formatter {
  format(input: number) {
    return (
      '$ ' + String(input.toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //separate every 3 digits and use . to separate
    );
  }
}
