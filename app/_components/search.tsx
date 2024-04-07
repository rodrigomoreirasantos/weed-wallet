import { Input } from "@/components/ui/input";
import NewWeed from "./new-weed";

const Search = () => {
  return (
    <div className="p-5 flex flex-row gap-4">
      <Input />
      <NewWeed />
    </div>
  );
};

export default Search;
