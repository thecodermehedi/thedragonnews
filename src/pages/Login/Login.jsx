import {useContext} from "react";
import Navbar from "../../components/Navbar/Navbar";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthProvider";
const Login = () => {
  const {signInWithEmail} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signInWithEmail(email, password)
      .then((result) => {
        const user = result.user;
        console.log("logged in successfully");
        console.log(user);
        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <section className="min-h-screen bg-gray-200 text-gray-900">
      <Navbar />
      <div className="flex flex-col justify-center items-center bg-white rounded-xl h-fit max-w-6xl mx-auto w-[50rem] p-10 my-20">
        <h1 className="text-center font-bold text-2xl">Login your account</h1>
        <hr className="my-10 border-2 w-full" />
        <form onSubmit={handleLogin} className="w-full px-20">
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
          <button className="btn btn-neutral w-full text-lg rounded-xl hover:bg-black capitalize  mb-5">
            Login
          </button>
          <p className="text-center">
            Don&apos;t have an account ?{" "}
            <Link
              to="/signup"
              className="text-red-600 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
