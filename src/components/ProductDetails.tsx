/*
 * File: ProductDetails.tsx
 * Project: @inventures/react-lib
 * File Created: Friday, 11th September 2020 10:18:53 am
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Tuesday, 15th September 2020 4:30:08 pm
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Box,
} from '@material-ui/core';
import { CurrencyFormatter } from '../formatters';
import clsx from 'clsx';

type ProductDetailsProps = {
  imageUrl?: string;
  title: string;
  subtitle?: string;
  tagText?: string;
  tagIcon?: React.ReactElement;
  description?: string;
  pricePerUnit?: string;
  price: number;
};

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
  },
  title: {
    width: '100%',
    margin: '4px 0px 8px 0px',
  },
  content: {
    padding: '0px',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '118px',
    display: 'flex',
  },
  media: {
    height: '144px',
    objectFit: 'contain',
  },
  tag: {
    marginTop: '-14px',
    maxWidth: '100%',
  },
  disabledTag: {
    backgroundColor: '#FFFFFF',
  },
  price: {
    marginTop: '8px',
  },
});

export function ProductDetails(props: ProductDetailsProps) {
  /**
   * Returns the a product details component.
   * It places customizable product information in a Material UI Box component.
   *
   * @param props - defined by ProductDetailsProps
   * @returns React Component
   *
   */
  const {
    imageUrl,
    title,
    subtitle,
    tagText,
    tagIcon,
    price,
    description,
    pricePerUnit,
  } = props;

  const currFormat = new CurrencyFormatter();
  const currencyPrice = currFormat.format(price);
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CardMedia className={classes.media} image={imageUrl} component="img" />
      <Chip
        color="primary"
        size="small"
        icon={tagIcon}
        label={tagText}
        className={clsx(classes.tag, !tagText && classes.disabledTag)}
      />

      <CardContent className={classes.content}>
        <Typography
          variant="h6"
          color="textPrimary"
          className={classes.title}
          noWrap
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body2" color="textSecondary" noWrap>
            {subtitle}
          </Typography>
        )}
        {description && (
          <Typography variant="body2" color="textSecondary" noWrap>
            {description}
          </Typography>
        )}
        <Typography
          variant="h6"
          color="primary"
          className={classes.price}
          noWrap
        >
          {currencyPrice}
        </Typography>
        {pricePerUnit && (
          <Typography variant="body2" color="textSecondary" noWrap>
            {pricePerUnit}
          </Typography>
        )}
      </CardContent>
    </Box>
  );
}
