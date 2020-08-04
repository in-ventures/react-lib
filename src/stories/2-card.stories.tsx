import React from 'react';
import ProductCardA from '../components/ProductCardA';
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

Base.story = {
  name: 'Base element',
};
