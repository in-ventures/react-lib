/*
 * File: 3-SearchBar.stories.tsx
 * Project: @inventures/react-lib
 * File Created: Tuesday, 1st September 2020 9:46:25 am
 * Author: Luis Aparicio (luis@inventures.cl)
 * -----
 * Last Modified: Thursday, 3rd September 2020 3:52:26 pm
 * Modified By: Luis Aparicio (luis@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import React, { useCallback, useState } from 'react';
import { SearchBar, SearchBox } from '../components/searchBar';
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
    item: 'Text is too loooooooooooooooooooooooooooooong',
  },
];

const debounceTime = number('Debounce time (ms)', 800);

// To-Do Fix Fuse.js Options
const filterOptions = {
  keys: ['item'],
  debounceTime,
};

export const Base = () => {
  const [searchValue, setSearchValue] = useState<string>();

  const handleWrite = useCallback(
    (e) => {
      setSearchValue(String(e.target.value));
    },
    [setSearchValue],
  );

  return (
    <div>
      <SearchBar value={searchValue} onChange={handleWrite} size="small" />
    </div>
  );
};

export const ListResults = () => {
  const handleSuggest = (value: string) => {
    ('');
  };

  return (
    <div>
      <SearchBox
        searchResults={(query as { item: string }[]).map(
          (result) => result.item,
        )}
        onSuggestedClick={handleSuggest}
      />
    </div>
  );
};

export const SearchBarResult = () => {
  const [searchValue, setSearchValue, searchResults] = useSearchBar<{
    item: string;
  }>('', query, filterOptions);

  const handleWrite = useCallback(
    (e) => {
      setSearchValue(String(e.target.value));
    },
    [setSearchValue],
  );

  const handleSuggest = (value: string) => {
    setSearchValue(String(value));
  };

  return (
    <div>
      <SearchBar value={searchValue} onChange={handleWrite} size="small" />

      <SearchBox
        searchResults={(searchResults as { item: string }[]).map(
          (result) => result.item,
        )}
        onSuggestedClick={handleSuggest}
      />
    </div>
  );
};
