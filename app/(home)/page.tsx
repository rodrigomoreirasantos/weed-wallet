import Header from "../_components/header";
import { db } from "../_lib/prisma";

import User from "./_components/user";

export default async function Home() {
  const weeds = await db.weed.findMany({});
  return (
    <>
      <Header />
      <User weeds={weeds} />
    </>
  );
}
