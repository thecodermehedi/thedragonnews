import {Link, useNavigate} from "react-router-dom";
import avatarPlaceholder from "../../assets/images/user.png";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthProvider";
const Navbar = () => {
  const {user, signOutUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    signOutUser()
      .then(() => {
        console.log("user signed out");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navLinks = (
    <>
      <Link to={"/"} className="hover:text-black text-gray-600">
        Home
      </Link>
      <Link to={"/about"} className="hover:text-black text-gray-600">
        About
      </Link>
      <Link to={"/career"} className="hover:text-black text-gray-600">
        Career
      </Link>
    </>
  );
  return (
    <nav className="max-w-6xl mx-auto w-full">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 text-lg">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="w-10 rounded-full mr-5 border overflow-hidden">
            <img src={user?.photoURL ? user.photoURL : avatarPlaceholder} />
          </div>
          {user ? (
            <button
              onClick={handleLogout}
              className="btn bg-gray-700 hover:bg-gray-900 border-none rounded-xl min-h-0 h-10 px-8 text-white font-semibold text-lg"
            >
              Logout
            </button>
          ) : (
            <Link
              to={"/login"}
              className="btn bg-gray-700 hover:bg-gray-900 border-none rounded-xl min-h-0 h-10 px-8 text-white font-semibold text-lg"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
