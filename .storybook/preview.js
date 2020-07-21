/*
 * File: preview.js
 * Project: components-lib
 * File Created: Thursday, 9th July 2020 12:56:32 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Tuesday, 21st July 2020 1:18:35 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { addParameters } from '@storybook/client-api';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { muiThemeDecorator } from '../src/config/storybook/muiTheme';

addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator(muiThemeDecorator);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
