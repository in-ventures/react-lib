/*
 * File: meki.ts
 * Project:  @inventures/react-lib
 * File Created: Thursday, 9th July 2020 8:05:19 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Wednesday, 2nd September 2020 5:40:45 pm
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
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
    h1: {
      fontSize: 93,
      lineHeight: 131,
      fontWeight: 'lighter',
      letterSpacing: -1.5,
    },
    h2: {
      fontSize: 58,
      lineHeight: 81,
      fontWeight: 'lighter',
      letterSpacing: -0.5,
    },
    h3: {
      fontSize: 46,
      lineHeight: 64,
      fontWeight: 'normal',
      letterSpacing: 0,
    },
    h4: {
      fontSize: 33,
      lineHeight: 47,
      fontWeight: 'normal',
      letterSpacing: 0.25,
    },
    h5: {
      fontSize: 23,
      lineHeight: 32,
      fontWeight: 'normal',
      letterSpacing: 0,
    },
    h6: {
      fontSize: 19,
      lineHeight: 27,
      fontWeight: 'bold',
      letterSpacing: 0.15,
    },
    subtitle1: {
      fontSize: 15,
      lineHeight: 21,
      fontWeight: 'normal',
      letterSpacing: 0.15,
    },
    subtitle2: {
      fontSize: 13,
      lineHeight: 19,
      fontWeight: 'bold',
      letterSpacing: 0.1,
    },
    body1: {
      fontSize: 15,
      lineHeight: 21,
      fontWeight: 'normal',
      letterSpacing: 0.15,
    },
    body2: {
      fontSize: 13,
      lineHeight: 19,
      fontWeight: 'normal',
      letterSpacing: 0.15,
    },
    caption: {
      fontSize: 12,
      lineHeight: 17,
      fontWeight: 'normal',
      letterSpacing: 0.4,
    },
    overline: {
      fontSize: 10,
      lineHeight: 15,
      fontWeight: 'normal',
      letterSpacing: 1.5,
    },
    button: {
      fontSize: 13,
      lineHeight: 19,
      fontWeight: 'normal',
      letterSpacing: 1.25,
    },
  },
  textFieldVariant: 'outlined',
});
