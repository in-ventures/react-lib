/*
 * File: useInputnput.hooks.ts
 * Project:  @inventures/react-lib
 * File Created: Wednesday, 8th July 2020 11:51:01 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Monday, 24th August 2020 2:14:41 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { useState, useCallback, useMemo } from 'react';
import debounce from 'lodash/debounce';
import { Validator } from './validators';

// todo gabo to explain this typescript notation
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
  maxLength?: number;
};
export const useInput = (
  defaultValue: string,
  options: useInputOptions = {},
): [
  string,
  (data: string) => void,
  InputStatus,
  string[],
  () => void,
  (length: number) => void,
] => {
  const [value, setValue] = useState<string>(defaultValue);
  const [errors, setErrors] = useState<InputErrors>({
    asyncErrors: [],
    syncErrors: [],
  });
  const [typing, setTyping] = useState<boolean>(false);

  // Here is to handle the potentially dynamic max length of the inputs - e.g. phone digit amount
  // length must be added to the validate useCallback parameters array
  const [length, setLength] = useState<number | undefined>(options.maxLength);

  const validate = useCallback(
    async (newValue) => {
      if (options.validators) {
        const syncErrors = options.validators.map((validator) =>
          validator.validate(newValue, length) ? '' : validator.errorMsg,
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
    // todo validate if bit now can use elvis operator to avoid this mess
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ...(options.validators ? options.validators.map((v) => v._tag) : []),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      options.asyncValidators && options.asyncValidators.length,
      length,
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

  const updateMaxLength = useCallback(
    (length: number) => setLength(length),
    [],
  );

  // todo - gabo to explain usememo hook
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
    updateMaxLength,
  ];
};
