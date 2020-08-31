import { useState, useMemo } from 'react';

const companies = ['Google', 'Facebook', 'Twitter', 'Linkedin', 'PcGamer'];

export const useSearchBar = (
  defaultValue: string,
  query: [],
): [string, (value: string) => void, string[]] => {
  const [searchValue, setSearchValue] = useState<string>(defaultValue);

  const searchResults = useMemo<string[]>(() => {
    if (searchValue.toLocaleLowerCase().length < 3) {
      return [];
    }
    return companies.filter((company) =>
      company.toLowerCase().includes(searchValue.toLocaleLowerCase()),
    );
  }, [searchValue]);

  return [searchValue, setSearchValue, searchResults];
};
