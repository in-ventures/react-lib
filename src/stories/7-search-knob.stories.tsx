/*
 * File: 7-search-knob.stories.tsx
 * Project: @inventures/react-lib
 * File Created: Thursday, 17th December 2020 10:51:22 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Friday, 8th October 2021 4:17:28 pm
 * Modified By: Luis Aparicio (luis@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { number } from '@storybook/addon-knobs';
import React, { useMemo, useState } from 'react';
import { useDebouncedCallback } from '../hooks/useDebouncedCallback';
import data from './data.json';
import Fuse from 'fuse.js';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default {
  title: 'Busqueda',
};

export const Busqueda = () => {
  const [input, setInput] = useState('');
  const [debouncedInput, setDebouncedInput] = useState('');
  const debouncedInputCallback = useDebouncedCallback(() => {
    setDebouncedInput(input);
  }, 300);
  const tradenameWeight = number('Nombre comercial peso', 1);
  const activePrincipleWeight = number('Principio activo peso', 1);
  const dosageWeight = number('Dosis peso', 1);

  const threshold = number('threshold', 0.4);

  const result = useMemo(() => {
    const options = {
      includeScore: true,
      keys: [
        { name: 'tradename', weight: tradenameWeight },
        { name: 'active_principle', weight: activePrincipleWeight },
        { name: 'dosage', weight: dosageWeight },
      ].filter((key) => key.weight > 0),
      isCaseSensitive: false,
      minMatchCharLength: 3,
      threshold,
    };
    const fuse = new Fuse(data, options);
    return fuse.search(debouncedInput);
  }, [
    debouncedInput,
    tradenameWeight,
    activePrincipleWeight,
    threshold,
    dosageWeight,
  ]);
  return (
    <div>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          debouncedInputCallback();
        }}
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Puntaje</TableCell>
            <TableCell>Nombre comercial</TableCell>
            <TableCell>Principio activo</TableCell>
            <TableCell>Dosis</TableCell>
            <TableCell>Cantidad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {result.map((product, i) => {
            return (
              <TableRow key={i}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>
                  {Math.trunc((product.score ?? 0) * 100) / 100}
                </TableCell>
                <TableCell>{product.item.tradename}</TableCell>
                <TableCell>{product.item.active_principle}</TableCell>
                <TableCell>{product.item.dosage}</TableCell>
                <TableCell>
                  {product.item.quantity} {product.item.unit}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
