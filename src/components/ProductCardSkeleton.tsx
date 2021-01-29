/*
 * File: ProductCardB.tsx
 * Project: @inventures/react-lib
 * File Created: Monday, 31st August 2020 3:33:49 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Friday, 29th January 2021 10:05:26 am
 * Modified By: Vicente Melin (vicente@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    padding: '4px',
    height: 242,
  },
  center: {
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '4px',
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    display: 'flex',
  },
  price: {
    marginTop: '6px',
  },
  badge: {
    borderRadius: '13px',
  },
});

export function ProductCardSkeleton() {
  /**
   * Returns the a product card react coomponent, which places customizable product information.
   * Uses Material UI Card to place information
   *
   * @param props - defined by ProductPropTypes.
   * @returns React Component
   *
   */
  const classes = useStyles({});
  return (
    <>
      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Skeleton
            variant="rect"
            height={78}
            width={'80%'}
            className={classes.center}
          />

          <Typography variant="h4">
            <Skeleton
              variant="text"
              className={`${classes.badge} ${classes.center}`}
              width={'70%'}
            />
          </Typography>

          <Typography variant="h5">
            <Skeleton variant="text" width={'50%'} className={classes.center} />
          </Typography>

          <Typography variant="body2">
            <Skeleton variant="text" className={classes.center} />
          </Typography>

          <Typography variant="h4" color="primary" className={classes.price}>
            <Skeleton variant="text" width={'50%'} className={classes.center} />
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
