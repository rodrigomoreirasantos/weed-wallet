import { useSession } from "next-auth/react";
import Header from "../_components/header";
import { db } from "../_lib/prisma";
import AboutUs from "./_components/about-us";
import User from "./_components/user";
import WeedCard from "../_components/weed-card";

export default async function Home() {
  const weeds = await db.weed.findMany({});
  return (
    <>
      <Header />
      <User weeds={weeds} />
    </>
  );
}
