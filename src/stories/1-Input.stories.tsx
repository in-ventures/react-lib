/*
 * File: 2-TextField.stories.tsx
 * Project: components-lib
 * File Created: Wednesday, 8th July 2020 1:55:18 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Thursday, 13th August 2020 11:19:25 am
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
import React, { useCallback } from 'react';
import { number, text } from '@storybook/addon-knobs';
import { Input } from '../components/input';
import { InputStatus, useInput } from '../hooks/useInput.hooks';
import { rutFormat } from 'rut-helpers';
import {
  Validator,
  RequiredValidator,
  RutFormatValidator,
  EmailValidator,
  RutValidator,
} from '../hooks/validators';

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
      required && new RequiredValidator(required),
      incomplete && new RutFormatValidator(incomplete),
      valid && new RutValidator(valid),
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
  const handleWrite = useCallback(
    (e) => {
      setValue(String(e.target.value));
    },
    [setValue],
  );
  return (
    <Input
      value={value}
      onChange={handleWrite}
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
      required && new RequiredValidator(required),
      incomplete && new EmailValidator(incomplete),
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

Base.storyName = 'Base element';
