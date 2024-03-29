import React, { useState, useCallback } from 'react';
import CartProduct from '../components/CartProduct';
import { text, number, select } from '@storybook/addon-knobs';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';
import { Chip, createStyles, makeStyles } from '@material-ui/core';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';

export default {
  title: 'Cart',
};

export const EditableCartProduct = () => {
  const classes = useStyles();

  const urlImage = text(
    'Image url',
    'https://www.laboratoriochile.cl/wp-content//uploads/2015/11/Clonazepam_05MG_30C_BE_HD.jpg',
  );
  const title1 = text('Title', 'Nombre comercial');
  const title2 = text('Title 2', '100 mcg');
  const title3 = text('Title 3', '50 comprimidos');
  const title4 = text('Title 4', 'Volverás a necesitar 05/08/20');
  const unitPrice = number('Unit price', 10);

  //const extraColor = text('Color', 'primary');
  const extraColor = select(
    'Color',
    {
      primary: 'primary',
      secondary: 'secondary',
      inherit: 'inherit',
      default: 'default',
    },
    'primary',
  );

  const extraText = text('Text', 'POR VALIDAR');
  const extraIcon = text('Icon', 'add');

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(quantity * unitPrice);

  const addQuantity = useCallback(() => {
    setQuantity(quantity + 1);
    setTotalPrice((quantity + 1) * unitPrice);
  }, [quantity, unitPrice]);

  const subQuantity = useCallback(() => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotalPrice((quantity - 1) * unitPrice);
    }
  }, [quantity, unitPrice]);

  const badges = [
    <Chip
      key="first-badge"
      avatar={<LocalShippingOutlinedIcon />}
      label="Clickable"
      onClick={() => {
        alert('Has precionado el badge');
      }}
      size="small"
    />,
  ];

  return (
    <CartProduct
      classes={{ title1: classes.title1 }}
      urlImage={urlImage}
      title1={title1}
      title2={title2}
      title3={title3}
      title4={title4}
      quantity={quantity}
      unitPrice={String(unitPrice)}
      totalPrice={String(totalPrice)}
      badges={badges}
      ExtraTag={
        <Button
          variant="contained"
          color={extraColor}
          style={{ borderRadius: 4 }}
          startIcon={<Icon>{extraIcon}</Icon>}
        >
          <Typography component="div" style={{ fontSize: 13 }}>
            <Box>{extraText}</Box>
          </Typography>
        </Button>
      }
      onDefaultClick={() => {
        alert('Ha presionado evento por defecto');
      }}
      onAddClick={addQuantity}
      onSubClick={subQuantity}
      onTrashClick={() => {
        alert('Ha presionado enviar a la papelera');
      }}
      onDetailsClick={() => {
        console.log('CLICK DETAILS');
        alert('Ha presionado enviar ver detalles');
      }}
    ></CartProduct>
  );
};

export const NotEditableCartProduct = () => {
  const classes = useStyles();

  const urlImage = text(
    'Image url',
    'https://www.laboratoriochile.cl/wp-content//uploads/2015/11/Clonazepam_05MG_30C_BE_HD.jpg',
  );
  const title1 = text('Title', 'Nombre comercial');
  const title2 = text('Title 2', '100 mcg');
  const title3 = text('Title 3', '50 comprimidos');
  const title4 = text('Title 4', 'Volverás a necesitar 05/08/20');
  const unitPrice = number('Unit price', 10);

  //const extraColor = text('Color', 'primary');
  const extraColor = select(
    'Color',
    {
      primary: 'primary',
      secondary: 'secondary',
      inherit: 'inherit',
      default: 'default',
    },
    'primary',
  );

  const extraText = text('Text', 'POR VALIDAR');
  const extraIcon = text('Icon', 'add');

  const [quantity, setQuantity] = useState(5);
  const [totalPrice, setTotalPrice] = useState(quantity * unitPrice);

  const addQuantity = useCallback(() => {
    setQuantity(quantity + 1);
    setTotalPrice((quantity + 1) * unitPrice);
  }, [quantity, unitPrice]);

  const subQuantity = useCallback(() => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotalPrice((quantity - 1) * unitPrice);
    }
  }, [quantity, unitPrice]);

  return (
    <CartProduct
      classes={{ title1: classes.title1 }}
      urlImage={urlImage}
      title1={title1}
      title2={title2}
      title3={title3}
      title4={title4}
      quantity={quantity}
      unitPrice={String(unitPrice)}
      totalPrice={String(totalPrice)}
      notEditable={true}
      disableCardClick={true}
      ExtraTag={
        <Button
          variant="contained"
          color={extraColor}
          style={{ borderRadius: 4 }}
          startIcon={<Icon>{extraIcon}</Icon>}
        >
          <Typography component="div" style={{ fontSize: 13 }}>
            <Box>{extraText}</Box>
          </Typography>
        </Button>
      }
      onDefaultClick={() => {
        alert('Ha presionado evento por defecto');
      }}
      onAddClick={addQuantity}
      onSubClick={subQuantity}
      onTrashClick={() => {
        alert('Ha presionado enviar a la papelera');
      }}
      onDetailsClick={() => {
        alert('Ha presionado enviar ver detalles');
      }}
    ></CartProduct>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    title1: {
      fontWeight: 500,
    },
  }),
);
