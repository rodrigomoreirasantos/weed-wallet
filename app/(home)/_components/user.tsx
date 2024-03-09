"use client";

import Search from "@/app/_components/search";
import WeedCard from "@/app/_components/weed-card";
import { Weed } from "@prisma/client";
import { useSession } from "next-auth/react";
import React from "react";
import AboutUs from "./about-us";

interface WeedProps {
  weeds: Weed[];
}

const User = ({ weeds }: WeedProps) => {
  const { status } = useSession();

  return (
    <>
      <Search />

      {status == "authenticated" ? (
        <div className="overflow-y-auto max-h-screen [&::-webkit-scrollbar]:hidden">
          {weeds.map((weed) => (
            <>
              <WeedCard key={weed.id} weed={weed} />
            </>
          ))}
        </div>
      ) : (
        <AboutUs />
      )}
    </>
  );
};

export default User;
