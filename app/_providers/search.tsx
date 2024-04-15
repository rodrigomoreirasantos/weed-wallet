"use client";

import {
  ChangeEvent,
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useDeferredValue,
  useState,
} from "react";

interface SearchProps {
  search: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setSearch: Dispatch<SetStateAction<string>>;
  setWeedsByUser: Dispatch<SetStateAction<WeedFormProps[]>>;
}

interface WeedFormProps {
  id: string;
  name: string;
  type: string;
  thc: string;
  cbd: string;
  userId: string;
}

export const SearchContext = createContext({} as SearchProps);

const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState<string>("");
  const [weedsByUser, setWeedsByUser] = useState<WeedFormProps[]>([]);
  const weedDeferredSearched = useDeferredValue(search);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  const result = weedsByUser.filter((weed) =>
    weed.name.toLowerCase().includes(weedDeferredSearched.toLowerCase())
  );

  console.log(result);

  return (
    <SearchContext.Provider
      value={{ setSearch, search, onChange, setWeedsByUser }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
