"use client";

import React, { useContext, useEffect } from "react";
import Search from "@/app/_components/search";

import { Weed } from "@prisma/client";
import WeedCard from "@/app/_components/weed-card";
import { WeedContext } from "@/app/_providers/weed";
import { SearchContext } from "@/app/_providers/search";

interface WeedProps {
  weeds: Weed[];
}
const User = ({ weeds }: WeedProps) => {
  const { weedFromUser, setWeedFromUser } = useContext(WeedContext);
  const { setWeedsByUser } = useContext(SearchContext);

  useEffect(() => {
    setWeedFromUser(weeds);
    setWeedsByUser(weeds);
  }, []);

  return (
    <div>
      <Search />
      <div className="overflow-y-auto max-h-screen [&::-webkit-scrollbar]:hidden">
        {weedFromUser.map((weed) => (
          <>
            <WeedCard key={weed.id} weed={weed} />
          </>
        ))}
      </div>
    </div>
  );
};

export default User;
