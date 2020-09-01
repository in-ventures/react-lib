import React from 'react';
import CartProduct from '../components/CartProduct';
import { text, number } from '@storybook/addon-knobs';


export default {
    title: 'Cart',
};
export const Base = () => (
    <CartProduct
    urlImage="https://www.laboratoriochile.cl/wp-content//uploads/2015/11/Clonazepam_05MG_30C_BE_HD.jpg"
    title1="Nombre comercial"
    title2="100 mcg"
    title3="50 comprimidos"
    title4=""
    quantity={1}
    unitPrice={10}
    event1={() =>{}}
    addQuantity={() =>{return 1}}
    subQuantity={() =>{return 1}}
    sendToTrash={() =>{}}
    checkDetails={() =>{}}
  ></CartProduct>
);

export const EditableCartProduct = () => {

    const urlImage = text(
    'Image url',
    'https://www.laboratoriochile.cl/wp-content//uploads/2015/11/Clonazepam_05MG_30C_BE_HD.jpg',
    );
    const title1 = text('Title', 'Nombre comercial');
    const title2 = text('Title 2', '100 mcg');
    const title3 = text('Title 3', '50 comprimidos');
    const title4 = text('Title 4', 'Volverás a necesitar el 05/08/20');

    let quantity = number('Quantity', 1);
    let unitPrice = number('Unit price', 10);


    const addQuantity = (quantity: number) => {
        quantity += 1;
        return quantity;
    }

    const subQuantity = (quantity: number) => {

        if( quantity > 1)
        quantity -= 1;
        
        return quantity;
    }

    return(
        <CartProduct
        urlImage={urlImage}
        title1={title1}
        title2={title2}
        title3={title3}
        title4={title4}
        quantity={quantity}
        unitPrice={unitPrice}
        event1={() =>{alert("Ha presionado evento por defecto")}}
        addQuantity={addQuantity}
        subQuantity={subQuantity}
        sendToTrash={() =>{alert("Ha presionado enviar a la papelera")}}
        checkDetails={() =>{alert("Ha presionado revisar detalles")}}
        ></CartProduct>
    );
}


