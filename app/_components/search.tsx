import { Input } from "@/components/ui/input";
import NewWeed from "./new-weed";
import { useContext } from "react";
import { SearchContext } from "../_providers/search";

const Search = () => {
  const { onChange, search } = useContext(SearchContext);

  return (
    <div className="p-5 flex flex-row gap-4">
      <Input value={search} onChange={onChange} defaultValue="" />
      <NewWeed />
    </div>
  );
};

export default Search;
