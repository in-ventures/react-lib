/*
 * File: ProductList.tsx
 * Project: @inventures/react-lib
 * File Created: Friday, 11th September 2020 10:18:24 am
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Monday, 17th January 2022 4:50:54 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
import 'regenerator-runtime/runtime.js';
import React, { ReactNode, useCallback, useMemo, useRef } from 'react';
import { Grid, IconButton, makeStyles } from '@material-ui/core';
import { ProductPropTypes, ProductCard } from './ProductCard';
import { ProductCardSkeleton } from './ProductCardSkeleton';
import { createStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import clsx from 'clsx';
import { useIntersectionObserver } from '../hooks/useIntersection';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

type ClassesPropType = {
  gridList?: string;
  gridListTitle?: string;
  grid?: string;
  gridContainer?: string;
  tile?: string;
};

interface ProductListProps {
  products: ProductPropTypes[];
  gridBreakpoints: GridBreakpoints;
  loading?: boolean;
  wrap?: boolean;
  cols?: number;
  classes?: ClassesPropType;
  renderItem?: (
    children: ReactNode,
    childrenProps: Partial<ProductPropTypes>,
  ) => ReactNode;
  navigationSpeed?: number;
  showNavigationButtons?: boolean;
}
type GridBreakpoints = {
  xs:
    | boolean
    | 'auto'
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | undefined;
  sm:
    | boolean
    | 'auto'
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | undefined;
  md:
    | boolean
    | 'auto'
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | undefined;
  lg:
    | boolean
    | 'auto'
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | undefined;
  xl:
    | boolean
    | 'auto'
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | undefined;
};

enum NavigationDirection {
  Left = 'left',
  Right = 'right',
}

const useStyles = makeStyles((theme) =>
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
      scrollBehavior: 'smooth',
      '& :last-child': {
        marginRight: 2,
      },
    },
    customTiles: {
      height: '100%',
    },
    noScrollBar: {
      '&::-webkit-scrollbar': {
        display: 'none',
      },
      '-ms-overflow-style': 'none' /* IE and Edge */,
      'scrollbar-width': 'none' /* Firefox */,
    },
    tile: {
      padding: 4,
    },
    navigationButton: {
      height: '100%',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      zIndex: 1000,
      background: 'transparent',
      transition: 'background 0.5s',
      borderRadius: 5,
      '&:hover': {
        background: 'rgba(0,0,0,0.05)',
      },
    },
    navigationButtonCircle: {
      background: theme.palette.primary.main,
      borderRadius: '50%',
      color: 'white',
      padding: 3,
      fontSize: 15,
      boxShadow: '0px 0px 6px 1px #dedede',
    },
    navigationRight: {
      padding: '12px !important',
      position: 'absolute',
      right: 0,
      alignSelf: 'center',
    },
    navigationLeft: {
      padding: '12px !important',
      position: 'absolute',
      left: 0,
      alignSelf: 'center',
    },
    hidden: {
      display: 'none',
    },
  }),
);

export function ProductList(props: ProductListProps) {
  /**
   * Returns the a product card list component, which uses ProductCard component
   * and Material UI Grid to place a customizable amount of product cards.
   * Header for Product List is available on ProductListHeader component.
   *
   * @param props - defined by ProductListProps.
   * @returns React Component
   *
   */
  const {
    products,
    gridBreakpoints: { xs = 6, sm = 4, md = 3, lg = 2, xl = 1 } = {},
    loading,
    wrap,
    cols,
    classes: propClasses,
    renderItem = (children) => children,
    navigationSpeed = 3,
    showNavigationButtons,
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

  if (!wrap) {
    return (
      <div className={classes.root}>
        <div
          onClick={() => handleArrowClick(NavigationDirection.Left)}
          aria-label="move left"
          className={clsx(
            classes.navigationButton,
            classes.navigationLeft,
            leftNavigationisVisible && classes.hidden,
            !showNavigationButtons && classes.hidden,
          )}
        >
          <ArrowBackIosRoundedIcon className={classes.navigationButtonCircle} />
        </div>
        <GridList
          className={classes.gridList}
          cols={cols ?? 2.3}
          cellHeight={270}
          classes={{
            root: clsx(
              classes.customTiles,
              classes.noScrollBar,
              propClasses?.gridList,
            ),
          }}
          ref={sliderRef}
        >
          {products.map((cardInfo: ProductPropTypes, index: number) => (
            <GridListTile
              key={cardInfo.title + index.toString()}
              classes={{
                root: clsx(classes.customTiles, propClasses?.gridListTitle),
                tile: clsx(classes.tile, propClasses?.tile),
              }}
              ref={
                index == 0
                  ? refFirst
                  : index == products.length - 1
                  ? refLast
                  : null
              }
            >
              {renderItem(<ProductCard {...cardInfo} />, cardInfo)}
            </GridListTile>
          ))}
        </GridList>
        <div
          onClick={() => handleArrowClick(NavigationDirection.Right)}
          aria-label="move right"
          className={clsx(
            classes.navigationButton,
            classes.navigationRight,
            rightNavigationisVisible && classes.hidden,
            !showNavigationButtons && classes.hidden,
          )}
        >
          <ArrowForwardIosRoundedIcon
            className={classes.navigationButtonCircle}
          />
        </div>
      </div>
    );
  }

  return (
    <Grid className={clsx(propClasses?.gridContainer)} container spacing={1}>
      {products.map((cardInfo: ProductPropTypes, index: number) => (
        <Grid
          className={clsx(propClasses?.grid)}
          key={index}
          item
          xs={xs}
          sm={sm}
          md={md}
          lg={lg}
          xl={xl}
        >
          {loading ? (
            <ProductCardSkeleton />
          ) : (
            renderItem(<ProductCard {...cardInfo} />, cardInfo)
          )}
        </Grid>
      ))}
    </Grid>
  );
}
