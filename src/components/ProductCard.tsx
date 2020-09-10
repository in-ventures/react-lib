/*
 * File: ProductCardB.tsx
 * Project: @inventures/react-lib
 * File Created: Monday, 31st August 2020 3:33:49 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Thursday, 10th September 2020 12:03:17 pm
 * Modified By: Mario Merino (mario@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
  Box,
} from '@material-ui/core';
import { CurrencyFormatter } from '../formatters';
import clsx from 'clsx';

type ProductBPropTypes = {
  imageUrl?: string;
  title: string;
  subtitle?: string;
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
      marginTop: '-14px',
      maxWidth: '100%',
    },
    carouselHeader: {
      paddingBottom: '8px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    disabledTag: {
      backgroundColor: '#FFFFFF',
    },
    price: {
      marginTop: '8px',
    },
    viewMore: {
      padding: '0px',
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
        <Chip
          color="primary"
          size="small"
          icon={tagIcon}
          label={tagText}
          className={clsx(classes.tag, !tagText && classes.disabledTag)}
        />

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
    <Box>
      <Box className={classes.carouselHeader}>
        <Typography variant="h6" color="textPrimary">
          {title}
        </Typography>
        <IconButton
          color="primary"
          aria-label="ver más resultados"
          onClick={onClickCarousel}
          className={classes.viewMore}
        >
          <ChevronRightRoundedIcon fontSize="large" />
        </IconButton>
      </Box>
      <Grid container spacing={1}>
        {cardList ? (
          <>
            {cardList.map((cardInfo, index) => (
              <Grid key={index} item xs={6} sm={4} md={3} lg={2} xl={1}>
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
    </Box>
  );
}

/* <div className={classes.carouselRoot}>
<Grid container spacing={1} justify="flex-start">
  <Grid item xs={11} justify="flex-end">
    <Typography variant="h6" color="textPrimary">
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
        <Grid key={index} item xs={6} sm={4} md={3} lg={2} xl={1}>
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
</div> */
