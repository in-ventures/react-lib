/*
 * File: input.tsx
 * Project: components-lib
 * File Created: Wednesday, 8th July 2020 11:34:57 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Friday, 21st August 2020 10:41:37 am
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
import React, { useState, ChangeEvent, useCallback } from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { rutFormat, rutValidate } from 'rut-helpers';
import { useInput, InputStatus } from '../hooks/useInput.hooks';
import { number, text } from '@storybook/addon-knobs';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import {
  Validator,
  RequiredValidator,
  LengthValidator,
  NumericValidator,
} from '../hooks/validators';

export const Input = (props: TextFieldProps) => <TextField {...props} />;

export type CountryType = {
  id: number;
  countryName: string;
  countryDigitLength: number;
  countryPrefix: number;
};

type InputforPhoneProps = {
  possibleCountries: CountryType[];
};

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

export const InputForPhoneComponent = (props: InputforPhoneProps) => {
  const classes = useStyles();

  const { possibleCountries } = props;
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

  const [
    value,
    setValue,
    status,
    errors,
    handleBlur,
    updateMaxLength,
  ] = useInput('', {
    validators: [
      required && new RequiredValidator(required),
      nonNumeric && new NumericValidator(nonNumeric),
      incompleteNumber && new LengthValidator(incompleteNumber),
    ].filter(Boolean) as Validator<string>[],
    debounceTime,
    maxLength: country.countryDigitLength,
  });

  // when change of country, update the country and run callback functionon useInput to update max length
  const handleChange = useCallback(
    (event: ChangeEvent<{ value: unknown }>) => {
      const newCountry = event.target.value as CountryType;
      setCountry(newCountry);
      updateMaxLength(newCountry.countryDigitLength);
    },
    [updateMaxLength, setCountry],
  );

  const handleWrite = useCallback(
    (e) => {
      setValue(String(e.target.value));
    },
    [setValue],
  );

  return (
    <FormControl className={classes.formControl}>
      <Select value={country} onChange={handleChange}>
        {possibleCountries.map((item, index) => (
          // TODO: understand why it complains about using an object - yet compiles and works fine
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
