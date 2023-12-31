import { Link } from "react-router-dom";
import Navbar from "../../Components/Share/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

export default function Regester() {
  const { createUser } = useContext(AuthContext);

  const hendleRester = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const photoURL = form.get("photo");
    console.log(name, email, password, photoURL);

    // create User
    createUser(email, password)
      .then((resutl) => {
        console.log(resutl.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Navbar />
      <div>
        <h2 className="text-3xl text-center my-10">Please Regester</h2>
        <div>
          <form
            onSubmit={hendleRester}
            className="card-body md:w-3/4 lg:w-1/2 mx-auto"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Regester</button>
            </div>
          </form>
          <p className="text-center">
            Do you have an account{" "}
            <Link className="text-blue-500 font-bold" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
