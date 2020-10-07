/*
 * File: 3-SearchBar.stories.tsx
 * Project: @inventures/react-lib
 * File Created: Tuesday, 1st September 2020 9:46:25 am
 * Author: Luis Aparicio (luis@inventures.cl)
 * -----
 * Last Modified: Wednesday, 7th October 2020 12:14:59 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import React, { useCallback, useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { SearchBar, SearchElementItem } from '../components/searchBar';
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
      {[...query, { item: value }].map((result) => (
        <SearchElementItem
          key={result.item}
          value={result.item}
          onClick={() => alert(result.item)}
          onSuggestedClick={() => alert('autocomplete')}
        />
      ))}
    </div>
  );
};

export const SearchBarResultArray = () => {
  const debounceTime = number('Debounce time (ms)', 800);
  const classes = useStyles();
  const [showResults, setShowResults] = useState<boolean>(false);

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
      setShowResults(true);
    },
    [setSearchValue, setShowResults],
  );

  const handleClickClearSearch = (value: string) => {
    setSearchValue(String(value));
    setShowResults(false);
  };

  const handleResultClick = (value: string) => {
    setSearchValue(value);
    setShowResults(false);
  };

  return (
    <div className={classes.root}>
      <SearchBar
        value={searchValue}
        onChange={handleWrite}
        clearSearch={handleClickClearSearch}
        size="small"
        iconColor="#FFFFFF"
        barColor="#FFFFFF"
      />

      {!!searchValue && showResults && (
        <SearchElementItem
          value={searchValue}
          onClick={() => handleResultClick(searchValue)}
        />
      )}
      {showResults &&
        searchResults
          .filter(({ item }) => item !== searchValue)
          .map((result, i) => (
            <SearchElementItem
              key={i}
              value={result.item}
              onClick={() => handleResultClick(result.item)}
              onSuggestedClick={() => handleResultClick(result.item)}
            />
          ))}
    </div>
  );
};

export const SearchBarResultFunction = () => {
  const debounceTime = number('Debounce time (ms)', 800);
  const classes = useStyles();
  const [showResults, setShowResults] = useState<boolean>(false);

  const filterOptions = {
    keys: ['item'],
    debounceTime,
  };

  const [searchValue, setSearchValue, searchResults] = useSearchBar<{
    item: string;
  }>(
    '',
    async (input) => {
      return query.filter((q) => q.item.match(new RegExp(input, 'i')));
    },
    filterOptions,
  );

  const handleWrite = useCallback(
    (e) => {
      setSearchValue(String(e.target.value));
      setShowResults(true);
    },
    [setSearchValue, setShowResults],
  );

  const handleClickClearSearch = (value: string) => {
    setSearchValue(String(value));
    setShowResults(false);
  };

  const handleResultClick = (value: string) => {
    setSearchValue(value);
    setShowResults(false);
  };

  return (
    <div className={classes.root}>
      <SearchBar
        value={searchValue}
        onChange={handleWrite}
        clearSearch={handleClickClearSearch}
        size="small"
        iconColor="#FFFFFF"
        barColor="#FFFFFF"
      />

      {!!searchValue && showResults && (
        <SearchElementItem
          value={searchValue}
          onClick={() => handleResultClick(searchValue)}
        />
      )}
      {showResults &&
        searchResults
          .filter(({ item }) => item !== searchValue)
          .map((result, i) => (
            <SearchElementItem
              key={i}
              value={result.item}
              onClick={() => handleResultClick(result.item)}
              onSuggestedClick={() => handleResultClick(result.item)}
            />
          ))}
    </div>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: '#6384b8',
      height: '100vh',
      padding: '20px',
    },
  }),
);
