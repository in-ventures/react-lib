/*
 * File: useSearchBar.hooks.ts
 * Project: @inventures/react-lib
 * File Created: Tuesday, 1st September 2020 9:46:25 am
 * Author: Luis Aparicio (luis@inventures.cl)
 * -----
 * Last Modified: Wednesday, 2nd September 2020 12:06:06 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { useState, useCallback, useRef, useEffect } from 'react';
import debounce from 'lodash/debounce';
import Fuse from 'fuse.js';

type useSearchBarOptions = {
  isCaseSensitive?: boolean;
  keys?: string[];
  debounceTime?: number;
};

export const useSearchBar = <T = Record<string, unknown>>(
  defaultValue: string,
  query: T[] | ((data: string) => Promise<string[]>),
  options: useSearchBarOptions = {},
): [string, (value: string) => void, (T | string)[]] => {
  const [searchValue, setSearchValue] = useState<string>(defaultValue);
  const [searchResult, setSearchResult] = useState<(T | string)[]>([]);
  const valueRef = useRef<string>(searchValue);

  const queryRef = useRef<null | T[] | ((data: string) => Promise<string[]>)>();
  useEffect(() => {
    queryRef.current = query;
  }, [query]);
  const search = useCallback(
    async (newValue: string) => {
      if (!queryRef.current) return;
      if (newValue.length < 3) {
        return setSearchResult([]);
      }
      if (Array.isArray(queryRef.current)) {
        const fuse = new Fuse(queryRef.current, options);

        const result = fuse.search(newValue);

        return setSearchResult(result);
      }
      const data = await queryRef.current(newValue);
      setSearchResult(data);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...Object.values(options), setSearchResult],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stopTyping = useCallback(
    debounce(
      (newValue: string) => {
        valueRef.current = newValue;
        search(newValue);
      },
      options.debounceTime ? options.debounceTime : 1600,
    ),
    [options.debounceTime, search],
  );

  const handleSetSearchValue = useCallback(
    async (data: string) => {
      const newValue = data;
      setSearchValue(newValue);
      stopTyping(newValue);
    },
    [stopTyping, setSearchValue],
  );

  return [searchValue, handleSetSearchValue, searchResult];
};
