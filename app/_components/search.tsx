import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircle } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const Search = () => {
  return (
    <div className="p-5 flex flex-row gap-4">
      <Input />
      <Sheet>
        <SheetTrigger asChild>
          <Button className="text-gray-600 bg-[#D9D9D9]">
            <PlusCircle />
          </Button>
        </SheetTrigger>

        <SheetContent side="bottom">
          <SheetHeader>Add New Weed</SheetHeader>
          <div></div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Search;
