import { getServerSession } from "next-auth";
import { authOptions } from "../_lib/auth";
import Header from "../_components/header";
import { db } from "../_lib/prisma";
import WeedCard from "../_components/weed-card";

export default async function Favorites() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !(session?.user as any).id) {
    return <Header />;
  }

  const weeds = await db.weed.findMany({
    where: {
      userId: (session?.user as any).id,
    },
  });

  const likedWeeds = weeds.filter((weed) => weed.liked == true);

  return (
    <div>
      {likedWeeds.map((likedWeed) => (
        <div key={likedWeed.id}>
          <WeedCard weed={likedWeed} />
        </div>
      ))}
    </div>
  );
}
