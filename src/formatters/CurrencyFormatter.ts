/*
 * File: CurrencyFormatter.ts
 * Project: @inventures/react-lib
 * File Created: Monday, 31st August 2020 6:08:15 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Wednesday, 30th June 2021 11:23:21 am
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { Formatter } from './Formatter';

interface CurrencyFormatterParams {
  fallback?: string;
}
export class CurrencyFormatter extends Formatter {
  fallback = '$ 0';
  constructor(params: CurrencyFormatterParams = {}) {
    super();
    if (params.fallback || params.fallback === '')
      this.fallback = params.fallback;
  }
  format(input: number) {
    if (input === 0) return this.fallback;
    if (!input) return '';
    return (
      '$ ' + String(input.toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //separate every 3 digits and use . to separate
    );
  }
}
