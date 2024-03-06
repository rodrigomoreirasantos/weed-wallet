"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { data } = useSession();
  const handleLoginClick = async () => {
    await signIn("google");
  };

  const handleSignOutClick = async () => {
    await signOut();
  };

  return (
    <header>
      <Card>
        <CardContent className=" p-5 flex items-center justify-between flex-row">
          <Link href={"/"}>
            <h1>Weed Wallet</h1>
            {/* <Image src="/logo.png" alt="Weed Wallet" height={40} width={40} /> */}
          </Link>
          {data?.user ? (
            <>
              <Avatar>
                <AvatarImage src={data.user?.image ?? ""} />
              </Avatar>
              <Button onClick={handleSignOutClick}>Disconnect</Button>
            </>
          ) : (
            <Button onClick={handleLoginClick}>Login</Button>
          )}
          {/* <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <MenuIcon size={16} />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetContent>
          </Sheet> */}
        </CardContent>
      </Card>
    </header>
  );
};

export default Header;
