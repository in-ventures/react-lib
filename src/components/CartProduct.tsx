import React, { useCallback } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { TextFieldProps } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  actions: {
    flexDirection: 'row-reverse',
  },
  content: {
    flex: '1 0 auto',
    paddingLeft: 0,
    paddingBottom: '0!important',
  },
  cover: {
    width: 88,
    height: 88,
    backgroundSize: 'contain',
    margin: 16,
  },
  sumicon: {
    padding: 0,
  },
  trashicon: {
    marginLeft: 33,
  },
  underline: {
    textDecoration: 'underline',
  },
  smalltext: {
    fontSize: 13,
  },
});

//Type
type CartProductProps = {
  urlImage?: string;
  title1?: string;
  title2?: string;
  title3?: string;
  title4?: string;
  quantity?: number;
  unitPrice?: number;
  totalPrice?: number;
  onDefaultClick?: () => void;
  onAddClick?: () => void;
  onSubClick?: () => void;
  onTrashClick?: () => void;
  onDetailsClick?: () => void;
} & TextFieldProps;

//Component
export default function CartProduct({
  urlImage,
  title1,
  title2,
  title3,
  title4,
  quantity,
  unitPrice,
  totalPrice,
  onDefaultClick = () => {},
  onAddClick = () => {},
  onSubClick = () => {},
  onTrashClick = () => {},
  onDetailsClick = () => {},
}: CartProductProps) {
  const classes = useStyles();

  const handleDefaultClick = useCallback(
    (e) => {
      e.stopPropagation();
      onDefaultClick();
    },
    [onDefaultClick],
  );

  return (
    <Card>
      <CardActionArea onClick={onDetailsClick}>
        <div className={classes.root}>
          <CardMedia className={classes.cover} image={urlImage} title="" />

          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="div" variant="body2" gutterBottom>
                <Box color="text.primary" alignItems="flex-start">
                  {title1}
                </Box>
              </Typography>

              <Typography
                component="div"
                className={classes.smalltext}
                gutterBottom
              >
                <Box color="text.secondary" alignItems="flex-start">
                  {title2}
                </Box>
                <Box color="text.secondary" alignItems="flex-start">
                  {title3}
                </Box>
                <Link
                  onClick={handleDefaultClick}
                  color="primary"
                  className={classes.underline}
                >
                  {title4}
                </Link>
              </Typography>

              <Typography component="div" className={classes.smalltext}>
                <Box color="text.primary" alignItems="flex-start">
                  Valor unitario: $ {unitPrice}
                </Box>
              </Typography>

              <Typography component="div" variant="body1">
                <Box alignItems="flex-start">Total: $ {totalPrice}</Box>
              </Typography>
            </CardContent>
          </div>
        </div>
      </CardActionArea>

      <CardActions className={classes.actions}>
        <IconButton
          className={classes.trashicon}
          aria-label="delete"
          onClick={onTrashClick}
          size="small"
        >
          <DeleteIcon fontSize="small" />
        </IconButton>

        <IconButton
          className={classes.sumicon}
          aria-label="add"
          onClick={onAddClick}
        >
          <Icon color="primary" fontSize="large">
            add_circle
          </Icon>
        </IconButton>

        <Typography component="div" variant="subtitle1">
          <Box color="text.primary">{quantity}</Box>
        </Typography>

        <IconButton
          className={classes.sumicon}
          aria-label="sub"
          onClick={onSubClick}
        >
          <Icon color="primary" fontSize="large">
            remove_circle
          </Icon>
        </IconButton>
      </CardActions>
    </Card>
  );
}
