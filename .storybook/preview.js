/*
 * File: preview.js
 * Project:  @inventures/react-lib
 * File Created: Thursday, 9th July 2020 12:56:32 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Monday, 14th September 2020 11:10:32 am
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
import { addParameters } from '@storybook/client-api';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withPaddings } from 'storybook-addon-paddings';
import { muiThemeDecorator } from '../src/config/storybook/muiTheme'
export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  backgrounds: {
    default: 'twitter',
    values: [
      { name: 'white', value: '#fff'},
      {
        name: 'twitter',
        value: '#00aced',
      },
      {
        name: 'facebook',
        value: '#3b5998',
      },
      { name: 'Meki Main', value: '#1C3E71' },
      { name: 'DercocenterX Main', value: '#1F2183' },
    ],
  },
  paddings: [
    { name: 'None', value: '0', default: true},
    { name: 'Small', value: '16px' },
    { name: 'Medium', value: '32px' },
    { name: 'Large', value: '64px' },
  ],
};
export const decorators = [muiThemeDecorator, withPaddings];