/*
 * File: ProductCardB.tsx
 * Project: @inventures/react-lib
 * File Created: Monday, 31st August 2020 3:33:49 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Monday, 13th December 2021 4:40:18 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import 'regenerator-runtime/runtime.js';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Badge,
  Container,
} from '@material-ui/core';
import clsx from 'clsx';
import { LazyCardMedia } from './LazyCardMedia';

type ClassesPropType = {
  badge?: string;
  badgeContainer?: string;
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
  slug?: string;
  uuid?: string;
  imageUrl?: string;
  fallbackUrl?: string;
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
  price: string;
  onClickCard?: () => void;
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
    borderRadius: 12,
    boxShadow: '0px 0px 6px 1px #dedede',
    transition: 'box-shadow 0.5s',
    '&:hover': {
      boxShadow: '0px 0px 6px 2px #cfcfcf',
    },
  },
  badgeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    width: '100%',
    margin: '4px 0px 8px 0px',
  },
  content: {
    padding: '0px',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '92px',
    display: 'flex',
    width: '100%',
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
    backgroundColor: 'transparent',
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
  PriceContent: {
    padding: 0,
    minHeight: 24,
  },
  chunk: {
    height: 19,
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
    fallbackUrl,
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

  const classes = useStyles({
    badgeColor: badgeColor ? badgeColor : '#000000',
    badgeTextColor: badgeTextColor ? badgeTextColor : '#FFFFFF',
  });
  const handleImageError = (e: React.ChangeEvent<HTMLImageElement>) => {
    if (!fallbackUrl) return;
    e.target.onerror = null;
    e.target.src = fallbackUrl;
  };

  return (
    <div className={clsx(propClasses?.cardActionArea)} onClick={onClickCard}>
      <Card className={clsx(classes.root, propClasses?.root)}>
        <Badge
          badgeContent={badgeContent}
          max={9}
          classes={{
            badge: clsx(classes.badge, propClasses?.badge),
            root: clsx(classes.badgeContainer, propClasses?.badgeContainer),
          }}
        >
          {leftBadge && (
            <div className={clsx(classes.leftBadge, propClasses?.leftBadgeDiv)}>
              {leftBadge}
            </div>
          )}
          <LazyCardMedia
            className={clsx(classes.media, propClasses?.media)}
            image={imageUrl || fallbackUrl || ''}
            component="img"
            onError={handleImageError}
            alt={title}
            height={92}
          />

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
            {subtitle ? (
              <Typography
                className={clsx(propClasses?.subtitle)}
                variant="body2"
                color="textSecondary"
                noWrap
              >
                {subtitle}
              </Typography>
            ) : (
              <Container classes={{ root: classes.chunk }}> </Container>
            )}
            {description ? (
              <Typography
                className={clsx(propClasses?.description)}
                variant="body2"
                color="textPrimary"
                noWrap
              >
                {description}
              </Typography>
            ) : (
              <Container classes={{ root: classes.chunk }}> </Container>
            )}
            {details ? (
              <Typography
                className={clsx(propClasses?.details)}
                variant="body2"
                color="textSecondary"
                noWrap
              >
                {details}
              </Typography>
            ) : (
              <Container classes={{ root: classes.chunk }}> </Container>
            )}
          </CardContent>
          <CardContent classes={{ root: classes.PriceContent }}>
            <Typography
              variant="h6"
              color="primary"
              className={clsx(classes.price, propClasses?.price)}
              noWrap
            >
              {price}
            </Typography>
          </CardContent>
        </Badge>
      </Card>
    </div>
  );
}
