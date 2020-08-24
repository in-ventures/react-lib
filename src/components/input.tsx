/*
 * File: input.tsx
 * Project:  @inventures/react-lib
 * File Created: Wednesday, 8th July 2020 11:34:57 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Monday, 24th August 2020 2:56:11 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
import React from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';

export const Input = (props: TextFieldProps) => <TextField {...props} />;

export const InputForPhone = () => {
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
      incompleteNumber &&
        new LengthValidator(incompleteNumber, country.countryDigitLength),
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