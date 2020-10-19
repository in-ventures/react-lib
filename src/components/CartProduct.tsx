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

import { useToast } from '../hooks/toast.hook';
import { CurrencyFormatter } from '../formatters';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  actions: {
    //flexDirection: 'row-reverse',
    display: 'flex',
    justifyContent: 'space-between',
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
  trashicon: {
    marginLeft: 22,
    marginRight: 8,
  },
  underline: {
    textDecoration: 'underline',
  },
  bigtext: {
    fontSize: 15,
  },
  addbutton: {
    marginLeft: 10,
  },
  subbutton: {
    marginRight: 10,
  },
  rightbuttons: {
    display: 'flex',
    alignItems: 'center',
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
  unitPrice: number;
  totalPrice: number;
  ExtraTag?: React.ReactNode;
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
  ExtraTag = null,
  onDefaultClick = () => {},
  onAddClick = () => {},
  onSubClick = () => {},
  onTrashClick = () => {},
  onDetailsClick = () => {},
}: CartProductProps) {
  const classes = useStyles();

  const toast = useToast();

  const handleDefaultClick = useCallback(
    (e) => {
      e.stopPropagation();
      onDefaultClick();
    },
    [onDefaultClick],
  );

  const currFormat = new CurrencyFormatter();
  const currUnitPrice = currFormat.format(unitPrice);
  const currTotalPrice = currFormat.format(totalPrice);

  return (
    <Card square elevation={0}>
      <CardActionArea onClick={onDetailsClick}>
        <div className={classes.root}>
          <CardMedia className={classes.cover} image={urlImage} title="" />

          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="div" variant="subtitle1" gutterBottom>
                <Box color="text.primary" alignItems="flex-start">
                  {title1}
                </Box>
              </Typography>

              <Typography component="div" variant="body2" gutterBottom>
                <Box color="text.secondary" alignItems="flex-start">
                  {title2}
                </Box>
                <Box color="text.secondary" alignItems="flex-start">
                  {title3}
                </Box>
                <Link
                  onClick={handleDefaultClick}
                  color="textSecondary"
                  className={classes.underline}
                >
                  {title4}
                </Link>
              </Typography>

              <Typography component="div" variant="body2">
                <Box color="text.primary" alignItems="flex-start">
                  Valor unitario: {currUnitPrice}
                </Box>
              </Typography>

              <Typography component="div" variant="body1" color="primary">
                <Box alignItems="flex-start" color="inherit">
                  Total: {currTotalPrice}
                </Box>
              </Typography>
            </CardContent>
          </div>
        </div>
      </CardActionArea>

      <CardActions className={classes.actions}>
        <Box>{ExtraTag}</Box>

        <Box className={classes.rightbuttons}>
          <IconButton
            aria-label="sub"
            onClick={onSubClick}
            className={classes.subbutton}
          >
            <Icon color="primary" fontSize="small">
              remove
            </Icon>
          </IconButton>

          <Typography component="div" variant="subtitle1">
            <Box color="text.primary">{quantity}</Box>
          </Typography>

          <IconButton
            aria-label="add"
            onClick={onAddClick}
            className={classes.addbutton}
          >
            <Icon color="primary" fontSize="small">
              add
            </Icon>
          </IconButton>

          <IconButton
            className={classes.trashicon}
            aria-label="delete"
            onClick={onTrashClick}
            size="small"
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}
