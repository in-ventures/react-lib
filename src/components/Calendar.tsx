/*
 * File: DatePicker.tsx
 * Project: @inventures/react-lib
 * File Created: Friday, 25th September 2020 3:06:54 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Friday, 25th September 2020 4:18:12 pm
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DatePicker,
} from '@material-ui/pickers';

type CustomCalendarProps = {
  variant?: 'dialog' | 'inline' | 'static' | undefined;
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
};

export function Calendar(props: CustomCalendarProps) {
  const { variant, selectedDate, setSelectedDate } = props;

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        disableToolbar
        variant={variant}
        format="dd/MM/yyyy"
        margin="normal"
        id="date-picker-inline"
        label="Date picker inline"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </MuiPickersUtilsProvider>
  );
}
