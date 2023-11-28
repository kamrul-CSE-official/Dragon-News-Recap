import { useParams } from "react-router-dom";
import Header from "../../Components/Share/Header";
import RightSideNav from "../../Components/Share/RightSideNav/RightSideNav";
import Navbar from "../../Components/Share/Navbar";

export default function News() {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <Navbar />
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <h2 className="text-5xl">News Details</h2>
          <p>{id}</p>
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
}
