"use client";

import {
  ChangeEvent,
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useDeferredValue,
  useEffect,
  useState,
} from "react";

interface SearchProps {
  search: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setSearch: Dispatch<SetStateAction<string>>;
  setWeedsByUser: Dispatch<SetStateAction<WeedFormProps[]>>;
  setWeedSearchedByUser: Dispatch<SetStateAction<WeedFormProps[]>>;
  weedSearchedByUser: WeedFormProps[];
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
  const [weedSearchedByUser, setWeedSearchedByUser] = useState<WeedFormProps[]>(
    []
  );

  const weedDeferredSearched = useDeferredValue(search);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  useEffect(() => {
    const weedFiltered = weedsByUser.filter((weed) =>
      weed.name.toLowerCase().includes(weedDeferredSearched.toLowerCase())
    );

    setWeedSearchedByUser(weedFiltered);
  }, [weedsByUser, weedDeferredSearched, setWeedSearchedByUser]);

  console.log(weedSearchedByUser);

  return (
    <SearchContext.Provider
      value={{
        setSearch,
        search,
        onChange,
        setWeedsByUser,
        weedSearchedByUser,
        setWeedSearchedByUser,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
