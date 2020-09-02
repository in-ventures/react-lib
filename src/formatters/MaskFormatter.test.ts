/*
 * File: MaskFormatter.test.ts
 * Project: @inventures/react-lib
 * File Created: Tuesday, 1st September 2020 4:52:23 pm
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Wednesday, 2nd September 2020 10:55:34 am
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { MaskFormatter } from './MaskFormatter';

describe('Mask formatter', () => {
  describe('string mask', () => {
    test('Format with length mask', () => {
      const formatter = new MaskFormatter('***');
      expect(formatter.format('1')).toBe('1');
      expect(formatter.format('12')).toBe('12');
      expect(formatter.format('123')).toBe('123');
      expect(formatter.format('1234')).toBe('123');
      expect(formatter.format('12345')).toBe('123');
    });
    test('Format with predefined characters', () => {
      const formatter = new MaskFormatter('***...***');
      expect(formatter.format('123')).toBe('123');
      expect(formatter.format('1234')).toBe('123...4');
      expect(formatter.format('12345')).toBe('123...45');
    });
    test('Format input with predefined characters', () => {
      const formatter = new MaskFormatter('***...***');
      expect(formatter.format('123.')).toBe('123.');
      expect(formatter.format('123.45')).toBe('123...45');
      expect(formatter.format('1234.5')).toBe('123...4.5');
    });
    test('Format with alphabetic mask', () => {
      const formatter = new MaskFormatter('AA');
      expect(formatter.format('a1')).toBe('a');
      expect(formatter.format('ab1')).toBe('ab');
      expect(formatter.format('1a')).toBe('a');
      expect(formatter.format('12a')).toBe('a');
    });

    test('Format with numeric mask', () => {
      const formatter = new MaskFormatter('99');
      expect(formatter.format('a1')).toBe('1');
      expect(formatter.format('ab1')).toBe('1');
      expect(formatter.format('1a')).toBe('1');
      expect(formatter.format('12a')).toBe('12');
    });
  });
  describe('Array mask', () => {
    test('simple format mask', () => {
      const formatter = new MaskFormatter(['*', '*', '*']);
      expect(formatter.format('1')).toBe('1');
      expect(formatter.format('12')).toBe('12');
      expect(formatter.format('123')).toBe('123');
      expect(formatter.format('1234')).toBe('123');
      expect(formatter.format('12345')).toBe('123');
    });

    test('Format with predefined characters', () => {
      const formatter = new MaskFormatter([
        '*',
        '*',
        '*',
        '.',
        '.',
        '.',
        '*',
        '*',
        '*',
      ]);
      expect(formatter.format('123')).toBe('123');
      expect(formatter.format('1234')).toBe('123...4');
      expect(formatter.format('12345')).toBe('123...45');
      expect(formatter.format('123.')).toBe('123.');
      expect(formatter.format('123.45')).toBe('123...45');
      expect(formatter.format('1234.5')).toBe('123...4.5');
    });
  });
  test('Format with alphabetic mask', () => {
    const formatter = new MaskFormatter(['A', 'A']);
    expect(formatter.format('a1')).toBe('a');
    expect(formatter.format('ab1')).toBe('ab');
    expect(formatter.format('1a')).toBe('a');
    expect(formatter.format('12a')).toBe('a');
  });

  test('Format with numeric mask', () => {
    const formatter = new MaskFormatter(['9', '9']);
    expect(formatter.format('a1')).toBe('1');
    expect(formatter.format('ab1')).toBe('1');
    expect(formatter.format('1a')).toBe('1');
    expect(formatter.format('12a')).toBe('12');
  });

  test('Format with regex', () => {
    const formatter = new MaskFormatter([
      'A',
      'A',
      /[A-Z0-9]/,
      /[A-Z0-9]/,
      '9',
      '9',
    ]);
    expect(formatter.format('AZ6061')).toBe('AZ6061');
    expect(formatter.format('AZ60')).toBe('AZ60');
    expect(formatter.format('AZ60612')).toBe('AZ6061');
    expect(formatter.format('AZ60G')).toBe('AZ60');
    expect(formatter.format('AZ60G1')).toBe('AZ601');
  });
  test('Format with regex and default chars', () => {
    const formatter = new MaskFormatter([
      'A',
      'A',
      '·',
      /[A-Z0-9]/,
      /[A-Z0-9]/,
      '·',
      '9',
      '9',
    ]);
    expect(formatter.format('AZ6061')).toBe('AZ·60·61');
    expect(formatter.format('AZ60')).toBe('AZ·60');
    expect(formatter.format('AZ60612')).toBe('AZ·60·61');
    expect(formatter.format('AZ60G')).toBe('AZ·60·');
    expect(formatter.format('AZ60G1')).toBe('AZ·60·1');
  });
});
