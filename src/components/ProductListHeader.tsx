/*
 * File: ProductListHeader.tsx
 * Project: @inventures/react-lib
 * File Created: Friday, 11th September 2020 10:18:40 am
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Friday, 11th September 2020 11:26:25 am
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import { IconButton, Typography, Box } from '@material-ui/core';

type ProductListHeader = {
  title?: string;
  onClickCarousel?: () => void;
};

const useStyles = makeStyles({
  carouselHeader: {
    paddingBottom: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
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
  const { title, onClickCarousel } = props;
  const classes = useStyles();

  return (
    <Box>
      {title && (
        <Box className={classes.carouselHeader}>
          <Typography variant="h6" color="textPrimary">
            {title}
          </Typography>

          {onClickCarousel && (
            <IconButton
              color="primary"
              aria-label="ver más resultados"
              onClick={onClickCarousel}
              className={classes.viewMore}
            >
              <ChevronRightRoundedIcon fontSize="large" />
            </IconButton>
          )}
        </Box>
      )}
    </Box>
  );
}
