import Header from "../_components/header";
import WeedCard from "../_components/weedCard";
import Search from "../_components/search";

export default function Home() {
  return (
    <>
      <Header />
      <Search />
      <div className="overflow-y-auto max-h-screen [&::-webkit-scrollbar]:hidden">
        <WeedCard />
        <WeedCard />
        <WeedCard />
        <WeedCard />
        <WeedCard />
        <WeedCard />
        <WeedCard />
        <WeedCard />
        <WeedCard />
        <WeedCard />
        <WeedCard />
      </div>
    </>
  );
}
