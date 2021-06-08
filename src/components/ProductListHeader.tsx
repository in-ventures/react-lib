/*
 * File: ProductListHeader.tsx
 * Project: @inventures/react-lib
 * File Created: Friday, 11th September 2020 10:18:40 am
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Tuesday, 8th June 2021 2:57:37 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import { Typography, Box, Button } from '@material-ui/core';
import clsx from 'clsx';

type ProductListHeader = {
  title?: string;
  onClickCarousel?: () => void;
  CarouselActionComponent?: React.ReactElement;
  classes?: {
    root?: string;
    title?: string;
    titleBox?: string;
    icon?: string;
  };
};

const useStyles = makeStyles({
  carouselHeader: {
    paddingBottom: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewMore: {
    padding: '0px',
  },
});

export function ProductListHeader(props: ProductListHeader) {
  /**
   * Returns the header component for the product list.
   * Places Title and Icon Button on a Material UI Box component.
   *
   * @param props - defined by ProductListHeader type.
   * @returns React Component
   *
   */
  const {
    title,
    onClickCarousel,
    classes: propsClasses,
    CarouselActionComponent,
  } = props;
  const classes = useStyles();

  return (
    <Box className={clsx(propsClasses?.root)}>
      {title && (
        <Box className={clsx(classes.carouselHeader, propsClasses?.titleBox)}>
          <Typography
            className={clsx(propsClasses?.title)}
            variant="h6"
            color="textPrimary"
          >
            {title}
          </Typography>
          {CarouselActionComponent
            ? CarouselActionComponent
            : onClickCarousel && (
                <Button color="primary" onClick={onClickCarousel}>
                  VER TODOS
                  <ChevronRightRoundedIcon fontSize="large" />
                </Button>
              )}
          {}
        </Box>
      )}
    </Box>
  );
}
