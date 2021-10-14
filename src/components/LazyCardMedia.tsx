/*
 * File: LazyCardMedia.tsx
 * Project: @inventures/react-lib
 * File Created: Tuesday, 5th October 2021 6:27:22 pm
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Thursday, 14th October 2021 3:36:52 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2021 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
import 'regenerator-runtime/runtime.js';

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
    if (typeof window.IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    if (!visible && placeholderRef.current) {
      const observer = new IntersectionObserver(([{ intersectionRatio }]) => {
        if (intersectionRatio > 0) {
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
