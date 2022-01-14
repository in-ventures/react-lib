/*
 * File: ProductList.tsx
 * Project: @inventures/react-lib
 * File Created: Friday, 11th September 2020 10:18:24 am
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Friday, 14th January 2022 3:24:17 pm
 * Modified By: Luis Aparicio (luis@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
import 'regenerator-runtime/runtime.js';
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
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
  navegationSpeed?: number;
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

enum NavegationDirection {
  Left = 'left',
  Right = 'right',
}

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
    navegationRight: {
      height: 'inherit !important',
      width: 'fit-content !important',
      padding: '12px !important',
      position: 'absolute',
      right: 0,
      zIndex: 1,
      alignSelf: 'center',
    },
    navegationLeft: {
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
    navegationSpeed = 3,
  } = props;
  const classes = useStyles();
  const refFirst = useRef<HTMLLIElement | null>(null);
  const refLast = useRef<HTMLLIElement | null>(null);
  const sliderRef = useRef<HTMLUListElement | null>(null);

  const leftNavegation = useIntersectionObserver(refFirst, { threshold: 1 });
  const rightNavegation = useIntersectionObserver(refLast, { threshold: 1 });

  const leftNavegationisVisible = useMemo(() => {
    if (!leftNavegation) return;
    return !!leftNavegation.isIntersecting;
  }, [leftNavegation]);

  const rightNavegationisVisible = useMemo(() => {
    if (!rightNavegation) return;
    return !!rightNavegation.isIntersecting;
  }, [rightNavegation]);

  const handleArrowClick = useCallback(
    (direction: NavegationDirection) => {
      const scrollElement = () => {
        if (!sliderRef.current) return;
        if (direction === NavegationDirection.Right) {
          sliderRef.current.scrollLeft +=
            sliderRef.current.clientWidth / navegationSpeed;
        }
        if (direction === NavegationDirection.Left) {
          sliderRef.current.scrollLeft -=
            sliderRef.current.clientWidth / navegationSpeed;
        }
      };
      scrollElement();
    },
    [navegationSpeed],
  );

  if (!wrap) {
    return (
      <div className={classes.root}>
        <IconButton
          onClick={() => handleArrowClick(NavegationDirection.Left)}
          color="primary"
          aria-label="move left"
          className={clsx(
            classes.navegationLeft,
            leftNavegationisVisible && classes.hidden,
          )}
        >
          <ArrowBackIosRoundedIcon />
        </IconButton>
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
        <IconButton
          onClick={() => handleArrowClick(NavegationDirection.Right)}
          color="primary"
          aria-label="move right"
          className={clsx(
            classes.navegationRight,
            rightNavegationisVisible && classes.hidden,
          )}
        >
          <ArrowForwardIosRoundedIcon />
        </IconButton>
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
