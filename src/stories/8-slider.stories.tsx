/*
 * File: 8-slider.stories.tsx
 * Project: @inventures/react-lib
 * File Created: Wednesday, 28th April 2021 6:59:27 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Friday, 8th October 2021 4:17:38 pm
 * Modified By: Luis Aparicio (luis@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import React from 'react';
import { number } from '@storybook/addon-knobs';
import { makeStyles, createStyles } from '@material-ui/core';
import { Slider } from '../components/Slider';

export default {
  title: 'Slider',
};

interface StyleProps {
  height: number;
}

const useBannerStyles = makeStyles(() =>
  createStyles({
    storyRoot: {
      height: (props: StyleProps) => props.height,
      width: '100%',
    },
    item: {
      backgroundColor: '#0177BD',
      height: '100%',
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'center',
      padding: 'auto',
    },
  }),
);

export const BannerSlider = () => {
  const numberOfItems = number('Number of items', 10);
  const divHeight = number('Div Height', 96);

  const classes = useBannerStyles({ height: divHeight });
  const sliderItems = [
    ...Array.from({ length: numberOfItems }, (v, k) => k + 1),
  ].map((num: number) => {
    return (
      <div key={num} className={classes.item}>
        Item {num}
      </div>
    );
  });

  return (
    <div className={classes.storyRoot}>
      <Slider items={sliderItems} cellHeight={divHeight} />
    </div>
  );
};
