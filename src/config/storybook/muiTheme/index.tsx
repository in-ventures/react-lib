/*
 * File: index.tsx
 * Project: components-lib
 * File Created: Thursday, 9th July 2020 8:52:10 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Thursday, 13th August 2020 11:24:55 am
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import React, { useRef } from 'react';
import addons, { makeDecorator, useState, useEffect } from '@storybook/addons';
import { MuiThemeProvider, Theme } from '@material-ui/core';
import { CHANGE_THEME_EVENT, SET_THEME_EVENT } from './register';
import { mekiTheme } from '../../../config/themes/meki';
import { dercocenterxTheme } from '../../../config/themes/dercocenterx';
export const themes: Record<string, Theme> = { mekiTheme, dercocenterxTheme };
export const muiThemeDecorator = makeDecorator({
  name: 'muiThemeDecorator',
  parameterName: 'muiTheme',
  wrapper: function StoryWrapper(getStory, context) {
    const [theme, setTheme] = useState<null | Theme>(
      addons.getConfig().muiTheme,
    );
    const channel = useRef(addons.getChannel());
    useEffect(() => {
      const listener = (e: { theme: string }) => {
        setTheme(themes[e.theme]);
        addons.setConfig({ muiTheme: themes[e.theme] });
      };
      const currentChannel = channel.current;
      currentChannel.addListener(CHANGE_THEME_EVENT, listener);
      return () => currentChannel.removeListener(CHANGE_THEME_EVENT, listener);
    }, [channel]);
    useEffect(() => {
      if (!addons.getConfig().muiTheme) {
        channel.current.emit(SET_THEME_EVENT, 'mekiTheme');
      }
    }, [theme, channel]);
    if (!theme) return getStory(context);
    return (
      <MuiThemeProvider theme={theme}>{getStory(context)}</MuiThemeProvider>
    );
  },
});
