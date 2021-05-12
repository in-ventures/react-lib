/*
 * File: ProductDetails.tsx
 * Project: @inventures/react-lib
 * File Created: Friday, 11th September 2020 10:18:53 am
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Tuesday, 11th May 2021 6:28:43 pm
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia, CardContent, Typography, Box } from '@material-ui/core';
import { CurrencyFormatter } from '../formatters';
import clsx from 'clsx';

type ClassesProps = {
  chip?: string;
  tagsDiv?: string;
};

type ProductDetailsProps = {
  imageUrl?: string;
  title: string;
  subtitle?: string;
  description?: string;
  pricePerUnit?: string;
  onClickImage?: () => void;
  price: number;
  tags?: React.ReactElement[];
  classes?: ClassesProps;
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
    display: 'flex',
  },
  media: {
    height: '144px',
    objectFit: 'contain',
    cursor: 'pointer',
  },
  tag: {
    maxWidth: '100%',
    marginBottom: 3,
    marginRight: 5,
  },
  disabledTag: {
    backgroundColor: '#FFFFFF',
  },
  price: {
    marginTop: '8px',
  },
  tagsDiv: {
    marginTop: -14,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
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
    price,
    description,
    onClickImage,
    pricePerUnit,
    tags,
    classes: propClasses,
  } = props;

  const currFormat = new CurrencyFormatter();
  const currencyPrice = currFormat.format(price);
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CardMedia
        className={classes.media}
        image={imageUrl}
        component="img"
        onClick={onClickImage}
      />

      <div className={clsx(classes.tagsDiv, propClasses?.tagsDiv)}>
        {tags?.map((tag, index: number) => {
          return <div key={`tag-${index}`}>{tag}</div>;
        })}
      </div>

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
