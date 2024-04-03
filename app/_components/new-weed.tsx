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
  name: string;
  thc: string;
  cbd: string;
}

const NewWeed = () => {
  const [currentWeedType, setCurrentWeedType] = useState<string>();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<NewWeedProps>();

  const onSubmit = (weed: NewWeedProps) => {
    return console.log(weed);
  };

  function handleWeedTypeClick(type: string) {
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
        <SheetHeader>Weed Form</SheetHeader>
        <div className="flex flex-col gap-1">
          <div className="w-full flex flex-row items-center justify-between">
            <Button
              id="sativa"
              className={`px-9 ${
                currentWeedType == "sativa" &&
                "bg-weed-sativa hover:bg-weed-sativa"
              }`}
              variant="outline"
              value={currentWeedType}
              {...register("type", {
                required: true,
              })}
              onClick={() => (
                setValue("type", "sativa"), handleWeedTypeClick("sativa")
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
              {...register("type", {
                required: true,
              })}
              onClick={() => (
                setValue("type", "indica"), handleWeedTypeClick("indica")
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
              {...register("type", {
                required: true,
              })}
              onClick={() => (
                setValue("type", "hybrid"), handleWeedTypeClick("hybrid")
              )}
            >
              Hybrid
            </Button>
          </div>
          {errors.type && (
            <span className="text-red-500 text-sm">Weed type is required</span>
          )}
        </div>
        <div>
          <Input
            placeholder="Add  a name for this weed..."
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">Weed name is required</span>
          )}
        </div>
        <div className="flex flex-row items-center justify-between gap-10">
          <div className="flex flex-col w-full">
            <Input
              type="number"
              placeholder="THC"
              {...register("thc", { required: true })}
            />
            {errors.thc && (
              <span className="text-red-500 text-sm">Weed THC is required</span>
            )}
          </div>
          <div className="flex flex-col w-full">
            <Input
              type="number"
              placeholder="CBD"
              {...register("cbd", { required: true })}
            />
            {errors.cbd && (
              <span className="text-red-500 text-sm">Weed CBD is required</span>
            )}
          </div>
        </div>

        <Button onClick={() => handleSubmit(onSubmit)()}>Save</Button>
      </SheetContent>
    </Sheet>
  );
};

export default NewWeed;
