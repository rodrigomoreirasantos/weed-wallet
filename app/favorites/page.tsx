"use client";
import { getServerSession } from "next-auth";
import { authOptions } from "../_lib/auth";
import { db } from "../_lib/prisma";
import WeedCard from "../_components/weed-card";
import { useContext } from "react";
import { FavoritesContext } from "../_providers/favorites";

export default function Favorites() {
  // const session = await getServerSession(authOptions);

  // const weeds = await db.weed.findMany({
  //   where: {
  //     userId: (session?.user as any).id,
  //     liked: true,
  //   },
  // });

  const { favorites, setFavorites, favoritesWeeds } =
    useContext(FavoritesContext);

  console.log(favoritesWeeds);

  return (
    <div>
      {favoritesWeeds.map((likedWeed) => (
        <div key={likedWeed.id}>
          <WeedCard weed={likedWeed} />
        </div>
      ))}
    </div>
  );
}
