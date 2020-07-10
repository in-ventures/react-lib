/*
 * File: register.js
 * Project: components-lib
 * File Created: Thursday, 9th July 2020 8:39:57 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Thursday, 9th July 2020 1:51:40 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import React from "react";
import { addons, types, useChannel } from "@storybook/addons";
import { useParameter } from "@storybook/api";
import { AddonPanel } from "@storybook/components";

const ADDON_ID = "muitheme";
const PARAM_KEY = "muiTheme";
const PANEL_ID = `${ADDON_ID}/panel`;

const MyPanel = ({ api }) => {
  // const emit = useChannel({
  //   "muiTheme/changeTheme": (theme) => {
  //     console.log(theme);
  //   },
  // });
  // return <p>addon</p>;
  console.log({ api });
  return (
    <div>
      <select
        onChange={(e) => console.log("muiTheme/changeTheme", e.target.value)}
      >
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
  const title = "Theme";

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title,
    render,
    paramKey: PARAM_KEY,
  });
});
