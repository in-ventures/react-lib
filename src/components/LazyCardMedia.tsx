/*
 * File: LazyCardMedia.tsx
 * Project: @inventures/react-lib
 * File Created: Tuesday, 5th October 2021 6:27:22 pm
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Tuesday, 5th October 2021 6:54:46 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2021 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import React, { useState, useEffect, useRef, ElementType } from 'react';
import { CardMedia, CardMediaProps } from '@material-ui/core';

interface ICardMediaProp extends CardMediaProps {
  component: ElementType<any>;
  image: string;
  alt: string;
  height: number;
}
export function LazyCardMedia({
  image,
  alt,
  height,
  component,
  ...props
}: ICardMediaProp) {
  const [visible, setVisible] = useState<boolean>(false);
  const placeholderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!visible && placeholderRef.current) {
      console.log('[LazyCardMedia] start observer');
      const observer = new IntersectionObserver(([{ intersectionRatio }]) => {
        if (intersectionRatio > 0) {
          console.log('[LazyCardMedia] intersection', {
            intersectionRatio,
            observer,
          });
          setVisible(true);
        }
      });
      observer.observe(placeholderRef.current);
      return () => observer.disconnect();
    }
  }, [visible, placeholderRef]);

  return visible ? (
    <CardMedia
      component={component}
      image={image}
      alt={alt}
      height={height}
      {...props}
    />
  ) : (
    <div
      style={{ height, backgroundColor: '#EEE' }}
      aria-label={alt}
      ref={placeholderRef}
    />
  );
}
