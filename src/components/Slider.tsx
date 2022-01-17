/*
 * File: Slider.tsx
 * Project: @inventures/react-lib
 * File Created: Wednesday, 28th April 2021 7:00:44 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Monday, 17th January 2022 10:41:21 am
 * Modified By: Luis Aparicio (luis@inventures.cl)
 * -----
 * Copyright 2020 - 2021 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import 'regenerator-runtime/runtime.js';
import React, { useCallback, useMemo, useRef } from 'react';
import {
  GridList,
  makeStyles,
  createStyles,
  IconButton,
} from '@material-ui/core';
import GridListTile from '@material-ui/core/GridListTile';
import clsx from 'clsx';
import { useIntersectionObserver } from '../hooks/useIntersection';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

type SliderProps = {
  items: React.ReactNode[];
  cellHeight?: number | 'auto' | undefined;
  cols?: number;
  spacing?: number;
  navigationSpeed?: number;
  classes?: {
    root?: string;
    gridList?: string;
    gridListRoot?: string;
    gridListTile?: string;
  };
};

enum NavigationDirection {
  Left = 'left',
  Right = 'right',
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      position: 'relative',
    },
    gridList: {
      flexWrap: 'nowrap',
      width: '100%',
      '& :last-child': {
        marginRight: 2,
      },
      scrollBehavior: 'smooth',
    },
    noScrollBar: {
      '&::-webkit-scrollbar': {
        display: 'none',
      },
      '-ms-overflow-style': 'none' /* IE and Edge */,
      'scrollbar-width': 'none' /* Firefox */,
    },
    customTiles: {
      height: '100%',
      padding: 4,
    },
    navigationRight: {
      height: 'inherit !important',
      width: 'fit-content !important',
      padding: '12px !important',
      position: 'absolute',
      right: 0,
      zIndex: 1,
      alignSelf: 'center',
    },
    navigationLeft: {
      height: 'inherit !important',
      width: 'fit-content !important',
      padding: '12px !important',
      position: 'absolute',
      left: 0,
      zIndex: 1,
      alignSelf: 'center',
    },
    hidden: {
      display: 'none',
    },
    tile: {
      padding: 4,
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
  const {
    items,
    cellHeight,
    cols,
    classes: propsClasses,
    spacing = 8,
    navigationSpeed = 3,
  } = props;
  const classes = useStyles();

  const refFirst = useRef<HTMLLIElement | null>(null);
  const refLast = useRef<HTMLLIElement | null>(null);
  const sliderRef = useRef<HTMLUListElement | null>(null);

  const leftNavigation = useIntersectionObserver(refFirst, { threshold: 1 });
  const rightNavigation = useIntersectionObserver(refLast, { threshold: 1 });

  const leftNavigationisVisible = useMemo(() => {
    if (!leftNavigation) return;
    return !!leftNavigation.isIntersecting;
  }, [leftNavigation]);

  const rightNavigationisVisible = useMemo(() => {
    if (!rightNavigation) return;
    return !!rightNavigation.isIntersecting;
  }, [rightNavigation]);

  const handleArrowClick = useCallback(
    (direction: NavigationDirection) => {
      const scrollElement = () => {
        if (!sliderRef.current) return;
        if (direction === NavigationDirection.Right) {
          sliderRef.current.scrollLeft +=
            sliderRef.current.clientWidth / navigationSpeed;
        }
        if (direction === NavigationDirection.Left) {
          sliderRef.current.scrollLeft -=
            sliderRef.current.clientWidth / navigationSpeed;
        }
      };
      scrollElement();
    },
    [navigationSpeed],
  );

  if (!items) return null;
  return (
    <div className={clsx(classes.root, propsClasses?.root)}>
      <IconButton
        onClick={() => handleArrowClick(NavigationDirection.Left)}
        color="primary"
        aria-label="move left"
        className={clsx(
          classes.navigationLeft,
          leftNavigationisVisible && classes.hidden,
        )}
      >
        <ArrowBackIosRoundedIcon />
      </IconButton>
      <GridList
        className={clsx(classes.gridList, propsClasses?.gridList)}
        cols={cols ?? 1.5}
        cellHeight={cellHeight}
        classes={{
          root: clsx(
            classes.customTiles,
            classes.noScrollBar,
            propsClasses?.gridListRoot,
          ),
        }}
        ref={sliderRef}
        spacing={spacing}
      >
        {items.map((item, index: number) => (
          <GridListTile
            key={index}
            classes={{
              root: clsx(classes.customTiles, propsClasses?.gridListTile),
            }}
            ref={
              index == 0 ? refFirst : index == items.length - 1 ? refLast : null
            }
          >
            {item}
          </GridListTile>
        ))}
      </GridList>
      <IconButton
        onClick={() => handleArrowClick(NavigationDirection.Right)}
        color="primary"
        aria-label="move right"
        className={clsx(
          classes.navigationRight,
          rightNavigationisVisible && classes.hidden,
        )}
      >
        <ArrowForwardIosRoundedIcon />
      </IconButton>
    </div>
  );
}
