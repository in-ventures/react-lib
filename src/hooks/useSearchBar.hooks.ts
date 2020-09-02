/*
 * File: useSearchBar.hooks.ts
 * Project: @inventures/react-lib
 * File Created: Tuesday, 1st September 2020 9:46:25 am
 * Author: Luis Aparicio (luis@inventures.cl)
 * -----
 * Last Modified: Wednesday, 2nd September 2020 11:37:59 am
 * Modified By: Luis Aparicio (luis@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { useState, useCallback, useRef } from 'react';
import debounce from 'lodash/debounce';
import Fuse from 'fuse.js';

type useSearchBarOptions = {
  isCaseSensitive?: boolean;
  keys?: string[];
  debounceTime?: number;
};

export const useSearchBar = (
  defaultValue: string,
  query: Record<string, unknown>[] | ((data: string) => Promise<string[]>),
  options: useSearchBarOptions = {},
): [string, (value: string) => void, string[]] => {
  const [searchValue, setSearchValue] = useState<string>(defaultValue);
  const [searchResult, setSearchResult] = useState<string[]>([]);
  const valueRef = useRef<string>(searchValue);
  const [typing, setTyping] = useState<boolean>(false);

  const search = useCallback(
    async (newValue: string) => {
      if (newValue.length < 3) {
        return setSearchResult([]);
      }
      if (Array.isArray(query)) {
        const fuse = new Fuse(query, options);

        const result = fuse.search(newValue);

        return setSearchResult(result);
      }
      const data = await query(newValue);
      return data;
    },
    [options, query],
  );

  const stopTyping = useCallback(
    debounce(
      (newValue: string) => {
        valueRef.current = newValue;
        setTyping(false);
        search(newValue);
      },
      options.debounceTime ? options.debounceTime : 1600,
    ),
    [options.debounceTime, setTyping],
  );

  const handleSetSearchValue = useCallback(
    async (data: string) => {
      const newValue = data;
      setSearchValue(newValue);
      setTyping(true);
      stopTyping(newValue);
    },
    [stopTyping],
  );

  return [searchValue, handleSetSearchValue, searchResult];
};
