/*
 * File: ProductCardB.tsx
 * Project: @inventures/react-lib
 * File Created: Monday, 31st August 2020 3:33:49 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Wednesday, 25th November 2020 3:23:41 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Badge,
} from '@material-ui/core';
import { CurrencyFormatter } from '../formatters';
import clsx from 'clsx';

export type ProductPropTypes = {
  imageUrl?: string;
  title: string;
  subtitle?: string;
  tagText?: string;
  tagIcon?: React.ReactElement;
  description?: string;
  details?: string;
  badgeContent?: number;
  badgeColor?: string;
  badgeTextColor?: string;
  price: number;
  onClickCard: () => void;
};

type BadgeStyleProps = {
  badgeColor: string;
  badgeTextColor: string;
};

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    padding: '8px',
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
    height: '92px',
    objectFit: 'contain',
  },
  tag: {
    cursor: 'pointer',
    maxWidth: '100%',
    zIndex: 999,
  },
  disabledTag: {
    backgroundColor: '#FFFFFF',
  },
  price: {
    marginTop: '8px',
  },
  badge: {
    backgroundColor: (props: BadgeStyleProps) => props.badgeColor,
    right: 16,
    top: 16,
    color: (props: BadgeStyleProps) => props.badgeTextColor,
    padding: '0px 4px',
  },
});

export function ProductCard(props: ProductPropTypes) {
  /**
   * Returns the a product card react coomponent, which places customizable product information.
   * Uses Material UI Card to place information
   *
   * @param props - defined by ProductPropTypes.
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
    details,
    badgeContent,
    badgeColor,
    badgeTextColor,
    onClickCard,
  } = props;

  const currFormat = new CurrencyFormatter();
  const currencyPrice = currFormat.format(price);
  const classes = useStyles({
    badgeColor: badgeColor ? badgeColor : '#000000',
    badgeTextColor: badgeTextColor ? badgeTextColor : '#FFFFFF',
  });

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea onClick={onClickCard}>
          {badgeContent ? (
            <Badge
              badgeContent={badgeContent}
              max={9}
              classes={{
                badge: classes.badge,
              }}
            >
              <CardMedia
                className={classes.media}
                image={imageUrl}
                component="img"
              />
            </Badge>
          ) : (
            <CardMedia
              className={classes.media}
              image={imageUrl}
              component="img"
            />
          )}

          {tagIcon && tagText && (
            <Chip
              color="primary"
              size="small"
              icon={tagIcon}
              label={tagText}
              className={clsx(classes.tag, !tagText && classes.disabledTag)}
            />
          )}

          <CardContent className={classes.content} onClick={onClickCard}>
            <Typography
              variant="subtitle1"
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
              <Typography variant="body2" color="textPrimary" noWrap>
                {description}
              </Typography>
            )}
            {details && (
              <Typography variant="body2" color="textSecondary" noWrap>
                {details}
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
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
