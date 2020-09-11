/*
 * File: northwest.tsx
 * Project: @inventures/react-lib
 * File Created: Thursday, 10th September 2020 4:24:56 pm
 * Author: Mario Merino (mario@inventures.cl)
 * -----
 * Last Modified: Thursday, 10th September 2020 4:26:32 pm
 * Modified By: Mario Merino (mario@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
export function NorthWestIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M5,15h2V8.41L18.59,20L20,18.59L8.41,7H15V5H5V15z" />
    </SvgIcon>
  );
}
