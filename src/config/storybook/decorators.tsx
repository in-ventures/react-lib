/*
 * File: decorators.ts
 * Project: components-lib
 * File Created: Thursday, 9th July 2020 8:12:58 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Thursday, 9th July 2020 8:20:27 am
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
import React from "react";
import addons, { makeDecorator } from "@storybook/addons";
import { MuiThemeProvider, Theme } from "@material-ui/core";
import { mekiTheme } from "../../config/themes/meki";
import { dercocenterxTheme } from "../../config/themes/dercocenterx";

const themes: Record<string, Theme> = { mekiTheme, dercocenterxTheme };
export const muiThemeDecorator = makeDecorator({
  name: "muiThemeDecorator",
  parameterName: "muiTheme",
  wrapper: (getStory, context, { parameters }) => {
    console.log({ getStory, story: getStory(context), context, parameters });
    const theme = themes[parameters.theme as string];
    return (
      <MuiThemeProvider theme={theme}>{getStory(context)}</MuiThemeProvider>
    );
  },
});
