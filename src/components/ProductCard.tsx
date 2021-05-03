/*
 * File: ProductCardB.tsx
 * Project: @inventures/react-lib
 * File Created: Monday, 31st August 2020 3:33:49 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Monday, 3rd May 2021 1:27:43 pm
 * Modified By: Luis Aparicio (luis@inventures.cl)
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

type ClassesPropType = {
  badge?: string;
  leftBadgeDiv?: string;
  title?: string;
  media?: string;
  tag?: string;
  disabledTag?: string;
  price?: string;
  cardActionArea?: string;
  content?: string;
  root?: string;
  subtitle?: string;
  description?: string;
  details?: string;
};

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
  leftBadge?: React.ReactElement;
  price: number;
  onClickCard: () => void;
  classes?: ClassesPropType;
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
  leftBadge: {
    position: 'absolute',
    left: 5,
    top: 5,
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
    leftBadge,
    badgeTextColor,
    onClickCard,
    classes: propClasses,
  } = props;

  const currFormat = new CurrencyFormatter();
  const currencyPrice = currFormat.format(price);
  const classes = useStyles({
    badgeColor: badgeColor ? badgeColor : '#000000',
    badgeTextColor: badgeTextColor ? badgeTextColor : '#FFFFFF',
  });

  return (
    <>
      <Card className={clsx(classes.root, propClasses?.root)}>
        <CardActionArea
          onClick={onClickCard}
          className={propClasses?.cardActionArea}
        >
          {leftBadge && (
            <div className={clsx(classes.leftBadge, propClasses?.leftBadgeDiv)}>
              {leftBadge}
            </div>
          )}
          {badgeContent ? (
            <Badge
              badgeContent={badgeContent}
              max={9}
              classes={{
                badge: clsx(classes.badge, propClasses?.badge),
              }}
            >
              <CardMedia
                className={clsx(classes.media, propClasses?.media)}
                image={imageUrl}
                component="img"
              />
            </Badge>
          ) : (
            <CardMedia
              className={clsx(classes.media, propClasses?.media)}
              image={imageUrl}
              component="img"
            />
          )}

          <Chip
            color="primary"
            size="small"
            icon={tagIcon}
            label={tagText}
            className={clsx(
              classes.tag,
              propClasses?.tag,
              !tagText && clsx(classes.disabledTag, propClasses?.disabledTag),
            )}
          />

          <CardContent
            className={clsx(classes.content, propClasses?.content)}
            onClick={onClickCard}
          >
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={clsx(classes.title, propClasses?.title)}
              noWrap
            >
              {title}
            </Typography>
            {subtitle && (
              <Typography
                className={propClasses?.subtitle}
                variant="body2"
                color="textSecondary"
                noWrap
              >
                {subtitle}
              </Typography>
            )}
            {description && (
              <Typography
                className={propClasses?.description}
                variant="body2"
                color="textPrimary"
                noWrap
              >
                {description}
              </Typography>
            )}
            {details && (
              <Typography
                className={propClasses?.details}
                variant="body2"
                color="textSecondary"
                noWrap
              >
                {details}
              </Typography>
            )}
            <Typography
              variant="h6"
              color="primary"
              className={clsx(classes.price, propClasses?.price)}
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
