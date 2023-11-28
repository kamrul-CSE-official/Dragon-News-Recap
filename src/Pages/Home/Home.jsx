import { useLoaderData } from "react-router-dom";

import Header from "../../Components/Share/Header";
import LeftSideNav from "../../Components/Share/LeftSideNav/LeftSideNav";
import Navbar from "../../Components/Share/Navbar";
import RightSideNav from "../../Components/Share/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

export default function Home() {
  const news = useLoaderData();
  console.log(news);
  return (
    <div>
      <Header />
      <BreakingNews></BreakingNews>
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <LeftSideNav />
        </div>
        {/* news contener */}
        <div className="md:col-span-2">
          {news.map((aNews) => (
            <NewsCard key={aNews._id} news={aNews}></NewsCard>
          ))}
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
}
