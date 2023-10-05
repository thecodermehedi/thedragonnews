import Logo from "../../assets/images/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import Navbar from "../Navbar/Navbar";
const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center gap-4 py-10 bg-white">
      <img src={Logo} alt="The Dragon News" />
      <h2 className="text-xl">Journalism Without Fear or Favour</h2>
      <p className="font-medium text-xl">
        <span className="text-gray-500"> {moment().format("dddd,")}</span>{" "}
        {moment().format("MMMM D, YYYY")}
      </p>
      <div className="max-w-6xl mx-auto w-full bg-black bg-opacity-10 flex justify-center items-center gap-2 rounded-xl p-2 my-5">
        <button className="btn btn-secondary rounded-xl min-h-0 h-10">
          Latest
        </button>
        <Marquee pauseOnHover={true} speed={100}>
          <p className="mr-8 text-gray-600 cursor-pointer">
            <span className="text-gray-800 font-medium">Match Highlights:</span>{" "}
            Germany vs Spain — as it happened &nbsp; &nbsp; &nbsp;!
          </p>
          <p className="mr-8 text-gray-600 cursor-pointer">
            <span className="text-gray-800 font-medium">Match Highlights:</span>{" "}
            Germany vs Spain — as it happened &nbsp; &nbsp; &nbsp;!
          </p>
          <p className="mr-8 text-gray-600 cursor-pointer">
            <span className="text-gray-800 font-medium">Match Highlights:</span>{" "}
            Germany vs Spain — as it happened &nbsp; &nbsp; &nbsp;!
          </p>
        </Marquee>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
