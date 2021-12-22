/*
 * File: ProductCardB.tsx
 * Project: @inventures/react-lib
 * File Created: Monday, 31st August 2020 3:33:49 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Wednesday, 22nd December 2021 12:11:44 pm
 * Modified By: Luis Aparicio (luis@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import 'regenerator-runtime/runtime.js';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import clsx from 'clsx';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    padding: '8px',
    height: 242,
    borderRadius: 12,
    boxShadow: '0px 0px 6px 1px #dedede',
    transition: 'box-shadow 0.5s',
    '&:hover': {
      boxShadow: '0px 0px 6px 2px #cfcfcf',
    },
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
  badgeHeader: {
    borderRadius: '10px',
    marginBottom: 5,
  },
  marginBottom: {
    marginBottom: 6,
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
            height={90}
            width={'90%'}
            className={classes.center}
          />

          <Typography variant="h4">
            <Skeleton
              variant="text"
              className={`${classes.badge} ${classes.center}`}
              width={'80%'}
            />
          </Typography>

          <Typography variant="body2">
            <Skeleton
              variant="text"
              width={'75%'}
              className={clsx(classes.center, classes.marginBottom)}
            />
          </Typography>

          <Typography variant="body2">
            <Skeleton
              variant="text"
              className={clsx(classes.center, classes.marginBottom)}
            />
          </Typography>

          <Typography variant="h5">
            <Skeleton variant="text" width={'60%'} className={classes.center} />
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
