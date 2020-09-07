/*
 * File: storybook.test.ts
 * Project: @inventures/react-lib
 * File Created: Thursday, 3rd September 2020 3:01:00 pm
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Monday, 7th September 2020 10:31:49 am
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
import React from 'react';
jest.mock(
  '@material-ui/core/Fade',
  (): React.FC => ({ children }) => children as React.ReactElement,
);
import initStoryshots from '@storybook/addon-storyshots';
initStoryshots();
