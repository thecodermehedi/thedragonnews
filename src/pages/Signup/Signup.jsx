import {useContext} from "react";
import Navbar from "./../../components/Navbar/Navbar";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthProvider";

const Signup = () => {
  const {signUpWithEmail} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoUrl = form.get("url");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photoUrl, email, password);

    signUpWithEmail(email, password)
      .then((result) => {
        const user = result.user;
        console.log(" user create succesffuly");
        console.log(user);
        e.target.reset();
        navigate("/login");
      })
      .catch((error) => {
        const errorMesage = error.message;
        console.log(errorMesage);
      });
  };
  return (
    <section className="min-h-screen bg-gray-200 text-gray-900">
      <Navbar />
      <div className="flex flex-col justify-center items-center bg-white rounded-xl h-fit max-w-6xl mx-auto w-[50rem] p-10 my-20">
        <h1 className="text-center font-bold text-2xl">
          Register your account
        </h1>
        <hr className="my-10 border-2 w-full" />
        <form onSubmit={handleRegister} className="w-full px-20">
          <label htmlFor="name" className="font-bold px-2 text-lg">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="input w-full bg-black bg-opacity-10 text-gray-600 focus:outline-none mt-2 mb-5"
            name="name"
            id="name"
          />
          <label htmlFor="url" className="font-bold px-2 text-lg">
            Photo URL
          </label>
          <input
            type="url"
            placeholder="Enter your photo link"
            className="input w-full bg-black bg-opacity-10 text-gray-600 focus:outline-none mt-2 mb-5"
            name="url"
            id="url"
          />
          <label htmlFor="email" className="font-bold px-2 text-lg">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="input w-full bg-black bg-opacity-10 text-gray-600 focus:outline-none mt-2 mb-5"
            name="email"
            id="email"
            required
          />
          <label htmlFor="password" className="font-bold px-2 text-lg">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="input w-full bg-black bg-opacity-10 text-gray-600 focus:outline-none mt-2 mb-5"
            name="password"
            id="password"
            required
          />
          <div className="flex items-center gap-5 my-5">
            <input
              type="checkbox"
              className="checkbox checkbox-success"
              required={true}
            />
            <span>Accept Terms & Conditions</span>
          </div>
          <button className="btn btn-neutral w-full text-lg rounded-xl hover:bg-black capitalize  mb-5">
            Register
          </button>
          <p className="text-center">
            Already have an account ?{" "}
            <Link
              to="/login"
              className="text-red-600 font-semibold hover:underline"
            >
              Signin
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Signup;
