/*
 * File: preview.js
 * Project:  @inventures/react-lib
 * File Created: Thursday, 9th July 2020 12:56:32 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Tuesday, 1st September 2020 5:50:59 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
import { addParameters } from '@storybook/client-api';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { muiThemeDecorator } from '../src/config/storybook/muiTheme'
export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
export const decorators = [muiThemeDecorator];