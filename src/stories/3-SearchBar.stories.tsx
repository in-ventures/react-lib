/*
 * File: 3-SearchBar.stories.tsx
 * Project: @inventures/react-lib
 * File Created: Tuesday, 1st September 2020 9:46:25 am
 * Author: Luis Aparicio (luis@inventures.cl)
 * -----
 * Last Modified: Friday, 4th September 2020 4:53:47 pm
 * Modified By: Luis Aparicio (luis@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import React, { useCallback, useState } from 'react';
import { SearchBar, SearchResultList } from '../components/searchBar';
import { useSearchBar } from '../hooks/useSearchBar.hooks';
import { number, text } from '@storybook/addon-knobs';

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
    item: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
];

export const Base = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleWrite = useCallback(
    (e) => {
      setSearchValue(String(e.target.value));
    },
    [setSearchValue],
  );

  const handleClickClearSearch = (value: string) => {
    setSearchValue(String(value));
  };

  return (
    <div>
      <SearchBar
        value={searchValue}
        onChange={handleWrite}
        clearSearch={handleClickClearSearch}
        size="small"
      />
    </div>
  );
};

export const ListResults = () => {
  const value = text('Item', 'Rapier');
  return (
    <div>
      <SearchResultList
        searchResults={[...query, { item: value }].map((result) => result.item)}
        onSuggestedClick={() => ''}
      />
    </div>
  );
};

export const SearchBarResult = () => {
  const debounceTime = number('Debounce time (ms)', 800);

  // To-Do Fix Fuse.js Options
  const filterOptions = {
    keys: ['item'],
    debounceTime,
  };
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

  const handleClickClearSearch = (value: string) => {
    setSearchValue(String(value));
  };

  return (
    <div>
      <SearchBar
        value={searchValue}
        onChange={handleWrite}
        clearSearch={handleClickClearSearch}
        size="small"
      />

      <SearchResultList
        searchResults={(searchResults as { item: string }[]).map(
          (result) => result.item,
        )}
        onSuggestedClick={handleSuggest}
      />
    </div>
  );
};
