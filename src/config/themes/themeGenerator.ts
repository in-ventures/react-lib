/*
 * File: themeGenerator.ts
 * Project:  @inventures/react-lib
 * File Created: Friday, 10th July 2020 12:05:20 pm
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Tuesday, 3rd August 2021 3:36:24 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { ThemeOptions, Theme, createMuiTheme } from '@material-ui/core';

type themeGeneratorInput = {
  textFieldVariant?: 'outlined' | 'filled';
} & ThemeOptions;
export const themeGenerator = (data: themeGeneratorInput): Theme => {
  const muiTheme = createMuiTheme({
    ...data,
    props: {
      ...data.props,
      MuiTextField: {
        variant: data.textFieldVariant,
        ...data.props?.MuiTextField,
      },
    },
  } as unknown as Theme);
  return muiTheme;
};
