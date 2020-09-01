/*
 * File: 3-SearchBar.stories.tsx
 * Project: @inventures/react-lib
 * File Created: Tuesday, 1st September 2020 9:46:25 am
 * Author: Luis Aparicio (luis@inventures.cl)
 * -----
 * Last Modified: Tuesday, 1st September 2020 10:46:25 am
 * Modified By: Luis Aparicio (luis@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import React from 'react';
import { SearchBar } from '../components/searchBar';
import { useSearchBar } from '../hooks/useSearchBar.hooks';

const query = ['Google', 'Facebook', 'Twitter', 'Linkedin', 'PcGamer'];

export default {
  title: 'SearchBar',
};

const filterOptions = {
  isCaseSensitive: false,
  includeScore: false,
  shouldSort: true,
  includeMatches: false,
  findAllMatches: true,
  minMatchCharLength: 3,
  location: 0,
  threshold: 0.6,
  distance: 100,
  useExtendedSearch: true,
  ignoreLocation: false,
  ignoreFieldNorm: false,
  keys: [],
};

export const Base = () => {
  const [searchValue, setSearchValue, searchResults] = useSearchBar(
    '',
    query,
    filterOptions,
  );
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <SearchBar
        value={searchValue}
        onChange={handleChange}
        label={'Search'}
        type={'Text'}
      />
      <ul>
        {searchResults.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
