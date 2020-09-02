/*
 * File: 2-card.stories.tsx
 * Project: @inventures/react-lib
 * File Created: Tuesday, 4th August 2020 5:47:50 pm
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Wednesday, 2nd September 2020 3:55:59 pm
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import React from 'react';
import ProductCardA from '../components/ProductCardA';
import {ProductCardB, ProductCardCarousel} from '../components';
import { text, boolean, number } from '@storybook/addon-knobs';

export default {
  title: 'Card',
};
export const Base = () => (
  <ProductCardA
    title="Clonazepam · 2 mg"
    urlImage="https://www.laboratoriochile.cl/wp-content//uploads/2015/11/Clonazepam_05MG_30C_BE_HD.jpg"
    description="Clonazepam · 2 mg · 30 comprimidos"
    price={5025}
    buttonText="Agregar"
    isBio={true}
    recipe={true}
    singlePrice={true}
  ></ProductCardA>
);
export const EditableCard = () => {
  const urlImage = text(
    'Image url',
    'https://www.laboratoriochile.cl/wp-content//uploads/2015/11/Clonazepam_05MG_30C_BE_HD.jpg',
  );
  const title = text('Title', 'Clonazepam · 2 mg');
  const description = text('Description', 'Clonazepam · 2 mg · 30 comprimidos');
  const price = number('Price', 5025);
  const buttonText = text('Button text', 'Agregar');
  const isBio = boolean('Bioequivalent', true);
  const recipe = boolean('Recipe', true);
  const singlePrice = boolean('Show single price', true);

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <ProductCardA
        title={title}
        urlImage={urlImage}
        description={description}
        price={price}
        buttonText={buttonText}
        isBio={isBio}
        recipe={recipe}
        singlePrice={singlePrice}
      ></ProductCardA>
    </div>
  );
};

export const EditableCardGrid = () => {
  const urlImage = text(
    'Image url',
    'https://www.laboratoriochile.cl/wp-content//uploads/2015/11/Clonazepam_05MG_30C_BE_HD.jpg',
  );
  const title = text('Title', 'Clonazepam · 2 mg');
  const description = text('Description', 'Clonazepam · 2 mg · 30 comprimidos');
  const price = number('Price', 5025);
  const buttonText = text('Button text', 'Agregar');
  const isBio = boolean('Bioequivalent', true);
  const recipe = boolean('Recipe', true);
  const singlePrice = boolean('Show single price', true);

  const columns = number('Columns', 3);
  const rows = number('Rows', 3);

  const total = Array.from(Array(columns * rows).keys());
  console.log(total);
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gap: '40px 10px',
      }}
    >
      {total.map((_, i) => (
        <ProductCardA
          key={i}
          title={title}
          urlImage={urlImage}
          description={description}
          price={price}
          buttonText={buttonText}
          isBio={isBio}
          recipe={recipe}
          singlePrice={singlePrice}
        ></ProductCardA>
      ))}
    </div>
  );
};

export const EditableCardB = () => {
  return (
    <ProductCardB
      imageUrl={
        'https://www.cruzverde.cl/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Chile/default/dw0ebcdb64/images/large/296432-okrafit-120-capsulas.jpg?sw=1000&sh=1000'
      }
      title={'Glafornil'}
      subtitle={'Metformina Clorhidrato Clorhidrato'}
      details={'30 comprimidos recubiertos'}
      description={'500 mg'}
      price={15990}
      tag={'Receta retenida'}
      onClickCard={ () => console.log('You clicked B1!') }
    />
  );
};

export const ProductCarousel = () => {
  return (
    <ProductCardCarousel
      title={'Más vendidos'}
      onClickCarousel={ () => console.log('Want to know more about the carousel products?') }
      cardList={[{
        imageUrl:
        'https://www.cruzverde.cl/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Chile/default/dw0ebcdb64/images/large/296432-okrafit-120-capsulas.jpg?sw=1000&sh=1000',
        title:'Glafornil',
        subtitle: 'Metformina Clorhidrato Clorhidrato',
        details: '30 comprimidos recubiertos',
        description: '500 mg',
        price: 15990,
        tag: 'Receta retenida',
        onClickCard: () => console.log('You clicked B1!'),
      },
      {
        imageUrl:
        'https://www.cruzverde.cl/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Chile/default/dw0ebcdb64/images/large/296432-okrafit-120-capsulas.jpg?sw=1000&sh=1000',
        title:'Glafornil',
        subtitle: 'Metformina Clorhidrato Clorhidrato',
        details: '30 comprimidos recubiertos',
        description: '500 mg',
        price: 15990,
        //tag: 'Receta retenida',
        onClickCard: () => console.log('You clicked B2!'),
      },
      {
        imageUrl:
        'https://www.cruzverde.cl/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Chile/default/dw0ebcdb64/images/large/296432-okrafit-120-capsulas.jpg?sw=1000&sh=1000',
        title:'Glafornil',
        subtitle: 'Metformina Clorhidrato Clorhidrato',
        details: '30 comprimidos recubiertos',
        description: '500 mg',
        price: 15990,
        tag: 'Receta retenida',
        onClickCard: () => console.log('You clicked B3!'),
      },
      ]}
    />
  );
};

Base.story = {
  name: 'Base element',
};
