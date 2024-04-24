"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, Heart, Home, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
  const path = usePathname();

  const handleLogoutClick = async () => {
    await signOut();
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>Menu</SheetHeader>
        <div className="py-5 flex flex-col gap-4 flex-1 h-full">
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

          <SheetClose asChild>
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

          <SheetClose asChild>
            <Button className="flex gap-4" onClick={handleLogoutClick}>
              <LogOut />
              SignOut
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Menu;
