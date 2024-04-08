import Header from "../_components/header";

import User from "./_components/user";
import { db } from "../_lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../_lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const weeds = await db.weed.findMany({
    where: {
      userId: (session?.user as any).id,
    },
  });

  console.log(weeds);

  return (
    <>
      <Header />
      <User weeds={weeds} />
    </>
  );
}
