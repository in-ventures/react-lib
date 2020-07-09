/*
 * File: useInputnput.hooks.ts
 * Project: components-lib
 * File Created: Wednesday, 8th July 2020 11:51:01 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Thursday, 9th July 2020 12:33:25 am
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { useState, useRef, useEffect } from "react";
import { Subject, timer } from "rxjs";
import { debounce, distinctUntilChanged } from "rxjs/operators";

type useInputOptions = {
  formatter?: (input: string) => string;
  debounceTime?: number;
  validators?: ((input: string) => string)[];
};
export const useInput = (
  defaultValue: string,
  options?: useInputOptions
): [string, (data: string) => void, boolean, string[]] => {
  const [value, setValue] = useState<string>(defaultValue);
  const [errors, setErrors] = useState<string[]>([]);
  const formatSubjectRef = useRef<Subject<string>>(new Subject());
  const validSubjectRef = useRef<Subject<string[]>>(new Subject());
  const handleSetValue = (data: string) => {
    setValue(data);
    if (options?.formatter)
      formatSubjectRef.current.next(options.formatter(data));
    if ((options?.validators?.length ?? 0) > 0) {
      validSubjectRef.current.next(
        options?.validators?.map((validator) => validator(data)).filter(Boolean)
      );
    }
  };
  useEffect(() => {
    if (options?.formatter) {
      formatSubjectRef.current
        .pipe(
          debounce(() => timer(options.debounceTime || 1000)),
          distinctUntilChanged()
        )
        .subscribe((newValue) => {
          setValue(newValue);
        });
    }
    if ((options?.validators?.length ?? 0) > 0) {
      validSubjectRef.current
        .pipe(
          debounce(() => timer(options?.debounceTime || 1000)),
          distinctUntilChanged()
        )
        .subscribe((newErrors) => setErrors(newErrors));
    }
  }, [options]);
  return [value, handleSetValue, errors.length === 0, errors];
};
