/*
 * File: ProductCardB.tsx
 * Project: @inventures/react-lib
 * File Created: Monday, 31st August 2020 3:33:49 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Wednesday, 9th September 2020 5:54:08 pm
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
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
  Box,
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
      minWidth: '162px',
      minHeight: '250px',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'space-between',
      textAlign: 'center',
      padding: '8px',
      margin: '4px',
      flexGrow: 1,
      justifyItems: 'space-between',
    },
    carouselRoot: {
      flexGrow: 1,
      margin: '4px',
    },
    title: {
      margin: '4px 0px 8px 0px',
      backgroundColor: '#FFFFFF',
      flex: 1,
    },
    content: {
      padding: '0px',
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
      aspectRatio: '1',
    },
    textBox: {
      fontFamily: theme.typography.fontFamily,
      textAlign: 'center',
      alignSelf: 'center',
      alignContent: 'center',
      justifyContent: 'center',
    },
    carouselHeader: {
      flexDirection: 'row',
    },
    disabled: {
      backgroundColor: '#FFFFFF',
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
        />
        {tagText ? (
          <Chip color="primary" size="small" icon={tagIcon} label={tagText} />
        ) : (
          <Chip className={classes.disabled} size="small" />
        )}

        <CardContent className={classes.content} onClick={onClickCard}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            component="h5"
            className={classes.title}
          >
            {title}
          </Typography>
          <Box
            className={classes.textBox}
            component="div"
            textOverflow="ellipsis"
            overflow="hidden"
            whiteSpace="nowrap"
          >
            {subtitle}
          </Box>
          <Box
            className={classes.textBox}
            component="div"
            textOverflow="ellipsis"
            overflow="hidden"
            whiteSpace="nowrap"
          >
            {description}
          </Box>
          <Box
            className={classes.textBox}
            component="div"
            textOverflow="ellipsis"
            overflow="hidden"
            whiteSpace="nowrap"
          >
            {details}
          </Box>
          <Typography variant="body1" color="textPrimary" component="h6" className={classes.price}>
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
      <Grid container spacing={3} justify="flex-start">
        <Grid item xs={8} justify="flex-end">
          <Typography variant="body1" color="textPrimary" component="h5">
            {title}
          </Typography>
        </Grid>

        <Grid item xs={4} justify="flex-start">
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
              <Grid key={index} item xs={9} sm={3}>
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
