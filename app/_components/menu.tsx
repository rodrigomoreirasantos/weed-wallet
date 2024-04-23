import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, Heart, Home } from "lucide-react";
import Link from "next/link";

const Menu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>Menu</SheetHeader>
        <div className="py-5 flex flex-col gap-4">
          <Link href="/">
            <Button variant="outline" className="w-full justify-start gap-2">
              <Home size={16} />
              Home
            </Button>
          </Link>
          <Link href="/favorites">
            <Button variant="outline" className="w-full justify-start gap-2">
              <Heart size={16} />
              Favorites
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Menu;
