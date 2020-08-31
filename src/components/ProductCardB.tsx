/*
 * File: ProductCardB.tsx
 * Project: @inventures/react-lib
 * File Created: Monday, 31st August 2020 3:33:49 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Monday, 31st August 2020 6:46:37 pm
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CurrencyFormatter } from './../hooks/formatters';

type ProductBPropTypes = {
    imageUrl ?: string;
    title: string;
    subtitle: string;
    tag ?: string;
    description ?: string;
    details ?: string;
    price: number;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '162px',
      maxHeight: '240px',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '8px',
    },
    title: {
        color: '#414046',
    },
    header: {
        flex: 1,
    },
    content: {
        paddingBottom: '10px',
        flex: 1,
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
      width: '140px',
      aspectRatio: '1',
    },
    price: {
        color: '#5185da',
    },
    tag: {
        fontFamily: theme.typography.fontFamily,
        marginLeft: '7%',
        marginRight: '5%',
        textAlign: 'center',
        width: '140px',
        height: '20px',
        borderRadius: '4px',
        color: '#FFFFFF',
        backgroundColor: '#5185da',
        alignSelf: 'center',
        alignContent: 'center',
    },
  }),
);

export default function ProductCardB(props: ProductBPropTypes) {
    const {imageUrl, title, subtitle, tag, details, description, price} = props;
    const currFormat = new CurrencyFormatter();
    const currencyPrice = currFormat.format(price);
    const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.header}>
          <CardMedia
            className={classes.media}
            image={imageUrl}
          />
          { tag
            ? <div className={classes.tag}>
                {tag}
                </div>
            : <div/>
          }
      </div>
      <CardContent className={classes.content}>
        <Typography variant="body2" component="h5" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {subtitle}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {details}
        </Typography>
        <Typography variant="body2" color="textPrimary" component="h6" className={classes.price}>
          {currencyPrice}
        </Typography>
      </CardContent>
    </Card>
  );
}




