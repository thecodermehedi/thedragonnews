import Marquee from "react-fast-marquee";
import Header from "../../components/Header/Header";
import Navbar from "./../../components/Navbar/Navbar";
const Home_Header = () => {
  return (
    <div>
      <Header />
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
    </div>
  );
};

export default Home_Header;
