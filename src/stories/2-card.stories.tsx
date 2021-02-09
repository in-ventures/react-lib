/*
 * File: 2-card.stories.tsx
 * Project: @inventures/react-lib
 * File Created: Tuesday, 4th August 2020 5:47:50 pm
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Tuesday, 9th February 2021 11:21:48 am
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
import { Skeleton } from '@material-ui/lab';
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
        loading={false}
        products={[
          {
            imageUrl:
              'https://www.cruzverde.cl/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Chile/default/dw0ebcdb64/images/large/296432-okrafit-120-capsulas.jpg?sw=1000&sh=1000',
            title: 'Glafornillafornillafornillafornillafornillafornil',
            subtitle: 'Metformina Clorhidrato Clorhidrato',
            price: 15990,
            tagText: 'Receta retenida',
            tagIcon: <InsertDriveFileOutlinedIcon />,
            badgeContent: 5,
            badgeColor: 'red',
            badgeTextColor: '#FFFFFF',
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
            badgeColor: 'red',
            badgeTextColor: '#FFFFFF',
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
            badgeContent: 5,
            badgeColor: 'red',
            badgeTextColor: '#FFFFFF',
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
            badgeContent: 10,
            badgeColor: 'blue',
            badgeTextColor: 'white',
            onClickCard: () => console.log('You clicked B3!'),
          },
        ]}
        gridBreakpoints={{ xs: 6, sm: 4, md: 3, lg: 2, xl: 1 }}
      />
    </>
  );
};

export const ProductCarouselSkeleton = () => {
  return (
    <>
      <Skeleton variant="text" width={170} height={35} />

      <ProductList
        loading={true}
        products={[
          {
            imageUrl:
              'https://www.cruzverde.cl/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Chile/default/dw0ebcdb64/images/large/296432-okrafit-120-capsulas.jpg?sw=1000&sh=1000',
            title: 'Glafornillafornillafornillafornillafornillafornil',
            subtitle: 'Metformina Clorhidrato Clorhidrato',
            price: 15990,
            tagText: 'Receta retenida',
            tagIcon: <InsertDriveFileOutlinedIcon />,
            badgeContent: 5,
            badgeColor: 'red',
            badgeTextColor: '#FFFFFF',
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
            badgeColor: 'red',
            badgeTextColor: '#FFFFFF',
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
            badgeContent: 5,
            badgeColor: 'red',
            badgeTextColor: '#FFFFFF',
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
            badgeContent: 10,
            badgeColor: 'blue',
            badgeTextColor: 'white',
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
  const text1 = text('Primer texto', 'Sertac');
  const text2 = text('Segundo texto', 'Sertralina • 100mg');
  const text3 = text('Tercero texto', '30 comprimidos • Andrómaco');

  return (
    <>
      <ProductDetails
        imageUrl={image}
        title={text1}
        subtitle={text2}
        description={text3}
        price={15813}
        tagText={'Receta simple'}
        tagIcon={<InsertDriveFileOutlinedIcon />}
        onClickImage={() =>
          console.log('You clicked the product details image!')
        }
        pricePerUnit="$527 /comprimido"
      />
    </>
  );
};

Base.story = {
  name: 'Base element',
};
