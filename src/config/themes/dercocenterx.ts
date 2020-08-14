/*
 * File: dercocenterx.ts
 * Project:  @inventures/react-lib
 * File Created: Thursday, 9th July 2020 8:05:14 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Tuesday, 21st July 2020 1:29:18 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { themeGenerator } from './themeGenerator';

export const dercocenterxTheme = themeGenerator({
  palette: {
    primary: {
      main: '#1F2183',
      light: '#574AB4',
      dark: '#000055',
    },
    secondary: {
      main: '#FF0060',
      light: '#FF5C8D',
      dark: '#C40037',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
  },
  textFieldVariant: 'filled',
});
