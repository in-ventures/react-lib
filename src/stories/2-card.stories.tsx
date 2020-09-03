/*
 * File: 2-card.stories.tsx
 * Project: @inventures/react-lib
 * File Created: Tuesday, 4th August 2020 5:47:50 pm
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Thursday, 3rd September 2020 5:08:41 pm
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import React from 'react';
import { ProductCard, ProductCardCarousel } from '../components';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';

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

export const EditableCardB = () => {
  return (
    <ProductCard
      imageUrl={
        'https://www.cruzverde.cl/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Chile/default/dw0ebcdb64/images/large/296432-okrafit-120-capsulas.jpg?sw=1000&sh=1000'
      }
      title={'Glafornil'}
      subtitle={'Metformina Clorhidrato Clorhidrato'}
      details={'30 comprimidos recubiertos'}
      description={'500 mg'}
      price={15990}
      tagText={'Receta retenida'}
      tagIcon={<InsertDriveFileOutlinedIcon />}
      onClickCard={() => console.log('You clicked B1!')}
    />
  );
};

export const ProductCarousel = () => {
  return (
    <ProductCardCarousel
      title={'Más vendidos'}
      onClickCarousel={() =>
        console.log('Want to know more about the carousel products?')
      }
      cardList={[
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
          //tag: 'Receta retenida',
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
    />
  );
};

Base.story = {
  name: 'Base element',
};
