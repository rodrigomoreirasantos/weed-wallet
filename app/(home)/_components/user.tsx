import React from "react";
import Search from "@/app/_components/search";

import { Weed } from "@prisma/client";
import WeedCard from "@/app/_components/weed-card";

interface WeedProps {
  weeds: Weed[];
}
const User = ({ weeds }: WeedProps) => {
  return (
    <div>
      <Search />
      <div className="overflow-y-auto max-h-screen [&::-webkit-scrollbar]:hidden">
        {weeds.map((weed) => (
          <>
            <WeedCard key={weed.id} weed={weed} />
          </>
        ))}
      </div>
    </div>
  );
};

export default User;
