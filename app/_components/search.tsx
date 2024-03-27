import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Weed } from "@prisma/client";
import NewWeed from "./new-weed";

const Search = () => {
  const {} = useForm<Weed>();

  return (
    <div className="p-5 flex flex-row gap-4">
      <Input />
      <NewWeed />
    </div>
  );
};

export default Search;
