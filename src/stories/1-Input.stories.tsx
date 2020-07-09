/*
 * File: 2-TextField.stories.tsx
 * Project: components-lib
 * File Created: Wednesday, 8th July 2020 1:55:18 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Thursday, 9th July 2020 1:06:14 am
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
import React from "react";
import { text, boolean, number } from "@storybook/addon-knobs";
import { Input, RutInput } from "../components/input";

export default {
  title: "Input",
};
export const Base = () => <Input />;
export const InputForRut = () => {
  const required = boolean("Required", false);
  const debounceTime = number("Debounce time (ms)", 10);
  const defaultValue = text("Default RUT", "11.111.111");
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <RutInput label="Ingresa tu RUT" />
      <RutInput required={required} label="Rut requerido" />
      <RutInput
        label="Rut con debounce diferente"
        debounceTime={debounceTime}
      />
      <RutInput
        defaultValue={defaultValue}
        label="Rut por defecto"
        debounceTime={debounceTime}
      />
    </div>
  );
};

Base.story = {
  name: "Base element",
};
