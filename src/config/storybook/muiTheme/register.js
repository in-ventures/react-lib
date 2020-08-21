/*
 * File: register.js
 * Project:  @inventures/react-lib
 * File Created: Thursday, 9th July 2020 8:39:57 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Tuesday, 21st July 2020 1:39:51 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import React, { useCallback, useState, useEffect } from 'react';
import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';

const ADDON_ID = 'muitheme';
const PARAM_KEY = 'muiTheme';
const PANEL_ID = `${ADDON_ID}/panel`;

export const CHANGE_THEME_EVENT = 'muiTheme/changeTheme';
export const SET_THEME_EVENT = 'muiTheme/setTheme';
const MyPanel = ({ api }) => {
  const [theme, setTheme] = useState('mekiTheme');
  const handleChange = useCallback(
    (e) => {
      const newTheme = e.target.value;
      setTheme(newTheme);
      api.emit(CHANGE_THEME_EVENT, { theme: newTheme });
    },
    [api, setTheme],
  );
  useEffect(() => {
    const channel = api.getChannel();
    const listener = (value) => {
      handleChange({ target: { value } });
    };
    channel.addListener(SET_THEME_EVENT, listener);
    return () => channel.removeListener(SET_THEME_EVENT, listener);
  }, [api, handleChange]);
  return (
    <div>
      <select onChange={handleChange} value={theme}>
        <option value="mekiTheme">Meki</option>
        <option value="dercocenterxTheme">Derco Center X</option>
      </select>
    </div>
  );
};

addons.register(ADDON_ID, (api) => {
  const render = ({ active, key }) => (
    <AddonPanel active={active} key={key}>
      <MyPanel api={api} />
    </AddonPanel>
  );
  const title = 'Theme';

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title,
    render,
    paramKey: PARAM_KEY,
  });
});
