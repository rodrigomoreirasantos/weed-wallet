import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PlusCircle } from "lucide-react";

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
        <div className="flex items-center justify-between">
          {/* <Button variant="outline">Sativa</Button>
          <Button variant="outline">Indica</Button>
          <Button variant="outline">Hybrid</Button> */}
          <fieldset>
            <Input
              id="draft"
              className="peer"
              type="radio"
              name="status"
              //   checked
            />
            <Label htmlFor="draft" className="peer-checked:text-sky-500">
              Draft
            </Label>

            <Input
              id="published"
              className="peer"
              type="radio"
              name="status"
              checked
            />
            <Label htmlFor="published" className="peer-checked:text-sky-500">
              Published
            </Label>
          </fieldset>
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
