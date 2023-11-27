import moment from "moment";
import logo from "../../assets/logo.png";
export default function Header() {
  return (
    <div className="text-center">
      <img className="mx-auto" src={logo} alt="logo" />
      <p className="">Journalism Without Fear or Favour</p>
      <p className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
}
