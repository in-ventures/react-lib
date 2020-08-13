/*
 * File: preview.js
 * Project: components-lib
 * File Created: Thursday, 9th July 2020 12:56:32 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Thursday, 13th August 2020 11:22:08 am
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
import { addParameters } from '@storybook/client-api';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
