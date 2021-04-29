/*
 * File: Slider.tsx
 * Project: @inventures/react-lib
 * File Created: Wednesday, 28th April 2021 7:00:44 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Thursday, 29th April 2021 12:26:57 pm
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Copyright 2020 - 2021 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import React from 'react';
import { GridList, makeStyles, createStyles } from '@material-ui/core';
import GridListTile from '@material-ui/core/GridListTile';

type SliderProps = {
  items: React.ReactNode[];
  cellHeight?: number;
  cols?: number;
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
  const { items, cellHeight, cols } = props;
  const classes = useStyles();

  if (!items) return null;
  return (
    <div className={classes.root}>
      <GridList
        className={classes.gridList}
        cols={cols ?? 1.5}
        cellHeight={cellHeight}
        classes={{ root: classes.customTiles }}
        spacing={8}
      >
        {items.map((item, index: number) => (
          <GridListTile key={index} classes={{ root: classes.customTiles }}>
            {item}
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
