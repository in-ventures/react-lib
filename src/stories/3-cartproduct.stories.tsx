import React, {useState, useCallback} from 'react';
import CartProduct from '../components/CartProduct';
import { text, number } from '@storybook/addon-knobs';


export default {
    title: 'Cart',
};

export const EditableCartProduct = () => {

    const urlImage = text(
    'Image url',
    'https://www.laboratoriochile.cl/wp-content//uploads/2015/11/Clonazepam_05MG_30C_BE_HD.jpg',
    );
    const title1 = text('Title', 'Nombre comercial');
    const title2 = text('Title 2', '100 mcg');
    const title3 = text('Title 3', '50 comprimidos');
    const title4 = text('Title 4', 'Volverás a necesitar el 05/08/20');
    const unitPrice = number('Unit price', 10);

    let [quantity, setQuantity] = useState(1);
    let [totalPrice, setTotalPrice] = useState(quantity*unitPrice);

    const addQuantity = useCallback(
        () => {
            setQuantity(quantity+1); 
            setTotalPrice((quantity+1)*unitPrice);
        },
        [quantity],
    );
    
    const subQuantity = useCallback(
        () => {
            if( quantity > 1) {
                setQuantity(quantity-1);
                setTotalPrice((quantity-1)*unitPrice);
            }
        },
        [quantity],
    );

    

    /*const addQuantity = () => { 
        setQuantity(quantity+1); 
        setTotalPrice((quantity+1)*unitPrice);
    }

    const subQuantity = () => {
        if( quantity > 1) {
            setQuantity(quantity-1);
            setTotalPrice((quantity-1)*unitPrice);
        }    
    }*/

    return(
        <CartProduct
        urlImage={urlImage}
        title1={title1}
        title2={title2}
        title3={title3}
        title4={title4}
        quantity={quantity}
        unitPrice={unitPrice}
        totalPrice={totalPrice}
        onDefaultClick={() =>{alert("Ha presionado evento por defecto")}}
        onAddClick={addQuantity}
        onSubClick={subQuantity}
        onTrashClick={() =>{alert("Ha presionado enviar a la papelera")}}
        onDetailsClick={() =>{alert("Ha presionado enviar ver detalles")}}
        ></CartProduct>
    );
}


