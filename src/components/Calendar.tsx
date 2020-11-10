/*
 * File: DatePicker.tsx
 * Project: @inventures/react-lib
 * File Created: Friday, 25th September 2020 3:06:54 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Thursday, 10th November 2020 3:02:58 pm
 * Modified By: Vicente Melin (vicente@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import 'date-fns';
import esLocale from 'date-fns/locale/es';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DatePicker,
  DatePickerProps,
} from '@material-ui/pickers';

type CustomCalendarProps = {
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
} & Omit<DatePickerProps, 'value' | 'onChange'>;

export function Calendar(props: CustomCalendarProps) {
  const { selectedDate, setSelectedDate, ...datePickerprops } = props;

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
      <DatePicker
        disableToolbar
        format="dd/MM/yyyy"
        margin="normal"
        id="date-picker-inline"
        value={selectedDate}
        minDateMessage="La fecha es anterior al minimo"
        cancelLabel="Cancelar"
        {...datePickerprops}
        onChange={handleDateChange}
      />
    </MuiPickersUtilsProvider>
  );
}
