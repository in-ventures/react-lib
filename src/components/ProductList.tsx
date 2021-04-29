/*
 * File: ProductList.tsx
 * Project: @inventures/react-lib
 * File Created: Friday, 11th September 2020 10:18:24 am
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Thursday, 29th April 2021 12:24:42 pm
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { ProductPropTypes, ProductCard } from './ProductCard';
import { ProductCardSkeleton } from './ProductCardSkeleton';
import { Theme, createStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

type ProductList = {
  products: ProductPropTypes[];
  gridBreakpoints: GridBreakpoints;
  loading?: boolean;
  wrap?: boolean;
  cols?: number;
};
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
    },
    customTiles: {
      height: '100%',
    },
  }),
);

export function ProductList(props: ProductList) {
  /**
   * Returns the a product card list component, which uses ProductCard component
   * and Material UI Grid to place a customizable amount of product cards.
   * Header for Product List is available on ProductListHeader component.
   *
   * @param props - defined by ProductList.
   * @returns React Component
   *
   */
  const {
    products,
    gridBreakpoints: { xs = 6, sm = 4, md = 3, lg = 2, xl = 1 } = {},
    loading,
    wrap,
    cols,
  } = props;
  const classes = useStyles();

  if (!wrap) {
    return (
      <div className={classes.root}>
        <GridList
          className={classes.gridList}
          cols={cols ?? 2.3}
          cellHeight={270}
          classes={{ root: classes.customTiles }}
          spacing={8}
        >
          {products.map((cardInfo: ProductPropTypes, index: number) => (
            <GridListTile
              key={cardInfo.title + index.toString()}
              classes={{ root: classes.customTiles }}
            >
              <ProductCard {...cardInfo} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }

  return (
    <Grid container spacing={1}>
      {products.map((cardInfo: ProductPropTypes, index: number) => (
        <Grid key={index} item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
          {loading ? <ProductCardSkeleton /> : <ProductCard {...cardInfo} />}
        </Grid>
      ))}
    </Grid>
  );
}
