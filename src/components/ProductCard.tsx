/*
 * File: ProductCardB.tsx
 * Project: @inventures/react-lib
 * File Created: Monday, 31st August 2020 3:33:49 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Monday, 7th September 2020 10:08:29 am
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
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
  onClickCarousel?: () => void;
  cardList?: ProductBPropTypes[];
};

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      width: '162px',
      height: '250px',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '8px',
      mergin: '5px',
    },
    title: {
      marginBottom: '3px',
      flexGrow: 1,
    },
    content: {
      paddingBottom: '10px',
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
      aspectRatio: '1',
    },
    price: {
      color: '#5185da',
      marginBottom: '5px',
      marginTop: '5px',
    },
    textBox: {
      fontFamily: theme.typography.fontFamily,
      textAlign: 'center',
      width: '140px',
      alignSelf: 'center',
      alignContent: 'center',
      justifyContent: 'center',
    },
    icon: {
      height: '18px',
      paddingTop: '3px',
    },
    carouselHeader: {
      flexDirection: 'row',
    },
    gridContainer: {
      flexGrow: 1,
      margin: '10px',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    disabled: {
      backgroundColor: '#FFFFFF',
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
    details,
    description,
    price,
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
          <Typography
            variant="body1"
            color="textPrimary"
            component="h6"
            className={classes.price}
          >
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
    <Box display="block">
      <Grid
        container
        className={classes.gridContainer}
        spacing={2}
        justify="center"
      >
        <Typography
          variant="body1"
          color="textPrimary"
          component="h5"
          className={classes.title}
        >
          {title}
        </Typography>

        {onClickCarousel ? (
          <IconButton
            color="primary"
            aria-label="view product categories"
            className={classes.menuButton}
            onClick={onClickCarousel}
          >
            <ChevronRightRoundedIcon />
          </IconButton>
        ) : (
          <div />
        )}

        {cardList ? (
          <Grid item xs={12} container justify="center">
            <Grid container justify="flex-start" spacing={2}>
              {cardList.map((cardInfo, index) => (
                <Grid key={index} item>
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
            </Grid>
          </Grid>
        ) : (
          <div />
        )}
      </Grid>
    </Box>
  );
}
