"use client";

import {
  ChangeEvent,
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useState,
} from "react";

interface SearchProps {
  search?: string | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setSearch: Dispatch<SetStateAction<string | undefined>>;
  setWeeds: Dispatch<SetStateAction<WeedFormProps[]>>;
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
  const [search, setSearch] = useState<string | undefined>("");
  const [weeds, setWeeds] = useState<WeedFormProps[]>([]);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  return (
    <SearchContext.Provider value={{ setSearch, search, onChange, setWeeds }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
