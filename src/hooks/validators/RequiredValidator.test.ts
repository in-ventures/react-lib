/*
 * File: RequiredValidator.test.ts
 * Project: @inventures/react-lib
 * File Created: Thursday, 13th August 2020 11:40:14 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Thursday, 13th August 2020 11:42:31 am
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
import { RequiredValidator } from './RequiredValidator';

test('should return false on non presence', () => {
  const requiredValidator = new RequiredValidator('Missing data');
  expect(requiredValidator.validate('')).toBeFalsy();
});

test('should return true on presence', () => {
  const requiredValidator = new RequiredValidator('Missing data');
  expect(requiredValidator.validate('This is a text')).toBeTruthy();
  expect(requiredValidator.validate('5')).toBeTruthy();
  expect(requiredValidator.validate('0')).toBeTruthy();
  expect(requiredValidator.validate('null')).toBeTruthy();
  expect(requiredValidator.validate('undefined')).toBeTruthy();
});
