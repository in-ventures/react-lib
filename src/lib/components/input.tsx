/*
 * File: input.tsx
 * Project: components-lib
 * File Created: Wednesday, 8th July 2020 11:34:57 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Friday, 10th July 2020 11:13:57 am
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
import React, { useEffect } from "react";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { rutFormat, rutValidate, rutClean } from "rut-helpers";
import { useInput } from "../hooks/useInput.hooks";

export const Input = (props: TextFieldProps) => <TextField {...props} />;

type RutInputProps = {
  required?: boolean;
  debounceTime?: number;
  defaultValue?: string;
} & TextFieldProps;
export const RutInput = ({
  required,
  debounceTime,
  defaultValue,
  ...props
}: RutInputProps) => {
  const [value, setValue, valid, errors] = useInput("", {
    formatter: rutFormat,
    validators: [
      (data: string) =>
        required ? (!!rutClean(data) ? "" : "RUT requerido") : "",
      (data: string) =>
        !!rutClean(data) ? (rutValidate(data) ? "" : "RUT invalido") : "",
    ],
    debounceTime,
  });
  useEffect(() => {
    if (defaultValue) setValue(defaultValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setValue]);

  return (
    <Input
      value={value}
      onChange={(e) => setValue(String(e.target.value))}
      error={!valid}
      helperText={errors.join(", ")}
      {...props}
    />
  );
};
