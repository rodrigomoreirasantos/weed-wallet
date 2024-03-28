import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import WeedTypeButton from "./_components/weed-type-button";

const NewWeed = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="text-gray-600 bg-[#D9D9D9]">
          <PlusCircle />
        </Button>
      </SheetTrigger>

      <SheetContent side="bottom" className="h-auto flex flex-col gap-8">
        <SheetHeader>Add New Weed</SheetHeader>
        <WeedTypeButton />
        <div>
          <Input placeholder="Add  a name for this weed..." />
        </div>
        <div className="flex flex-row gap-10">
          <Input placeholder="Thc" />
          <Input placeholder="Cbd" />
        </div>

        <Button>Save</Button>
      </SheetContent>
    </Sheet>
  );
};

export default NewWeed;
