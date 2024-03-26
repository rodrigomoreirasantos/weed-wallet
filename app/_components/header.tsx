"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Menu from "./menu";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

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
              <Menu />
            </>
          ) : (
            <Button onClick={handleLoginClick}>Login</Button>
          )}
        </CardContent>
      </Card>
    </header>
  );
};

export default Header;
