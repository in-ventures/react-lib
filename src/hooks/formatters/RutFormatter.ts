/*
 * File: RutFormatter.ts
 * Project: @inventures/react-lib
 * File Created: Tuesday, 25th August 2020 4:00:26 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Tuesday, 25th August 2020 4:01:34 pm
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
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
      const formattedText = rutFormat(input);
      return formattedText;
    }
  }




