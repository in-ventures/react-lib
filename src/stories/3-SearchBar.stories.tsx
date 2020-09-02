/*
 * File: 3-SearchBar.stories.tsx
 * Project: @inventures/react-lib
 * File Created: Tuesday, 1st September 2020 9:46:25 am
 * Author: Luis Aparicio (luis@inventures.cl)
 * -----
 * Last Modified: Wednesday, 2nd September 2020 11:31:03 am
 * Modified By: Luis Aparicio (luis@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import React, { useCallback } from 'react';
import { SearchBar } from '../components/searchBar';
import { useSearchBar } from '../hooks/useSearchBar.hooks';
import { number } from '@storybook/addon-knobs';

export default {
  title: 'SearchBar',
};

const query = [
  {
    item: 'Long Sword',
  },
  {
    item: 'Battle Axe',
  },
  {
    item: 'Short Sword',
  },
  {
    item: 'Short Bow',
  },
  {
    item: 'Long Bow',
  },
  {
    item: 'Long Bow + 1',
  },
  {
    item: 'Staff',
  },
  {
    weapon: 'Staff',
  },
];

const debounceTime = number('Debounce time (ms)', 800);

// To-Do Fix Fuse.js Options
const filterOptions = {
  keys: ['item'],
  debounceTime,
};

export const Base = () => {
  const [searchValue, setSearchValue, searchResults] = useSearchBar(
    '',
    query,
    filterOptions,
  );

  const handleWrite = useCallback(
    (e) => {
      setSearchValue(String(e.target.value));
    },
    [setSearchValue],
  );

  return (
    <div>
      <SearchBar
        value={searchValue}
        onChange={handleWrite}
        label={`Search (${debounceTime}ms)`}
        type={'Text'}
      />
      <ul>
        {searchResults.map((result) => (
          <li key={result}>{result}</li>
        ))}
      </ul>
    </div>
  );
};
