/*
 * File: ProductCard.tsx
 * Project:  @inventures/react-lib
 * File Created: Thursday, 16th July 2020 9:27:33 am
 * Author: Mario Merino (mario@inventures.cl)
 * -----
 * Last Modified: Tuesday, 4th August 2020 5:40:40 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
import React from 'react';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import { TextFieldProps } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      //	minWidth: 248,
      height: 360,
      padding: '0px',
      backgroundColor: 'white',
      margin: '1px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    media: {
      maxHeight: 120,
      minHeight: 56,
      width: 'calc(100% - 2rem)',
      objectFit: 'contain',
      padding: '1rem 1rem 0rem 1rem',
    },
    box: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: theme.spacing(1),
      '& > *': {
        marginBottom: theme.spacing(0.5),
        marginRight: theme.spacing(0.5),
      },
    },
    content: {
      padding: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flexGrow: 2,
    },
    actions: {
      justifyContent: 'center',
    },
    button: {
      // todo make a boolean prop to override standard radius
      borderRadius: theme.spacing(4),
    },
    actionArea: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flexGrow: 2,
      paddingBottom: '20px',
    },
  }),
);

type CardProps = {
  title?: string;
  urlImage?: string;
  description?: string;
  price?: number;
  buttonText?: string;
  isBio?: boolean;
  recipe?: boolean;
  singlePrice?: boolean;
  clickButton?: () => void;
  clickCard?: () => void;
} & TextFieldProps;
export default function ProductCardA({
  title,
  urlImage,
  description,
  price,
  buttonText,
  isBio,
  recipe,
  singlePrice,
  clickButton = () => {},
  clickCard = () => {},
}: CardProps) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CardActionArea className={classes.actionArea}>
        <CardMedia
          className={classes.media}
          component="img"
          alt="Clonazepam 05 mg"
          image={urlImage}
          title="Clonazepam 05 mg"
        />
        <CardContent className={classes.content} onClick={() => clickCard()}>
          <Typography
            align="center"
            color="textPrimary"
            gutterBottom
            variant="h6"
            component="h2"
          >
            {title}
          </Typography>
          <Box className={classes.box}>
            {isBio && (
              <Chip
                size="small"
                avatar={
                  <Avatar
                    alt="Bioequivalente"
                    src="/static/images/avatar/1.jpg"
                  />
                }
                label="BioE"
              />
            )}

            {recipe && (
              <Chip
                size="small"
                avatar={
                  <Avatar
                    alt="Receta retenida"
                    src="/static/images/avatar/1.jpg"
                  />
                }
                label="Receta retenida"
              />
            )}
          </Box>

          <Typography
            align="center"
            variant="body2"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            {description}
          </Typography>
          <Box>
            <Typography
              align="center"
              color="primary"
              variant="h6"
              component="h2"
            >
              $ {price}
            </Typography>
            {/*todo calculate this based on prop price, number of unit and unit format*/}
            {singlePrice && (
              <Typography
                align="center"
                color="primary"
                variant="subtitle2"
                component="h3"
              >
                $ 168 / comprimido
              </Typography>
            )}
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions} onClick={() => clickButton()}>
        <Button className={classes.button} variant="contained" color="primary">
          {buttonText}
        </Button>
      </CardActions>
    </Box>
  );
}
