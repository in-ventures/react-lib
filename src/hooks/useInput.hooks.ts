/*
 * File: useInputnput.hooks.ts
 * Project:  @inventures/react-lib
 * File Created: Wednesday, 8th July 2020 11:51:01 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Monday, 17th August 2020 7:48:48 pm
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { useState, useCallback, useMemo } from 'react';
import debounce from 'lodash/debounce';
import { Validator } from './validators';

type Formatter<T = string> = (input: T) => T;

interface AsyncValidator<T = string> {
  validate: (input: T) => Promise<boolean>;
  errorMsg: string;
}
export enum InputStatus {
  SUCCESS = 'sucess',
  ERROR = 'error',
  PENDING = 'pending',
}
type InputErrors = {
  asyncErrors: string[];
  syncErrors: string[];
};

type useInputOptions = {
  formatter?: Formatter;
  debounceTime?: number;
  validators?: Validator[];
  asyncValidators?: AsyncValidator[];
};
export const useInput = (
  defaultValue: string,
  options: useInputOptions = {},
): [string, (data: string) => void, InputStatus, string[], () => void] => {
  /**
   * useInput function class. Validates and formats user input via a
   * given @type Formatter and @type Validator list.
   *
   *
   * @param defaultValue - The user input generic
   * @param options - @type userInputOptions. Can include the formatter
   * function, debounce time, list of synchronous validators and list of
   * asynchronous validators.
   * @returns [value: formatted input value,
   *          handleSetValue: set value callback function,
   *          status: useMemo function. Is in charge of setting the hook state
   *                  and indicates if errors are present,
   *          flushValidate: callback function, stops the debounce wait time]
   *
   * @beta
   */

  const [value, setValue] = useState<string>(defaultValue);
  const [errors, setErrors] = useState<InputErrors>({
    asyncErrors: [],
    syncErrors: [],
  });
  const [typing, setTyping] = useState<boolean>(false);
  const validate = useCallback(
    async (newValue) => {
      if (options.validators) {
        const syncErrors = options.validators.map((validator) =>
          validator.validate(newValue) ? '' : validator.errorMsg,
        );
        setErrors((e) => ({
          ...e,
          syncErrors: syncErrors.filter(Boolean),
        }));
      }
      if (options.asyncValidators) {
        setAsyncValidatorLoading(true);
        const asyncErrors = await Promise.all(
          options.asyncValidators.map(async (validator) =>
            (await validator.validate(newValue)) ? '' : validator.errorMsg,
          ),
        );
        setAsyncValidatorLoading(false);
        setErrors((e) => ({ ...e, asyncErrors: asyncErrors.filter(Boolean) }));
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // eslint-disable-next-line react-hooks/exhaustive-deps
      options.validators && options.validators.length,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      options.asyncValidators && options.asyncValidators.length,
    ],
  );
  // eslint-disable-next-line
  const stopTyping = useCallback(
    debounce(
      (newValue: string) => {
        setTyping(false);
        validate(newValue);
      },
      options.debounceTime ? options.debounceTime : 1600,
    ),
    [options.debounceTime, setTyping, validate],
  );
  const [asyncValidatorLoading, setAsyncValidatorLoading] = useState<boolean>(
    false,
  );
  const handleSetValue = useCallback(
    async (data: string) => {
      const newValue =
        options && options.formatter ? options.formatter(data) : data;
      setValue(newValue);
      setTyping(true);
      stopTyping(newValue);
    },
    [options, stopTyping],
  );

  const status = useMemo(() => {
    let newStatus;
    if (typing || (asyncValidatorLoading && errors.syncErrors.length === 0)) {
      newStatus = InputStatus.PENDING;
    } else if (errors.asyncErrors.length || errors.syncErrors.length) {
      newStatus = InputStatus.ERROR;
    } else {
      newStatus = InputStatus.SUCCESS;
    }
    return newStatus;
  }, [errors.asyncErrors, errors.syncErrors, asyncValidatorLoading, typing]);
  const flushValidate = useCallback(() => {
    stopTyping(value);
    stopTyping.flush();
  }, [stopTyping, value]);
  return [
    value,
    handleSetValue,
    status,
    status !== InputStatus.PENDING
      ? [...errors.syncErrors, ...errors.asyncErrors]
      : [],
    flushValidate,
  ];
};
