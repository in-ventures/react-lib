/*
 * File: meki.ts
 * Project:  @inventures/react-lib
 * File Created: Thursday, 9th July 2020 8:05:19 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Thursday, 3rd September 2020 6:18:24 pm
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
      fontSize: '93px',
      lineHeight: '131px',
      fontWeight: 300,
      letterSpacing: '-1.5px',
    },
    h2: {
      fontSize: '58px',
      lineHeight: '81px',
      fontWeight: 400,
      letterSpacing: '-0.5px',
    },
    h3: {
      fontSize: '46px',
      lineHeight: '64px',
      fontWeight: 400,
      letterSpacing: '0px',
    },
    h4: {
      fontSize: '33px',
      lineHeight: '47px',
      fontWeight: 400,
      letterSpacing: '0.25px',
    },
    h5: {
      fontSize: '23px',
      lineHeight: '32px',
      fontWeight: 400,
      letterSpacing: '0px',
    },
    h6: {
      fontSize: '19px',
      lineHeight: '27px',
      fontWeight: 500,
      letterSpacing: '0.15px',
    },
    subtitle1: {
      fontSize: '15px',
      lineHeight: '21px',
      fontWeight: 400,
      letterSpacing: '0.15px',
    },
    subtitle2: {
      fontSize: '13px',
      lineHeight: '19px',
      fontWeight: 500,
      letterSpacing: '0.1px',
    },
    body1: {
      fontSize: '15px',
      lineHeight: '21px',
      fontWeight: 400,
      letterSpacing: '0.15px',
    },
    body2: {
      fontSize: '13px',
      lineHeight: '19px',
      fontWeight: 400,
      letterSpacing: '0.15px',
    },
    caption: {
      fontSize: '12px',
      lineHeight: '17px',
      fontWeight: 400,
      letterSpacing: '0.4px',
    },
    overline: {
      fontSize: '10px',
      lineHeight: '15px',
      fontWeight: 400,
      letterSpacing: '1.5px',
    },
    button: {
      fontSize: '13px',
      lineHeight: '19px',
      fontWeight: 500,
      letterSpacing: '1.25px',
    },
  },
  textFieldVariant: 'outlined',
});
