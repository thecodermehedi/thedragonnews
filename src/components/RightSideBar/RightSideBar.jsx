import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import {Link, useNavigate} from "react-router-dom";
import qZone1 from "../../assets/images/qZone1.png";
import qZone2 from "../../assets/images/qZone2.png";
import qZone3 from "../../assets/images/qZone3.png";
import bg1 from "../../assets/images/bg1.png";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthProvider";
const RightSideBar = () => {
  const {user, signInWithGoogle, signInWithGithub} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        console.log("logged in successfully");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const handleLogInWithGithub = () => {
    signInWithGithub()
      .then((result) => {
        const user = result.user;
        console.log(user);
        console.log("logged in successfully");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <section className="h-fit">
      {!user && (
        <>
          <div className="mb-5">
            <h1 className="font-semibold text-xl text-gray-900 mt-2 mb-5">
              Login With
            </h1>
            <button
              onClick={handleLogInWithGoogle}
              className="btn min-h-0 h-10 w-full border rounded-xl bg-transparent normal-case mb-2 border-blue-500 text-blue-500"
            >
              <FaGoogle /> Login with Google
            </button>
            <button
              onClick={handleLogInWithGithub}
              className="btn min-h-0 h-10 w-full border rounded-xl bg-transparent normal-case mb-5 border-black text-black hover:text-white"
            >
              <FaGithub /> Login with Github
            </button>
          </div>
        </>
      )}
      <div className="mb-5">
        <h1 className="font-semibold text-xl text-gray-900 mt-2 mb-5">
          Find Us On
        </h1>
        <Link
          to={"#"}
          className=" flex items-center gap-1 h-10 w-full pl-5 text-blue-600 border-2 rounded-t-xl hover:bg-blue-600 hover:text-white"
        >
          <FaFacebook /> Facebook
        </Link>
        <Link
          to={"#"}
          className=" flex items-center gap-1 h-10 w-full  pl-5 text-gray-900 border-2 border-y-0 hover:bg-gray-900 hover:text-slate-300"
        >
          <FaXTwitter /> Twitter
        </Link>
        <Link
          to={"#"}
          className=" flex items-center gap-1 h-10 w-full  pl-5 text-red-400 border-2 rounded-b-xl hover:bg-red-400 hover:text-white"
        >
          <FaInstagram /> Instagram
        </Link>
      </div>
      <div className="bg-black bg-opacity-10 rounded-xl mb-5">
        <h1 className="font-semibold text-xl text-gray-900 p-5">Q-Zone</h1>
        <div className="flex flex-col items-center gap-10">
          <img src={qZone1} alt="qZone1_pic" />
          <img src={qZone2} alt="qZone2_pic" />
          <img src={qZone3} alt="qZone3_pic" />
        </div>
      </div>
      <div
        className="flex flex-col justify-center rounded-xl items-center gap-4 object-cover text-center bg-no-repeat bg-center bg-cover text-white py-20 px-5 mb-10"
        style={{
          backgroundImage: `url(${bg1})`,
        }}
      >
        <h1 className="font-semibold text-4xl ">Create an Amazing Newspaper</h1>
        <p>
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button className="btn-secondary btn rounded-xl capitalize">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default RightSideBar;
