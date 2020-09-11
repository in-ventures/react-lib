/*
 * File: ProductList.tsx
 * Project: @inventures/react-lib
 * File Created: Friday, 11th September 2020 10:18:24 am
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Friday, 11th September 2020 11:27:46 am
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
import React from 'react';
import { Grid } from '@material-ui/core';
import { ProductPropTypes, ProductCard } from './ProductCard';

type ProductList = {
  products: ProductPropTypes[];
  gridBreakpoints: GridBreakpoints;
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
  } = props;
  return (
    <Grid container spacing={1}>
      {products.map((cardInfo: ProductPropTypes, index: number) => (
        <Grid key={index} item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
          <ProductCard
            imageUrl={cardInfo.imageUrl}
            title={cardInfo.title}
            subtitle={cardInfo.subtitle}
            details={cardInfo.details}
            description={cardInfo.description}
            price={cardInfo.price}
            tagText={cardInfo.tagText}
            tagIcon={cardInfo.tagIcon}
            onClickCard={cardInfo.onClickCard}
          />
        </Grid>
      ))}
    </Grid>
  );
}
