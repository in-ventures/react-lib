/*
 * File: EmailFormatter.ts
 * Project: @inventures/react-lib
 * File Created: Monday, 17th August 2020 5:42:54 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Monday, 17th August 2020 6:07:44 pm
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */


import { Formatter } from './Formatter';

export class LatinFormatter extends Formatter {
  format(input: string) {
    const formattedText = input.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    return (formattedText);
  }
}

export const LatinEmailFormatter = (input: string) => {
  const formattedText = input.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  return (formattedText);
}





