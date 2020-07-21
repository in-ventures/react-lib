/*
 * File: meki.ts
 * Project: components-lib
 * File Created: Thursday, 9th July 2020 8:05:19 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Tuesday, 21st July 2020 12:56:22 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { themeGenerator } from './themeGenerator';

export const mekiTheme = themeGenerator({
  palette: {
    primary: {
      main: '#1C3E71',
      light: '#4F68A0',
      dark: '#001945',
    },
    secondary: {
      main: '#F2D200',
      light: '#FFFF51',
      dark: '#BBA100',
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
  textFieldVariant: 'outlined',
});
