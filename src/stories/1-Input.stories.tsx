/*
 * File: 2-TextField.stories.tsx
 * Project:  @inventures/react-lib
 * File Created: Wednesday, 8th July 2020 1:55:18 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Tuesday, 3rd August 2021 3:37:37 pm
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
  DateValidator,
} from '../validators';
import { AccentRemoverFormatter, RutFormatter } from '../formatters';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { MaskFormatter } from '../formatters/MaskFormatter';

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

export const LengthValidatorTest = () => {
  const validLength = text(
    'RUT de largo inválido error',
    'Recuerda incluir un largo válido',
  );

  const debounceTime = number('Debounce time (ms)', 800);
  const [value, setValue, status, errors, handleBlur] = useInput('', {
    validators: [
      validLength && new LengthValidator(validLength, { max: 11 }),
    ].filter(Boolean) as Validator<string>[],
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
      label="Enter your text"
    />
  );
};

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
export const InputForPhone = () => {
  const classes = useStyles();

  //const { possibleCountries } = props;
  const [country, setCountry] = useState(possibleCountries[0]);

  const required = text('Teléfono requerido error', 'Teléfono Requerido');
  const incompleteNumber = text(
    'Teléfono incompleto error',
    '¡Ojo! Debes incluir la cantidad correcta de digitos para tu país',
  );
  const debounceTime = number('Debounce time (ms)', 800);

  const [value, setValue, status, errors, handleBlur] = useInput('', {
    formatter: new MaskFormatter('9 99 999 999 999 999'),
    validators: [
      incompleteNumber &&
        new LengthValidator(incompleteNumber, country.countryDigitLength),
      required && new RequiredValidator(required),
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
    [setCountry],
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

const rutMask = [
  '9',
  '9',
  '.',
  '9',
  '9',
  '9',
  '.',
  '9',
  '9',
  '9',
  '-',
  /[0-9kK]/,
];

export const InputWithMask = () => {
  const debounceTime = number('Debounce time (ms)', 800);

  const [length, setLength] = useInput('', {
    formatter: new MaskFormatter('****'),
  });
  const [birthdate, setBirthdate] = useInput('', {
    formatter: new MaskFormatter('99/99/9999'),
    validators: [new DateValidator('formato incorrecto para fecha')],
  });
  const [value, setValue, status, errors, handleBlur] = useInput('', {
    formatter: new MaskFormatter(rutMask),
  });
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Input
        value={length}
        onChange={(e) => setLength(String(e.target.value))}
        label={`Maximo 4`}
      />
      <Input
        value={birthdate}
        onChange={(e) => setBirthdate(String(e.target.value))}
        label={`fecha de nacimiento `}
      />
      <Input
        value={value}
        onChange={(e) => setValue(String(e.target.value))}
        onBlur={handleBlur}
        error={status === InputStatus.ERROR}
        helperText={errors[0]}
        label={`Ingrese RUT (${debounceTime}ms)`}
      />
    </div>
  );
};

export const InputWithAsyncValidator = () => {
  const debounceTime = number('Debounce time (ms)', 800);

  const [text, setText, status, errors] = useInput('', {
    debounceTime,
    asyncValidators: [
      {
        errorMsg: 'Tiene más de 4 caracteres',
        validate: async (input) => {
          await new Promise((res) => setTimeout(res, 2000));
          console.log('after timeout', { input, valid: input.length <= 4 });
          return input.length <= 4;
        },
      },
    ],
  });
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Input
        value={text}
        onChange={(e) => setText(String(e.target.value))}
        label={`Maximo 4`}
        error={status === InputStatus.ERROR}
        helperText={errors[0]}
      />
    </div>
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
