/*
 * File: 2-card.stories.tsx
 * Project: @inventures/react-lib
 * File Created: Tuesday, 4th August 2020 5:47:50 pm
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Monday, 9th November 2020 6:31:25 pm
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import React from 'react';
import {
  ProductCard,
  ProductList,
  ProductListHeader,
  ProductDetails,
} from '../components';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';

import { text, number } from '@storybook/addon-knobs';

export default {
  title: 'Card',
};
export const Base = () => (
  <ProductCard
    title="Clonazepam · 2 mg"
    subtitle="subtitle"
    imageUrl="https://www.laboratoriochile.cl/wp-content//uploads/2015/11/Clonazepam_05MG_30C_BE_HD.jpg"
    description="Clonazepam · 2 mg · 30 comprimidos"
    price={5025}
    onClickCard={() => console.log('You clicked the card!!')}
  />
);

export const EditableCard = () => {
  const imageUrl =
    'https://www.cruzverde.cl/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Chile/default/dw0ebcdb64/images/large/296432-okrafit-120-capsulas.jpg?sw=1000&sh=1000';
  const title = text('Title', 'Nombre comercial');
  const subtitle = text('SubTitle', 'Metformina Clorhidrato Clorhidrato');
  const description = text('description', '500 mg');
  const details = text('details', '30 comprimidos recubiertos');
  const price = number('price', 10990);
  const tagText = text('tagText', 'Rec. Retenida');

  return (
    <ProductCard
      imageUrl={imageUrl}
      title={title}
      subtitle={subtitle}
      details={details}
      description={description}
      price={price}
      tagText={tagText}
      tagIcon={<InsertDriveFileOutlinedIcon />}
      onClickCard={() => console.log('You clicked B1!')}
    />
  );
};

export const ProductCarousel = () => {
  return (
    <>
      <ProductListHeader
        title={'Más vendidos'}
        onClickCarousel={() =>
          window.alert('Want to know more about the carousel products?')
        }
      />

      <ProductList
        products={[
          {
            imageUrl:
              'https://static.emol.cl/emol50/Fotos/2015/08/13/file_20150813131739.jpg',
            title: 'Glafornillafornillafornillafornillafornillafornil',
            subtitle: 'Metformina Clorhidrato Clorhidrato',
            price: 15990,
            tagText: 'Receta retenida',
            tagIcon: <InsertDriveFileOutlinedIcon />,
            badgeContent: 4,
            onClickCard: () => console.log('You clicked B1!'),
          },
          {
            imageUrl:
              'https://www.cruzverde.cl/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Chile/default/dw0ebcdb64/images/large/296432-okrafit-120-capsulas.jpg?sw=1000&sh=1000',
            title: 'Glafornil',
            subtitle: 'Metformina Clorhidrato Clorhidrato',
            details: '30 comprimidos recubiertos',
            description: '500 mg',
            price: 15990,
            badgeContent: 5,
            onClickCard: () => console.log('You clicked B2!'),
          },
          {
            imageUrl:
              'https://www.cruzverde.cl/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Chile/default/dw0ebcdb64/images/large/296432-okrafit-120-capsulas.jpg?sw=1000&sh=1000',
            title: 'Glafornil',
            description: '500 mg',
            price: 15990,
            tagText: 'Receta retenida',
            tagIcon: <InsertDriveFileOutlinedIcon />,
            onClickCard: () => console.log('You clicked B3!'),
          },

          {
            imageUrl:
              'https://www.cruzverde.cl/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Chile/default/dw0ebcdb64/images/large/296432-okrafit-120-capsulas.jpg?sw=1000&sh=1000',
            title: 'Glafornil',
            subtitle: 'Metformina Clorhidrato Clorhidrato',
            details: '30 comprimidos recubiertos',
            description: '500 mg',
            price: 15990,
            badgeContent: 10,
            onClickCard: () => console.log('You clicked B2!'),
          },
          {
            imageUrl:
              'https://www.cruzverde.cl/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Chile/default/dw0ebcdb64/images/large/296432-okrafit-120-capsulas.jpg?sw=1000&sh=1000',
            title: 'Glafornil',
            subtitle: 'Metformina Clorhidrato Clorhidrato',
            details: '30 comprimidos recubiertos',
            description: '500 mg',
            price: 15990,
            tagText: 'Receta retenida',
            tagIcon: <InsertDriveFileOutlinedIcon />,
            onClickCard: () => console.log('You clicked B3!'),
          },

          {
            imageUrl:
              'https://www.cruzverde.cl/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Chile/default/dw0ebcdb64/images/large/296432-okrafit-120-capsulas.jpg?sw=1000&sh=1000',
            title: 'Glafornil',
            subtitle: 'Metformina Clorhidrato Clorhidrato',
            details: '30 comprimidos recubiertos',
            description: '500 mg',
            price: 15990,
            onClickCard: () => console.log('You clicked B2!'),
          },
          {
            imageUrl:
              'https://www.cruzverde.cl/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Chile/default/dw0ebcdb64/images/large/296432-okrafit-120-capsulas.jpg?sw=1000&sh=1000',
            title: 'Glafornil',
            subtitle: 'Metformina Clorhidrato Clorhidrato',
            details: '30 comprimidos recubiertos',
            description: '500 mg',
            price: 15990,
            tagText: 'Receta retenida',
            tagIcon: <InsertDriveFileOutlinedIcon />,
            onClickCard: () => console.log('You clicked B3!'),
          },
        ]}
        gridBreakpoints={{ xs: 6, sm: 4, md: 3, lg: 2, xl: 1 }}
      />
    </>
  );
};

export const ProductDetailsCard = () => {
  const image = text(
    'ImageUrl',
    'https://compra.ligaepilepsia.cl/wp-content/uploads/2020/01/00234-300x300.jpg',
  );
  return (
    <>
      <ProductDetails
        imageUrl={image}
        title="Sertac"
        subtitle="Sertralina • 100mg"
        description="30 comprimidos • Andrómaco"
        price={15813}
        tagText={'Receta simple'}
        tagIcon={<InsertDriveFileOutlinedIcon />}
        pricePerUnit="$527 /comprimido"
      />
    </>
  );
};

Base.story = {
  name: 'Base element',
};
