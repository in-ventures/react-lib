/*
 * File: useInputnput.hooks.ts
 * Project:  @inventures/react-lib
 * File Created: Wednesday, 8th July 2020 11:51:01 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Tuesday, 18th August 2020 2:31:57 pm
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
   * useInput class. Validates and formats user input via a
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
     /**
     * validate method. callback function. Runs all validators given in
     * useInput parameters to find user input errors. Synchronous validators 
     * run first, followed by all asynchronous, if present. In case of erros, 
     * they change the hook's state and display them accordingly.
     *
     *
     * @param newValue- input to be validated
     * @returns No return
     * 
     * @beta
     */
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
    /**
     * stopTyping method. callback function, called each time user inputs
     * a new character. It runs the set debounce time, followed by validate 
     * function to run all validators.
     *
     *
     * @param newValue- input to be validated
     * @returns No return
     * 
     * @beta
     */
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
    /**
     * callback function, runs the input value through the formatter. 
     * This new value is then set as SetValue.
     *
     *
     * @param data- input to be formatted, then validated, then set.
     * @returns No return
     * 
     * @beta
     */
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
    /**
     * useMemo function. Is in charge of setting the hook state, 
     * according to:
     *  - if user is typing, state will be PENDING.
     *  - if there pending asynchronous validations, state will be PENDING.
     *  - if all synchronous and asynchronous validations have finished running, 
     *    hook state will be ERROR in case of validation errors, or 
     *    SUCCESS otherwise.
     *
     *
     * @param data- input to be validated
     * @returns newStatus
     * 
     * @beta
     */
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
    /**
     * callback function, stops the debounce wait time and runs 
     * actions according to specific conditions.
     *
     * @returns no return
     * 
     * @beta
     */
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
