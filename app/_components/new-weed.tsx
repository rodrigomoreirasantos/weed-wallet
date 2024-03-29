"use client";

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

const NewWeed = () => {
  const [currentWeedType, setCurrentWeedType] = useState<string>();
  function handleWeedType(type: string) {
    setCurrentWeedType(type);
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="text-gray-600 bg-[#D9D9D9]">
          <PlusCircle />
        </Button>
      </SheetTrigger>

      <SheetContent side="bottom" className="h-auto flex flex-col gap-8">
        <SheetHeader>Add New Weed</SheetHeader>
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            id="sativa"
            onClick={() => handleWeedType("sativa")}
            className={`px-9 ${
              currentWeedType == "sativa" &&
              "bg-weed-sativa hover:bg-weed-sativa"
            }`}
          >
            Sativa
          </Button>
          <Button
            variant="outline"
            id="indica"
            onClick={() => handleWeedType("indica")}
            className={`px-9 ${
              currentWeedType == "indica" &&
              "bg-weed-indica hover:bg-weed-indica"
            }`}
          >
            Indica
          </Button>
          <Button
            variant="outline"
            id="hybrid"
            onClick={() => handleWeedType("hybrid")}
            className={`px-9 ${
              currentWeedType == "hybrid" &&
              "bg-weed-hybrid hover:bg-weed-hybrid"
            }`}
          >
            Hybrid
          </Button>
        </div>
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
