/*
 * File: dercocenterx.ts
 * Project: components-lib
 * File Created: Thursday, 9th July 2020 8:05:14 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Thursday, 9th July 2020 8:12:15 am
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { createMuiTheme } from "@material-ui/core/styles";

export const dercocenterxTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#1F2183",
      light: "#574AB4",
      dark: "#000055",
    },
    secondary: {
      main: "#FF0060",
      light: "#FF5C8D",
      dark: "#C40037",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
  props: {
    MuiTextField: {
      variant: "outlined",
    },
  },
});
