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
import { useForm } from "react-hook-form";

interface NewWeedProps {
  type: string;
}

const NewWeed = () => {
  const [currentWeedType, setCurrentWeedType] = useState<string>();

  const { register, handleSubmit, setValue } = useForm<NewWeedProps>();

  const onSubmit = (weed: NewWeedProps) => {
    return console.log(weed);
  };

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
            id="sativa"
            className={`px-9 ${
              currentWeedType == "sativa" &&
              "bg-weed-sativa hover:bg-weed-sativa"
            }`}
            variant="outline"
            value={currentWeedType}
            {...register("type")}
            onClick={() => (
              setValue("type", "sativa"), handleWeedType("sativa")
            )}
          >
            Sativa
          </Button>
          <Button
            id="indica"
            className={`px-9 ${
              currentWeedType == "indica" &&
              "bg-weed-indica hover:bg-weed-indica"
            }`}
            variant="outline"
            value={currentWeedType}
            {...register("type")}
            onClick={() => (
              setValue("type", "indica"), handleWeedType("indica")
            )}
          >
            Indica
          </Button>
          <Button
            id="hybrid"
            className={`px-9 ${
              currentWeedType == "hybrid" &&
              "bg-weed-hybrid hover:bg-weed-hybrid"
            }`}
            variant="outline"
            value={currentWeedType}
            {...register("type")}
            onClick={() => (
              setValue("type", "hybrid"), handleWeedType("hybrid")
            )}
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

        <Button onClick={() => handleSubmit(onSubmit)()}>Save</Button>
      </SheetContent>
    </Sheet>
  );
};

export default NewWeed;
