"use client";

import React, { useContext, useEffect, useState } from "react";
import Search from "@/app/_components/search";

import { Weed } from "@prisma/client";
import WeedCard from "@/app/_components/weed-card";
import { WeedContext } from "@/app/_providers/weed";

interface WeedProps {
  weeds: Weed[];
}
const User = ({ weeds }: WeedProps) => {
  const { newWeedFromUser, setNewWeedFromUser } = useContext(WeedContext);

  const [searchedWeed, setSearchedWeed] = useState<any[]>([]);

  useEffect(() => {
    setNewWeedFromUser(weeds);
  }, []);

  useEffect(() => {
    console.log(searchedWeed);
  }, [searchedWeed]);

  return (
    <div>
      <Search setSearchedWeed={setSearchedWeed} />
      <div className="overflow-y-auto h-[calc(100vh_-_150px)] [&::-webkit-scrollbar]:hidden">
        {searchedWeed.map((weed) => (
          <div key={weed.id}>
            <WeedCard weed={weed} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
