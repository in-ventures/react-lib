/*
 * File: meki.ts
 * Project:  @inventures/react-lib
 * File Created: Thursday, 9th July 2020 8:05:19 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Monday, 9th November 2020 9:45:09 am
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
      main: '#0277BD',
      light: '#58A5F0',
      dark: '#004C8C',
      contrastText: '#fff',
    },
    secondary: {
      main: '#00848F',
      light: '#4FB3BF',
      dark: '#005662',
      contrastText: '#fff',
    },
    success: {
      main: '#4CAF50',
      light: '#81C784',
      dark: '#388E3C',
    },
    info: {
      main: '#2196F3',
      light: '#BBDEFB',
      dark: '#0B79D0',
    },
    warning: {
      main: '#FF9800',
      light: '#FFB74D',
      dark: '#F57C00',
    },
    error: {
      main: '#F44336',
      light: '#E57373',
      dark: '#D32F2F',
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
