/*
 * File: useInputnput.hooks.ts
 * Project: components-lib
 * File Created: Wednesday, 8th July 2020 11:51:01 am
 * Author: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Last Modified: Monday, 13th July 2020 9:34:19 pm
 * Modified By: Mario Merino (mario@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { Subject, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';

type useInputOptions = {
	formatter?: (input: string) => string;
	debounceTime?: number;
	validators?: ((input: string) => string)[];
};
export const useInput = (
	defaultValue: string,
	initialOptions?: useInputOptions
): [string, (data: string) => void, boolean, string[]] => {
	const [value, setValue] = useState<string>(defaultValue);
	const [errors, setErrors] = useState<string[]>([]);
	const formatSubjectRef = useRef<Subject<string>>(new Subject());
	const validSubjectRef = useRef<Subject<string[]>>(new Subject());
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const options = useMemo(() => initialOptions, []);
	const handleSetValue = useCallback(
		(data: string) => {
			// todo add mask character limits - as optional parameter (applies for phone numbers, rut, not for name, email)
			let shortData = data.slice(0, 12);
			setValue(shortData);
			if (options && options.formatter) {
				formatSubjectRef.current.next(options.formatter(shortData));
			}
			if (options && options.validators && options.validators.length) {
				// todo add regex to validate min and max length and/or syntax
				validSubjectRef.current.next(
					options.validators
						.map((validator) => validator(shortData))
						.filter(Boolean)
				);
			}
		},
		[options]
	);
	useEffect(() => {
		if (options && options.formatter) {
			formatSubjectRef.current.subscribe((newValue) => {
				setValue(newValue);
				// clean errors if user resume typing
				setErrors([]);
			});
		}
		if (options && options.validators && options.validators.length) {
			validSubjectRef.current
				.pipe(debounce(() => timer(options.debounceTime || 1000)))
				.subscribe((newErrors) => setErrors(newErrors));
		}
	}, [options]);
	return [value, handleSetValue, errors.length === 0, errors];
};
