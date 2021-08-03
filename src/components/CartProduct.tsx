import React, { useCallback } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
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
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => ({
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
    minWidth: 88,
    maxWidth: 88,
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
  activeIcon: {
    color: theme.palette.text.primary,
  },
  badges: {
    position: 'absolute',
    right: 0,
  },
}));

//Type
type PropClasses = {
  title1?: string;
  title2?: string;
  title3?: string;
  title4?: string;
  currUnitPrice?: string;
  currTotalPrice?: string;
  quantity?: string;
  badges?: string;
};

//Type
type CartProductProps = {
  classes?: PropClasses;
  urlImage?: string;
  title1?: string;
  title2?: string;
  title3?: string;
  title4?: string;
  quantity?: number;
  unitPrice: string;
  totalPrice: string;
  disabled?: boolean;
  notEditable?: boolean;
  disableCardClick?: boolean;
  badges?: React.ReactElement[];
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
  badges,
  disabled,
  notEditable,
  disableCardClick,
  onDefaultClick = () => {},
  onAddClick = () => {},
  onSubClick = () => {},
  onTrashClick = () => {},
  onDetailsClick = () => {},
  classes: propClasses,
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
    <Card square elevation={0}>
      <CardActionArea disabled={disableCardClick} onClick={onDetailsClick}>
        <div className={classes.root}>
          <CardMedia className={classes.cover} image={urlImage} title="" />

          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="div" variant="subtitle1" gutterBottom>
                <Box
                  className={clsx(propClasses?.title1)}
                  color="text.primary"
                  alignItems="flex-start"
                >
                  {title1}
                </Box>
              </Typography>

              <Typography component="div" variant="body2" gutterBottom>
                <Box
                  className={clsx(propClasses?.title2)}
                  color="text.secondary"
                  alignItems="flex-start"
                >
                  {title2}
                </Box>
                <Box
                  className={clsx(propClasses?.title3)}
                  color="text.secondary"
                  alignItems="flex-start"
                >
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
                <Box
                  className={clsx(propClasses?.currUnitPrice)}
                  color="text.primary"
                  alignItems="flex-start"
                >
                  {unitPrice && `Valor unitario: ${unitPrice}`}
                </Box>
              </Typography>

              <Typography component="div" variant="body2">
                <Box
                  className={clsx(propClasses?.quantity)}
                  color="text.primary"
                  alignItems="flex-start"
                >
                  {notEditable && `Cantidad: ${quantity}`}
                </Box>
              </Typography>

              <Typography component="div" variant="body1" color="primary">
                <Box
                  className={clsx(propClasses?.currTotalPrice)}
                  alignItems="flex-start"
                  color="inherit"
                >
                  {totalPrice && `Total: ${totalPrice}`}
                </Box>
              </Typography>
            </CardContent>
          </div>
          {badges && (
            <div
              onClick={(e) => e.stopPropagation()}
              className={clsx(classes.badges, propClasses?.badges)}
            >
              {badges.map((badge) => badge)}
            </div>
          )}
        </div>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Box>{ExtraTag}</Box>

        <Box className={classes.rightbuttons}>
          {!notEditable && (
            <>
              <IconButton
                aria-label="sub"
                onClick={onSubClick}
                disabled={disabled}
                className={classes.subbutton}
              >
                <Icon
                  className={disabled ? '' : classes.activeIcon}
                  color={disabled ? 'disabled' : 'inherit'}
                  fontSize="small"
                >
                  remove
                </Icon>
              </IconButton>

              <Typography component="div" variant="subtitle1">
                <Box color="text.primary">{quantity}</Box>
              </Typography>

              <IconButton
                aria-label="add"
                onClick={onAddClick}
                disabled={disabled}
                className={classes.addbutton}
              >
                <Icon
                  className={disabled ? '' : classes.activeIcon}
                  color={disabled ? 'disabled' : 'inherit'}
                  fontSize="small"
                >
                  add
                </Icon>
              </IconButton>

              <IconButton
                className={classes.trashicon}
                aria-label="delete"
                onClick={onTrashClick}
                disabled={disabled}
                size="small"
              >
                <DeleteIcon
                  fontSize="small"
                  className={disabled ? '' : classes.activeIcon}
                  color={disabled ? 'disabled' : 'inherit'}
                />
              </IconButton>
            </>
          )}
        </Box>
      </CardActions>
    </Card>
  );
}
