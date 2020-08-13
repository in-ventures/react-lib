/*
 * File: EmailValidator.test.ts
 * Project: @inventures/react-lib
 * File Created: Thursday, 13th August 2020 11:34:47 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Thursday, 13th August 2020 11:39:53 am
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
import { EmailValidator } from './EmailValidator';

test('should return false on invalid email', () => {
  const emailValidator = new EmailValidator('Invalid email');
  expect(emailValidator.validate('gabrielinventures.cl')).toBeFalsy();
  expect(emailValidator.validate('gabriel@inventurescl')).toBeFalsy();
  expect(emailValidator.validate('gabrielinventurescl')).toBeFalsy();
  expect(emailValidator.validate('')).toBeFalsy();
});

test('should return true on valid email', () => {
  const emailValidator = new EmailValidator('Invalid email');
  expect(emailValidator.validate('gabriel@inventures.cl')).toBeTruthy();
  expect(emailValidator.validate('gabriel+test@inventures.cl')).toBeTruthy();
});
