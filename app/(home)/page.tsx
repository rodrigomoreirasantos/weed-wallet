import Header from "../_components/header";
import WeedCard from "../_components/weedCard";
import Search from "../_components/search";
import { db } from "../_lib/prisma";

export default async function Home() {
  const weeds = await db.weed.findMany({});
  return (
    <>
      <Header />
      <Search />
      <div className="overflow-y-auto max-h-screen [&::-webkit-scrollbar]:hidden">
        {weeds.map((weed) => (
          <WeedCard key={weed.id} weed={weed} />
        ))}
      </div>
    </>
  );
}
