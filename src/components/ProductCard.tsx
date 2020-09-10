/*
 * File: ProductCardB.tsx
 * Project: @inventures/react-lib
 * File Created: Monday, 31st August 2020 3:33:49 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Thursday, 10th September 2020 10:09:26 am
 * Modified By: Mario Merino (mario@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import {
  Card,
  CardActionArea,
  Grid,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  Chip,
} from '@material-ui/core';
import { CurrencyFormatter } from '../formatters';

type ProductBPropTypes = {
  imageUrl?: string;
  title: string;
  subtitle: string;
  tagText?: string;
  tagIcon?: React.ReactElement;
  description?: string;
  details?: string;
  price: number;
  onClickCard: () => void;
};
type ProductCarouselType = {
  title: string;
  onClickCarousel: () => void;
  cardList?: ProductBPropTypes[];
};

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'space-between',
      textAlign: 'center',
      padding: '8px',
      flexGrow: 1,
      justifyItems: 'space-between',
    },
    carouselRoot: {
      flexGrow: 1,
      margin: '4px',
    },
    title: {
      width: '100%',
      margin: '4px 0px 8px 0px',
      backgroundColor: '#FFFFFF',
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
      marginTop: '-14px',
      maxWidth: '100%',
    },
    textBox: {
      textAlign: 'center',
      alignSelf: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      maxWidth: '100%',
    },
    carouselHeader: {
      flexDirection: 'row',
    },
    disabled: {
      backgroundColor: '#FFFFFF',
      marginTop: '-14px',
    },
    price: {
      marginTop: '8px',
    },
  };
});

export function ProductCard(props: ProductBPropTypes) {
  const {
    imageUrl,
    title,
    subtitle,
    tagText,
    tagIcon,
    price,
    description,
    details,
    onClickCard,
  } = props;

  const currFormat = new CurrencyFormatter();
  const currencyPrice = currFormat.format(price);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageUrl}
          onClick={onClickCard}
          component="img"
        />
        {tagText ? (
          <Chip
            color="primary"
            size="small"
            icon={tagIcon}
            label={tagText}
            className={classes.tag}
          />
        ) : (
          <Chip className={classes.disabled} size="small" />
        )}

        <CardContent className={classes.content} onClick={onClickCard}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            component="h4"
            className={classes.title}
            noWrap
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant="body2"
              color="textSecondary"
              className={classes.textBox}
              noWrap
            >
              {subtitle}
            </Typography>
          )}
          {description && (
            <Typography
              variant="body2"
              color="textPrimary"
              className={classes.textBox}
              noWrap
            >
              {description}
            </Typography>
          )}
          {details && (
            <Typography
              variant="body2"
              color="textSecondary"
              className={classes.textBox}
              noWrap
            >
              {details}
            </Typography>
          )}
          <Typography variant="h6" color="primary" className={classes.price}>
            {currencyPrice}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export function ProductCardCarousel(props: ProductCarouselType) {
  const { title, onClickCarousel, cardList } = props;
  const classes = useStyles();

  return (
    <div className={classes.carouselRoot}>
      <Grid container spacing={1} justify="flex-start">
        <Grid item xs={11} justify="flex-end">
          <Typography variant="body1" color="textPrimary" component="h5">
            {title}
          </Typography>
        </Grid>

        <Grid item xs={1} justify="flex-start">
          <IconButton
            color="primary"
            aria-label="view product categories"
            onClick={onClickCarousel}
          >
            <ChevronRightRoundedIcon />
          </IconButton>
        </Grid>

        {cardList ? (
          <>
            {cardList.map((cardInfo, index) => (
              <Grid key={index} item xs={6} sm={4} lg={2}>
                <ProductCard
                  imageUrl={cardInfo.imageUrl}
                  title={cardInfo.title}
                  subtitle={cardInfo.subtitle}
                  details={cardInfo.details}
                  description={cardInfo.description}
                  price={cardInfo.price}
                  tagText={cardInfo.tagText}
                  tagIcon={cardInfo.tagIcon}
                  onClickCard={cardInfo.onClickCard}
                />
              </Grid>
            ))}
          </>
        ) : (
          <div />
        )}
      </Grid>
    </div>
  );
}
