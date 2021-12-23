/*
 * File: ProductDetails.tsx
 * Project: @inventures/react-lib
 * File Created: Friday, 11th September 2020 10:18:53 am
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Thursday, 23rd December 2021 10:44:28 am
 * Modified By: Luis Aparicio (luis@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import 'regenerator-runtime/runtime.js';
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia, CardContent, Typography, Box } from '@material-ui/core';
import clsx from 'clsx';

type ClassesProps = {
  chip?: string;
  tagsDiv?: string;
};

type ProductDetailsProps = {
  uuid?: string;
  imageUrl?: string;
  fallbackUrl?: string;
  title: string;
  subtitle?: string;
  descriptions?: (React.ReactElement | null)[];
  pricePerUnit?: string;
  onClickImage?: () => void;
  price: string;
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
    paddingTop: 7,
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
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    width: '100%',
  },
  imageContainer: {
    position: 'relative',
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
    uuid,
    imageUrl,
    title,
    subtitle,
    price,
    descriptions,
    onClickImage,
    pricePerUnit,
    tags,
    classes: propClasses,
    fallbackUrl,
  } = props;

  const classes = useStyles();
  const handleImageError = (e: React.ChangeEvent<HTMLImageElement>) => {
    if (!fallbackUrl) return;
    e.target.onerror = null;
    e.target.src = fallbackUrl;
  };
  return (
    <Box className={classes.root}>
      <div className={classes.imageContainer}>
        <CardMedia
          className={classes.media}
          image={imageUrl || fallbackUrl}
          component="img"
          onClick={onClickImage}
          onError={handleImageError}
          id={uuid ? `${uuid}-detail-img` : ''}
        />
        <div className={clsx(classes.tagsDiv, propClasses?.tagsDiv)}>
          {tags?.map((tag, index: number) => {
            return <Fragment key={`tag-${index}`}>{tag}</Fragment>;
          })}
        </div>
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
        {descriptions?.map((description, index: number) => {
          return (
            <Fragment key={`description-${index}`}>{description}</Fragment>
          );
        })}
        <Typography
          variant="h6"
          color="primary"
          className={classes.price}
          noWrap
        >
          {price}
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
