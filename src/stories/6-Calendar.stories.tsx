/*
 * File: 6-Calendar.stories.tsx
 * Project: @inventures/react-lib
 * File Created: Friday, 25th September 2020 3:17:09 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Friday, 25th September 2020 4:06:42 pm
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import React, { useState } from 'react';
import { Calendar } from '../components';

export default {
  title: 'Calendar',
};

export const CustomCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <Calendar
      variant="static"
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
    />
  );
};
