import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import RightSideBar from "./../../components/RightSideBar/RightSideBar";
import Header from "./../../components/Header/Header";
import NewsCard from "../../components/NewsCard/NewsCard";

const Homepage = () => {
  return (
    <section className="bg-white">
      <Header />
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-4">
        <LeftSideBar />
        <div className="col-span-2">
          <h1 className="font-semibold text-xl text-gray-900 mt-2 mb-5">
            Dragon News
          </h1>
          <div className="flex flex-col justify-center items-center gap-5">
              <NewsCard />
          </div>
        </div>
        <RightSideBar />
      </div>
    </section>
  );
};

export default Homepage;
