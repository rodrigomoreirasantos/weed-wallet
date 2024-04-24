import { getServerSession } from "next-auth";
import { authOptions } from "../_lib/auth";
import { db } from "../_lib/prisma";
import WeedCard from "../_components/weed-card";
import FavoritesProvider from "../_providers/favorites";

export default async function Favorites() {
  const session = await getServerSession(authOptions);

  const weeds = await db.weed.findMany({
    where: {
      userId: (session?.user as any).id,
      liked: true,
    },
  });

  return (
    <FavoritesProvider>
      <div>
        {weeds.map((likedWeed) => (
          <div key={likedWeed.id}>
            <WeedCard weed={likedWeed} />
          </div>
        ))}
      </div>
    </FavoritesProvider>
  );
}
