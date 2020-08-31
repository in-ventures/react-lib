import React from 'react';
import { SearchBar } from '../components/searchBar';
import { useSearchBar } from '../hooks/useSearchBar.hooks';

export default {
  title: 'SearchBar',
};

export const Base = () => {
  const [searchValue, setSearchValue, searchResults] = useSearchBar('');
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
