/*
 * File: useSearchBar.hooks.ts
 * Project: @inventures/react-lib
 * File Created: Tuesday, 1st September 2020 9:46:25 am
 * Author: Luis Aparicio (luis@inventures.cl)
 * -----
 * Last Modified: Tuesday, 1st September 2020 10:51:35 am
 * Modified By: Luis Aparicio (luis@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import { useState, useMemo } from 'react';

import Fuse from 'fuse.js';

export const useSearchBar = (
  defaultValue: string,
  query: [],
  options: {},
): [string, (value: string) => void, string[]] => {
  const [searchValue, setSearchValue] = useState<string>(defaultValue);

  const searchResults = useMemo<string[]>(() => {
    const fuse = new Fuse(query, options);
    return fuse.search(searchValue);
  }, [searchValue]);

  return [searchValue, setSearchValue, searchResults];
};
