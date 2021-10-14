/*
 * File: Slider.tsx
 * Project: @inventures/react-lib
 * File Created: Wednesday, 28th April 2021 7:00:44 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Thursday, 14th October 2021 3:37:22 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2020 - 2021 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import 'regenerator-runtime/runtime.js';
import React from 'react';
import { GridList, makeStyles, createStyles } from '@material-ui/core';
import GridListTile from '@material-ui/core/GridListTile';
import clsx from 'clsx';

type SliderProps = {
  items: React.ReactNode[];
  cellHeight?: number | 'auto' | undefined;
  cols?: number;
  classes?: {
    root?: string;
    gridList?: string;
    gridListRoot?: string;
    gridListTile?: string;
  };
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      flexWrap: 'nowrap',
      width: '100%',
    },
    customTiles: {
      height: '100%',
    },
  }),
);

export function Slider(props: SliderProps) {
  /**
   * Returns a Material UI Grid List component.
   * Slider will take up all available parent space
   *
   * @param props - defined by SliderProps.
   * @returns React Component
   *
   */
  const { items, cellHeight, cols, classes: propsClasses } = props;
  const classes = useStyles();

  if (!items) return null;
  return (
    <div className={clsx(classes.root, propsClasses?.root)}>
      <GridList
        className={clsx(classes.gridList, propsClasses?.gridList)}
        cols={cols ?? 1.5}
        cellHeight={cellHeight}
        classes={{
          root: clsx(classes.customTiles, propsClasses?.gridListRoot),
        }}
        spacing={8}
      >
        {items.map((item, index: number) => (
          <GridListTile
            key={index}
            classes={{
              root: clsx(classes.customTiles, propsClasses?.gridListTile),
            }}
          >
            {item}
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
