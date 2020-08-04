/*
 * File: 2-TextField.stories.tsx
 * Project: components-lib
 * File Created: Wednesday, 8th July 2020 1:55:18 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Tuesday, 4th August 2020 5:32:56 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
import React from 'react';
import { number, text } from '@storybook/addon-knobs';
import { Input } from '../components/input';
import { InputStatus, useInput, Validator } from '../hooks/useInput.hooks';
import { rutFormat, rutValidate } from 'rut-helpers';

export default {
  title: 'Input',
};
export const Base = () => <Input />;
export const InputForRut = () => {
  const required = text('RUT requerido error', 'RUT Requerido');
  const incomplete = text(
    'RUT incompleto error',
    '¡Ojo! Este rut está incompleto 🤷‍♀️',
  );
  const valid = text(
    'RUT invalido error',
    'Este rut parece no estar bien escrito 🧐',
  );

  const random = text(
    'RUT registrado error',
    'Ups, parece que ya estás registrado',
  );
  const debounceTime = number('Debounce time (ms)', 800);
  const [value, setValue, status, errors, handleBlur] = useInput('', {
    formatter: rutFormat,
    validators: [
      required && {
        validate: (data: string) => Boolean(data),
        errorMsg: required,
      },
      incomplete && {
        validate: (data: string) =>
          Boolean(data.match(/^\d{1,2}\.\d{3}\.\d{3}[-][0-9K]{1}$/)),
        errorMsg: incomplete,
      },
      valid && {
        validate: (data: string) => rutValidate(data),
        errorMsg: valid,
      },
    ].filter(Boolean) as Validator<string>[],
    asyncValidators: [
      {
        validate: async () => {
          await new Promise((res) => setTimeout(res, 500));
          return Math.random() < 0.5;
        },
        errorMsg: random,
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
      label={`RUT* (${debounceTime}ms)`}
    />
  );
};

export const InputForEmail = () => {
  const required = text('Mail requerido error', 'Mail Requerido');
  const incomplete = text(
    'Mail incompleto error',
    '¡Ojo! Este mail está incompleto o no está bien escrito 🤷‍♀️',
  );

  const random = text(
    'Mail registrado error',
    'Ups, parece que ya estás registrado',
  );
  const debounceTime = number('Debounce time (ms)', 800);
  const [value, setValue, status, errors, handleBlur] = useInput('', {
    validators: [
      required && {
        validate: (data: string) => Boolean(data),
        errorMsg: required,
      },
      incomplete && {
        validate: (data: string) =>
          Boolean(
            data.match(
              /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
            ),
          ),
        errorMsg: incomplete,
      },
    ].filter(Boolean) as Validator<string>[],
    asyncValidators: [
      {
        validate: async () => {
          await new Promise((res) => setTimeout(res, 500));
          return Math.random() < 0.5;
        },
        errorMsg: random,
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
      label={`Mail* (${debounceTime}ms)`}
    />
  );
};

Base.story = {
  name: 'Base element',
};
