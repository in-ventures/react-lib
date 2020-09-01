/*
 * File: ProductCardB.tsx
 * Project: @inventures/react-lib
 * File Created: Monday, 31st August 2020 3:33:49 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Tuesday, 1st September 2020 5:28:36 pm
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import React from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import {
  Card,
  CardActionArea,
  Box,
  CardMedia,
  CardContent,
  Typography,
  Chip,
} from '@material-ui/core';
import { CurrencyFormatter } from './../hooks/formatters';

type ProductBPropTypes = {
  imageUrl?: string;
  title: string;
  subtitle: string;
  tag?: string;
  description?: string;
  details?: string;
  price: number;
  clickCard: () => void;
};

type ProductCarouselType = {
  title: string;
  onclick: any;
  cardList: ProductBPropTypes[];
};

const useStyles = makeStyles((theme: Theme) => {
  console.log(theme);
  return {
    root: {
      maxWidth: '162px',
      maxHeight: '250px',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '8px',
    },
    title: {
      color: '#414046',
      marginBottom: '3px',
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
    tag: {
      justifyContent: 'space-between',
      fontFamily: theme.typography.fontFamily,
      textAlign: 'center',
      width: '160px',
      height: '22px',
      color: '#FFFFFF',
      backgroundColor: '#5185da',
      alignSelf: 'center',
      alignContent: 'center',
      paddingBottom: '2px',
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
  };
});

export function ProductCardB(props: ProductBPropTypes) {
  const { imageUrl, title, subtitle, tag, details, description, price, clickCard } = props;
  const currFormat = new CurrencyFormatter();
  const currencyPrice = currFormat.format(price);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={imageUrl} onClick={() => clickCard()}/>
        {tag ? (
          <div>
            <Chip
              color="primary"
              size="small"
              icon={<InsertDriveFileOutlinedIcon />}
              label={tag}
            />
          </div>
        ) : (
          <div />
        )}
        <CardContent className={classes.content} onClick={() => clickCard()}>
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
};

export function ProductCardCarousel(props: ProductCarouselType) {

};
