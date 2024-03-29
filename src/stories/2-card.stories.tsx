/*
 * File: 2-card.stories.tsx
 * Project: @inventures/react-lib
 * File Created: Tuesday, 4th August 2020 5:47:50 pm
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Monday, 17th January 2022 4:10:22 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import React from 'react';
import { ProductDetails } from '../components/ProductDetails';
import { ProductCard } from '../components/ProductCard';
import { ProductList } from '../components/ProductList';
import { ProductListHeader } from '../components/ProductListHeader';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import LocalPharmacyRoundedIcon from '@material-ui/icons/LocalPharmacyRounded';
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import { Skeleton } from '@material-ui/lab';
import { text, number } from '@storybook/addon-knobs';
import { createStyles, makeStyles, Typography, Chip } from '@material-ui/core';
import { ProductCardSkeleton } from '../components/ProductCardSkeleton';

export default {
  title: 'Card',
};
export const Base = () => (
  <ProductCard
    title="Clonazepam · 2 mg"
    subtitle="subtitle"
    imageUrl="https://www.laboratoriochile.cl/wp-content//uploads/2015/11/Clonazepam_05MG_30C_BE_HD.jpg"
    description="Clonazepam · 2 mg · 30 comprimidos"
    price={'$5.025'}
    onClickCard={() => console.log('You clicked the card!!')}
  />
);

export const BaseSkeleton = () => <ProductCardSkeleton />;

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
      price={String(price)}
      tagText={tagText}
      tagIcon={<InsertDriveFileOutlinedIcon />}
      onClickCard={() => console.log('You clicked B1!')}
    />
  );
};

export const ProductCarouselNoWrap = () => {
  return (
    <>
      <ProductListHeader
        title={'Más vendidos'}
        CarouselActionComponent={
          <div
            onClick={() =>
              window.alert('Want to know more about the carousel products?')
            }
          >
            Click me!
          </div>
        }
      />

      <ProductList
        loading={false}
        showNavigationButtons
        products={[
          {
            imageUrl:
              'https://www.cruzverde.cl/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Chile/default/dw0ebcdb64/images/large/296432-okrafit-120-capsulas.jpg?sw=1000&sh=1000',
            title: 'Glafornillafornillafornillafornillafornillafornil',
            subtitle: 'Metformina Clorhidrato Clorhidrato',
            price: '15990',
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
            price: '15990',
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
            price: '15990',
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
            price: '15990',
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
            price: '15990',
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
            price: '15990',
            onClickCard: () => console.log('You clicked B2!'),
          },
          {
            imageUrl:
              'https://www.cruzverde.cl/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Chile/default/dw0ebcdb64/images/large/296432-okrafit-120-capsulas.jpg?sw=1000&sh=1000',
            title: 'Glafornil',
            subtitle: 'Metformina Clorhidrato Clorhidrato',
            details: '30 comprimidos recubiertos',
            description: '500 mg',
            price: '15990',
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

const usePharmaBadgeStyles = makeStyles({
  pharmaBadge: {
    backgroundColor: '#2196f3',
    borderRadius: '20px',
    height: '20px',
    width: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    color: '#FFFFFF',
    padding: '2px',
  },
  icon: {
    height: '16px',
    width: '16px',
  },
  unavailable: {
    backgroundColor: 'red',
    borderRadius: '20px',
    height: '20px',
    width: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    padding: '2px',
  },
  warning: {
    backgroundColor: '#ff9800',
    borderRadius: '20px',
    height: '20px',
    width: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    padding: '2px',
  },
});
function PharmaBadge() {
  const classes = usePharmaBadgeStyles();
  return (
    <div className={classes.pharmaBadge}>
      <LocalPharmacyRoundedIcon className={classes.icon} />
      <Typography>Liga</Typography>
    </div>
  );
}
function UnavailableBadge({ warn }: { warn?: boolean }) {
  const classes = usePharmaBadgeStyles();
  return (
    <div className={warn ? classes.warning : classes.unavailable}>
      <WarningRoundedIcon className={classes.icon} />
    </div>
  );
}

export const ProductCarousel = () => {
  const classes = useStyles();
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
        wrap
        products={[
          {
            imageUrl:
              'https://www.cruzverde.cl/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Chile/default/dw0ebcdb64/images/large/296432-okrafit-120-capsulas.jpg?sw=1000&sh=1000',
            title: 'Glafornil',
            subtitle: 'Metformina Clorhidrato Clorhidrato',
            price: '15990',
            // tagText: 'Receta retenida',
            // tagIcon: <InsertDriveFileOutlinedIcon />,
            badgeContent: 5,
            badgeColor: 'red',
            badgeTextColor: '#FFFFFF',
            leftBadge: <PharmaBadge />,
            onClickCard: () => console.log('You clicked B1!'),
            classes: {
              badge: classes.badge,
              tag: classes.tag,
              disabledTag: classes.disabledTag,
              subtitle: classes.subtitle,
            },
          },
          {
            imageUrl:
              'https://www.cruzverde.cl/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Chile/default/dw0ebcdb64/images/large/296432-okrafit-120-capsulas.jpg?sw=1000&sh=1000',
            title: 'Glafornil',
            subtitle: 'Metformina Clorhidrato Clorhidrato',
            details: '30 comprimidos recubiertos',
            description: '500 mg',
            price: '15990',
            badgeContent: 5,
            badgeColor: 'red',
            badgeTextColor: '#FFFFFF',
            leftBadge: <UnavailableBadge />,
            onClickCard: () => console.log('You clicked B2!'),
          },
          {
            imageUrl:
              'https://www.cruzverde.cl/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Chile/default/dw0ebcdb64/images/large/296432-okrafit-120-capsulas.jpg?sw=1000&sh=1000',
            title: 'Glafornil',
            description: '500 mg',
            price: '15990',
            tagText: 'Receta retenida',
            tagIcon: <InsertDriveFileOutlinedIcon />,
            leftBadge: <UnavailableBadge warn />,
            onClickCard: () => console.log('You clicked B3!'),
          },

          {
            imageUrl:
              'https://www.cruzverde.cl/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Chile/default/dw0ebcdb64/images/large/296432-okrafit-120-capsulas.jpg?sw=1000&sh=1000',
            title: 'Glafornil',
            subtitle: 'Metformina Clorhidrato Clorhidrato',
            details: '30 comprimidos recubiertos',
            description: '500 mg',
            price: '15990',
            badgeContent: 5,
            badgeColor: 'red',
            badgeTextColor: '#FFFFFF',
            onClickCard: () => console.log('You clicked B2!'),
          },
          {
            imageUrl:
              'https://www.cruzverde.cl/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Chile/default/dw0ebcdb64/images/large/296432-okrafit-120-capsulas.jpg?sw=1000&sh=1000',
            title: 'Glafornil',
            subtitle:
              'Metformina Clorhidrato Clorhidrato Clorhidrato Clorhidrato Clorhidrato',
            details: '30 comprimidos recubiertos',
            price: '15990',
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
            price: '15990',
            onClickCard: () => console.log('You clicked B2!'),
          },
          {
            imageUrl:
              'https://www.cruzverde.cl/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Chile/default/dw0ebcdb64/images/large/296432-okrafit-120-capsulas.jpg?sw=1000&sh=1000',
            title: 'Glafornil',
            subtitle: 'Metformina Clorhidrato Clorhidrato',
            details: '30 comprimidos recubiertos',
            description: '500 mg',
            price: '15990',
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
export const ProductCarouselRenderItem = () => {
  const classes = useStyles();
  return (
    <>
      <ProductListHeader
        title={'Testing render item'}
        onClickCarousel={() =>
          window.alert('Want to know more about the carousel products?')
        }
      />
      <ProductList
        loading={false}
        wrap
        renderItem={(children, childrenProps) => {
          return (
            <div
              style={{ background: 'red' }}
              onClick={() => console.log('TEST', childrenProps)}
            >
              {children}
            </div>
          );
        }}
        products={[
          {
            imageUrl:
              'https://www.cruzverde.cl/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Chile/default/dw0ebcdb64/images/large/296432-okrafit-120-capsulas.jpg?sw=1000&sh=1000',
            title: 'Glafornil',
            subtitle: 'Metformina Clorhidrato Clorhidrato',
            price: '15990',
            // tagText: 'Receta retenida',
            // tagIcon: <InsertDriveFileOutlinedIcon />,
            badgeContent: 5,
            badgeColor: 'red',
            badgeTextColor: '#FFFFFF',
            leftBadge: <PharmaBadge />,

            classes: {
              badge: classes.badge,
              tag: classes.tag,
              disabledTag: classes.disabledTag,
              subtitle: classes.subtitle,
            },
          },
          {
            imageUrl: 'https://google.com/khe.jpeg',
            fallbackUrl: 'https://mekiapp.com/assets/images/default.svg',
            title: 'Glafornil',
            subtitle: 'Metformina Clorhidrato Clorhidrato',
            details: '30 comprimidos recubiertos',
            description: '500 mg',
            price: '15990',
            badgeContent: 5,
            badgeColor: 'red',
            badgeTextColor: '#FFFFFF',
            leftBadge: <UnavailableBadge />,
          },
          {
            fallbackUrl: 'https://mekiapp.com/assets/images/default.svg',
            title: 'Glafornil',
            description: '500 mg',
            price: '15990',
            tagText: 'Receta retenida',
            tagIcon: <InsertDriveFileOutlinedIcon />,
            leftBadge: <UnavailableBadge warn />,
          },

          {
            imageUrl:
              'https://www.cruzverde.cl/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Chile/default/dw0ebcdb64/images/large/296432-okrafit-120-capsulas.jpg?sw=1000&sh=1000',
            title: 'Glafornil',
            subtitle: 'Metformina Clorhidrato Clorhidrato',
            details: '30 comprimidos recubiertos',
            description: '500 mg',
            price: '15990',
            badgeContent: 5,
            badgeColor: 'red',
            badgeTextColor: '#FFFFFF',
          },
          {
            imageUrl:
              'https://www.cruzverde.cl/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Chile/default/dw0ebcdb64/images/large/296432-okrafit-120-capsulas.jpg?sw=1000&sh=1000',
            title: 'Glafornil',
            subtitle:
              'Metformina Clorhidrato Clorhidrato Clorhidrato Clorhidrato Clorhidrato',
            details: '30 comprimidos recubiertos',
            price: '15990',
            tagText: 'Receta retenida',
            tagIcon: <InsertDriveFileOutlinedIcon />,
          },

          {
            imageUrl:
              'https://www.cruzverde.cl/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Chile/default/dw0ebcdb64/images/large/296432-okrafit-120-capsulas.jpg?sw=1000&sh=1000',
            title: 'Glafornil',
            subtitle: 'Metformina Clorhidrato Clorhidrato',
            details: '30 comprimidos recubiertos',
            description: '500 mg',
            price: '15990',
          },
          {
            imageUrl:
              'https://www.cruzverde.cl/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Chile/default/dw0ebcdb64/images/large/296432-okrafit-120-capsulas.jpg?sw=1000&sh=1000',
            title: 'Glafornil',
            subtitle: 'Metformina Clorhidrato Clorhidrato',
            details: '30 comprimidos recubiertos',
            description: '500 mg',
            price: '15990',
            tagText: 'Receta retenida',
            tagIcon: <InsertDriveFileOutlinedIcon />,
            badgeContent: 10,
            badgeColor: 'blue',
            badgeTextColor: 'white',
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
            price: '15990',
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
            price: '15990',
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
            price: '15990',
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
            price: '15990',
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
            price: '15990',
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
            price: '15990',
            onClickCard: () => console.log('You clicked B2!'),
          },
          {
            imageUrl:
              'https://www.cruzverde.cl/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Chile/default/dw0ebcdb64/images/large/296432-okrafit-120-capsulas.jpg?sw=1000&sh=1000',
            title: 'Glafornil',
            subtitle: 'Metformina Clorhidrato Clorhidrato',
            details: '30 comprimidos recubiertos',
            description: '500 mg',
            price: '15990',
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
  const text3 = text('Tercero texto', '30 comprimidos');

  return (
    <>
      <ProductDetails
        imageUrl={image}
        title={text1}
        subtitle={text2}
        descriptions={[
          text3 ? (
            <Typography
              variant="body2"
              color="textSecondary"
              noWrap
              key={'quantityUnitFormat'}
            >
              {text3}
            </Typography>
          ) : null,
          <Typography
            variant="body2"
            color="textSecondary"
            noWrap
            key={'laboratory'}
          >
            Andrómaco
          </Typography>,
        ]}
        price={'15813'}
        tags={[
          <Chip
            color="primary"
            key="1"
            size="small"
            icon={<InsertDriveFileOutlinedIcon />}
            label={'Receta simple'}
          />,
        ]}
        onClickImage={() =>
          console.log('You clicked the product details image!')
        }
        pricePerUnit="$527 /comprimido"
      />
    </>
  );
};

export const ProductDetailsCardExtraTags = () => {
  const classes = useStyles();
  const image = text(
    'ImageUrl',
    'https://compra.ligaepilepsia.cl/wp-content/uploads/2020/01/00234-300x300.jpg',
  );
  const text1 = text('Primer texto', 'Sertac');
  const text2 = text('Segundo texto', 'Sertralina • 100mg');
  const text3 = text('Tercero texto', '30 comprimidos • Andrómaco');
  const tags = [
    <Chip
      color="primary"
      key="1"
      size="small"
      icon={<InsertDriveFileOutlinedIcon />}
      className={classes.prescriptionTag}
      label={'Receta Cheque'}
    />,
    <Chip
      color="primary"
      key="1"
      size="small"
      icon={<InsertDriveFileOutlinedIcon />}
      className={classes.bioequivalentTag}
      label={'Bioequivalentes'}
    />,
    <Chip
      color="primary"
      key="1"
      size="small"
      icon={<InsertDriveFileOutlinedIcon />}
      className={classes.bioequivalentTag}
      label={'Another'}
    />,
  ];

  return (
    <>
      <ProductDetails
        imageUrl={image}
        title={text1}
        subtitle={text2}
        descriptions={[
          text3 ? (
            <Typography
              variant="body2"
              color="textSecondary"
              noWrap
              key={'quantityUnitFormat'}
            >
              {text3}
            </Typography>
          ) : null,
        ]}
        price={'15813'}
        tags={tags}
        onClickImage={() =>
          console.log('You clicked the product details image!')
        }
        pricePerUnit="$527 /comprimido"
        classes={{ chip: classes.chip }}
      />
    </>
  );
};

Base.story = {
  name: 'Base element',
};

const useStyles = makeStyles(() =>
  createStyles({
    bioequivalentTag: {
      backgroundColor: '#ffe512',
      color: 'red',
      height: 21,
      margin: '2px',
    },
    prescriptionTag: {
      margin: '2px',
      height: 21,
    },
    chip: {
      height: 21,
    },
    badge: {
      backgroundColor: 'green',
    },
    tag: {
      backgroundColor: 'pink',
    },
    disabledTag: {
      backgroundColor: 'yellow',
    },
    subtitle: {
      color: 'red',
    },
  }),
);
