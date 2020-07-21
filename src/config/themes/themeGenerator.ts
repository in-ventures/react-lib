/*
 * File: themeGenerator.ts
 * Project: components-lib
 * File Created: Friday, 10th July 2020 12:05:20 pm
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Friday, 10th July 2020 12:09:07 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { ThemeOptions } from "@material-ui/core";

type themeGeneratorInput = {
  textFieldVariant: string;
} & ThemeOptions;
export const themeGenerator = (data: themeGeneratorInput) => {
  return {
    ...data,
    props: {
      ...data.props,
      MuiTextField: {
        variant: data.textFieldVariant,
        ...data.props?.MuiTextField,
      },
    },
  };
};
