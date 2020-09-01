/*
 * File: 2-TextField.stories.tsx
 * Project:  @inventures/react-lib
 * File Created: Wednesday, 8th July 2020 1:55:18 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Tuesday, 1st September 2020 2:43:27 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
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
import {
  Validator,
  RequiredValidator,
  RutFormatValidator,
  EmailValidator,
  RutValidator,
  LengthValidator,
  NumericValidator,
} from '../validators';
import { AccentRemoverFormatter, RutFormatter } from '../formatters';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

export default {
  title: 'Input',
};
export type CountryType = {
  id: number;
  countryName: string;
  countryDigitLength: number;
  countryPrefix: number;
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
  const validLength = text(
    'RUT de largo inválido error',
    'Recuerda incluir un largo válido de RUT',
  );

  const debounceTime = number('Debounce time (ms)', 800);
  const [value, setValue, status, errors, handleBlur] = useInput('', {
    formatter: new RutFormatter(),
    validators: [
      validLength && new LengthValidator(validLength, { min: 11, max: 12 }),
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
    formatter: new AccentRemoverFormatter(),
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

export const InputForPhone = () => {
  const possibleCountries: CountryType[] = [
    {
      id: 1,
      countryName: 'Chile',
      countryDigitLength: 9,
      countryPrefix: 56,
    },
    {
      id: 2,
      countryName: 'Peru',
      countryDigitLength: 9,
      countryPrefix: 51,
    },
    {
      id: 3,
      countryName: 'USA',
      countryDigitLength: 11,
      countryPrefix: 1,
    },
  ];

  const classes = useStyles();

  //const { possibleCountries } = props;
  const [country, setCountry] = useState(possibleCountries[0]);

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

  const [value, setValue, status, errors, handleBlur] = useInput('', {
    validators: [
      incompleteNumber &&
        new LengthValidator(incompleteNumber, country.countryDigitLength),
      required && new RequiredValidator(required),
      nonNumeric && new NumericValidator(nonNumeric),
    ].filter(Boolean) as Validator<string>[],
    debounceTime,
  });

  // when change of country, update the country
  const handleChange = useCallback(
    (event: ChangeEvent<{ value: unknown }>) => {
      const newCountry = possibleCountries.find(
        (x) => x.countryName === event.target.value,
      ) as CountryType;
      setCountry(newCountry);
    },
    [setCountry, possibleCountries],
  );

  const handleWrite = useCallback(
    (e) => {
      setValue(String(e.target.value));
    },
    [setValue],
  );

  return (
    <FormControl className={classes.formControl}>
      <Select value={country.countryName} onChange={handleChange}>
        {possibleCountries.map((item, index) => (
          <MenuItem key={index} value={item.countryName}>
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
  );
};

Base.storyName = 'Base element';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 100,
      flexDirection: 'row',
    },
  }),
);
