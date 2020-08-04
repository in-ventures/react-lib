/*
 * File: input.tsx
 * Project: components-lib
 * File Created: Wednesday, 8th July 2020 11:34:57 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Tuesday, 21st July 2020 10:41:17 pm
 * Modified By: Mario Merino (mario@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
import React from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { rutFormat, rutValidate } from 'rut-helpers';
import { useInput, InputStatus } from '../hooks/useInput.hooks';

export const Input = (props: TextFieldProps) => <TextField {...props} />;

type RutInputProps = {
  required?: boolean;
  debounceTime?: number;
  defaultValue?: string;
} & TextFieldProps;
export const RutInput = ({ debounceTime, ...props }: RutInputProps) => {
  const [value, setValue, status, errors, handleBlur] = useInput('', {
    formatter: rutFormat,
    validators: [
      { validate: (data: string) => Boolean(data), errorMsg: 'RUT Requerido' },
      {
        validate: (data: string) =>
          Boolean(data.match(/^\d{1,2}\.\d{3}\.\d{3}[-][0-9K]{1}$/)),
        errorMsg: '¡Ojo! Este rut está incompleto 🤷‍♀️',
      },
      {
        validate: (data: string) => rutValidate(data),
        errorMsg: 'Este rut parece no estar bien escrito 🧐',
      },
    ],
    asyncValidators: [
      {
        validate: async () => {
          await new Promise((res) => setTimeout(res, 500));
          return Math.random() < 0.5;
        },
        errorMsg: 'Ups, parece que ya estás registrado',
      },
    ],
    debounceTime,
  });
  return (
    <Input
      value={value}
      onChange={(e) => setValue(String(e.target.value))}
      onBlur={handleBlur}
      error={status === InputStatus.ERROR}
      helperText={errors[0]}
      {...props}
    />
  );
};
