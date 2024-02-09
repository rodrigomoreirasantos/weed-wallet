import Image from "next/image";
import Header from "../_components/header";
import WeedCard from "../_components/weedCard";
import Search from "../_components/search";

export default function Home() {
  return (
    <>
      <Header />
      <Search />
      <WeedCard />
    </>
  );
}
