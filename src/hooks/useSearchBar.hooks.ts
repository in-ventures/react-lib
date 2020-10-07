/*
 * File: useSearchBar.hooks.ts
 * Project: @inventures/react-lib
 * File Created: Tuesday, 1st September 2020 9:46:25 am
 * Author: Luis Aparicio (luis@inventures.cl)
 * -----
 * Last Modified: Wednesday, 7th October 2020 12:10:13 pm
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
import { useDeepCallback } from './useDeepCallback';
import { useDebouncedCallback } from './useDebouncedCallback';

type useSearchBarOptions = {
  isCaseSensitive?: boolean;
  keys?: string[];
  debounceTime?: number;
};

export const useSearchBar = <T = Record<string, unknown>>(
  defaultValue: string,
  query: T[] | ((data: string) => Promise<T[]>),
  options: useSearchBarOptions = {},
): [string, (value: string) => void, T[]] => {
  const [searchValue, setSearchValue] = useState<string>(defaultValue);
  const [searchResult, setSearchResult] = useState<T[]>([]);
  const queryRef = useRef<null | T[] | ((data: string) => Promise<T[]>)>();

  //Setting queryRef values when changes in query
  useEffect(() => {
    queryRef.current = query;
  }, [query]);

  //Handle searching of elements depending of the query type
  const search = useDeepCallback(
    async (newValue: string) => {
      if (!queryRef.current) return;
      if (newValue.length < 3) {
        return setSearchResult([]);
      }
      if (Array.isArray(queryRef.current)) {
        const fuse = new Fuse(queryRef.current, options);

        const result = fuse.search(newValue);

        return setSearchResult(result.map((e) => e.item));
      }
      const data = await queryRef.current(newValue);
      setSearchResult(data);
    },
    [options, setSearchResult],
  );

  //Setting debounce for searching elements
  const stopTyping = useDebouncedCallback(
    (newValue: string) => {
      search(newValue);
    },
    options.debounceTime ? options.debounceTime : 800,
    [options.debounceTime, search],
  );

  //Updating stopTyping when searching values change
  const handleSetSearchValue = useCallback(
    (data: string) => {
      const newValue = data;
      setSearchValue(newValue);
      stopTyping(newValue);
    },
    [stopTyping, setSearchValue],
  );

  return [searchValue, handleSetSearchValue, searchResult];
};
