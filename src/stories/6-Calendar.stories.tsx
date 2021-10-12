/*
 * File: 6-Calendar.stories.tsx
 * Project: @inventures/react-lib
 * File Created: Friday, 25th September 2020 3:17:09 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Friday, 8th October 2021 4:16:49 pm
 * Modified By: Luis Aparicio (luis@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { text, date } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import { Calendar } from '../components/Calendar';

export default {
  title: 'Calendar',
};

export const StaticCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <Calendar
      variant="static"
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
      disablePast={true}
    />
  );
};
export const DialogCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const label = text('Label', 'Selecciona tu fecha');
  const minDate = date('Fecha minima', new Date());
  const minDateError = text(
    'Fecha minima error',
    'La fecha es anterior al minimo',
  );
  return (
    <Calendar
      variant="dialog"
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
      disablePast={true}
      label={label}
      minDate={new Date(minDate)}
      minDateMessage={minDateError}
    />
  );
};
