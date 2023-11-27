import Header from "../../Components/Share/Header";
import LeftSideNav from "../../Components/Share/LeftSideNav/LeftSideNav";
import Navbar from "../../Components/Share/Navbar";
import RightSideNav from "../../Components/Share/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

export default function Home() {
  return (
    <div>
      <Header />
      <BreakingNews></BreakingNews>
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="border">
          <LeftSideNav />
        </div>
        <div className="md:col-span-2 border">
          <h2 className="text-4xl">News comming soon...</h2>
        </div>
        <div className="border">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
}
