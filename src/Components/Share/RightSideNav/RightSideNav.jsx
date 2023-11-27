import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

export default function RightSideNav() {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl font-semibold">Login With</h2>
        <button className="btn btn-outline w-full">
          <FcGoogle /> Login with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub /> Login with Github
        </button>
      </div>

      <div className="p-4 mb-6">
        <h2 className="text-3xl font-semibold mb-4">Find Us On</h2>
        <Link
          className="p-4 flex text-lg items-center border rounded-t-lg"
          to="/"
        >
          <FaFacebook className="mr-3" /> Facebook
        </Link>

        <Link className="p-4 flex text-lg items-center border-x" to="/">
          <FaTwitter className="mr-3" /> Twiter
        </Link>

        <Link
          className="p-4 flex text-lg items-center border rounded-t-lg"
          to="/"
        >
          <FaInstagram className="mr-3" /> Instagram
        </Link>
      </div>

      {/* q zone */}
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl font-semibold">Q Zone</h2>
        <img src={qZone1} alt="qzone1" />
        <img src={qZone2} alt="qzone2" />
        <img src={qZone3} alt="qzone3" />
      </div>
    </div>
  );
}
