import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="p-5 flex flex-row gap-4">
      <Input />
      <Button className="text-gray-600 bg-[#D9D9D9]">
        <SearchIcon />
      </Button>
    </div>
  );
};

export default Search;
