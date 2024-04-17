"use client";

import { Input } from "@/components/ui/input";
import NewWeed from "./new-weed";
import {
  ChangeEvent,
  useCallback,
  useContext,
  useDeferredValue,
  useEffect,
  useState,
} from "react";
import { WeedContext } from "../_providers/weed";

const Search = ({ setSearchedWeed }: any) => {
  const { newWeedFromUser } = useContext(WeedContext);

  const [search, setSearch] = useState<string>("");

  const handleSearchWeed = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  useEffect(() => {
    const weedFiltered = newWeedFromUser.filter((weed) =>
      weed.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchedWeed(weedFiltered);
  }, [search, newWeedFromUser]);

  return (
    <div className="p-5 flex flex-row gap-4">
      <Input value={search} onChange={handleSearchWeed} />
      <NewWeed />
    </div>
  );
};

export default Search;
