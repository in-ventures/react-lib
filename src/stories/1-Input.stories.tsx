/*
 * File: 2-TextField.stories.tsx
 * Project: components-lib
 * File Created: Wednesday, 8th July 2020 1:55:18 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Tuesday, 18th August 2020 9:36:03 pm
 * Modified By: Mario Merino (mario@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
import React, { useCallback, useState, ChangeEvent } from 'react';
import { number, text } from '@storybook/addon-knobs';
import { Input } from '../components/input';

import { InputStatus, useInput } from '../hooks/useInput.hooks';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import MenuItem from '@material-ui/core/MenuItem';
import { rutFormat } from 'rut-helpers';
import {
  Validator,
  RequiredValidator,
  RutFormatValidator,
  EmailValidator,
  RutValidator,
  PhoneValidator,
  NumericValidator,
} from '../hooks/validators';
import { LatinEmailFormatter } from '../hooks/formatters';

export type CountryType = {
  id: number;
  countryName: string;
  countryDigitLength: number;
  countryPrefix: number;
};

type InputforPhoneProps = {
  possibleCountries: CountryType[];
};

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
    formatter: LatinEmailFormatter,
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

//Test purpose only:
const possibleCountriesDummy = [
  {
    id: 1,
    countryName: 'Chile',
    countryDigitLength: 9,
    countryPrefix: 56,
  } as CountryType,
  {
    id: 2,
    countryName: 'Peru',
    countryDigitLength: 9,
    countryPrefix: 51,
  } as CountryType,
  {
    id: 3,
    countryName: 'USA',
    countryDigitLength: 11,
    countryPrefix: 1,
  } as CountryType,
];

export const InputForPhone = (props: InputforPhoneProps) => {
  const classes = useStyles();

  // Uncomment this line when using component
  //const { possibleCountries } = props;

  const possibleCountries = possibleCountriesDummy;
  const nonNumeric = text(
    'Teléfono no numérico error',
    '¡Ups! Recuerda incluir sólo números',
  );
  const required = text('Teléfono requerido error', 'Teléfono Requerido');
  const incompleteNumber = text(
    'Teléfono incompleto error',
    '¡Ojo! Debes incluir la cantidad correcta de digitos para tu país',
  );
  const debounceTime = number('Debounce time (ms)', 800);

  const [country, setCountry] = useState(possibleCountries[0]);

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    const newCountry = event.target.value as CountryType;
    setCountry(newCountry);
  };

  const [value, setValue, status, errors, handleBlur] = useInput('', {
    validators: [
      required && new RequiredValidator(required),
      nonNumeric && new NumericValidator(nonNumeric),
      incompleteNumber && new PhoneValidator(incompleteNumber),
    ].filter(Boolean) as Validator<string>[],
    debounceTime,
    extra: country,
  });

  const handleWrite = useCallback(
    (e) => {
      setValue(String(e.target.value));
    },
    [setValue],
  );

  return (
    <>
      <FormControl className={classes.formControl}>
        <Select value={country} onChange={handleChange}>
          {possibleCountries.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item.countryName} (+{item.countryPrefix})
            </MenuItem>
          ))}
        </Select>
        <Input
          value={value}
          onChange={handleWrite}
          onBlur={handleBlur}
          error={status === InputStatus.ERROR}
          helperText={errors[0]}
          label={`Phone* (${debounceTime}ms)`}
        />
      </FormControl>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 100,
      flexDirection: 'row',
    },
  }),
);

Base.storyName = 'Base element';
