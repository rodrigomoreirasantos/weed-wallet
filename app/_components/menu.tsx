"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, Heart, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
  const path = usePathname();
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
          <SheetClose asChild>
            <Link href="/">
              <Button
                variant="outline"
                className={`w-full justify-start gap-2 `}
              >
                <Home size={16} />
                Home
              </Button>
            </Link>
          </SheetClose>

          <SheetClose>
            <Link href="/favorites">
              <Button
                variant="outline"
                className={`w-full justify-start gap-2 ${
                  path.includes("/favorites") && "bg-black text-white"
                }`}
              >
                <Heart size={16} />
                Favorites
              </Button>
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Menu;
