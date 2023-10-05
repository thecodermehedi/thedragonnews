import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import RightSideBar from "./../../components/RightSideBar/RightSideBar";
import NewsCard from "../../components/NewsCard/NewsCard";
import {useEffect, useState} from "react";
import Home_Header from "./Home_Header";
const Homepage = () => {
  const [newsCards, setNewsCards] = useState([]);
  useEffect(() => {
    fetch("./data/news.json")
      .then((res) => res.json())
      .then((data) => setNewsCards(data));
  }, []);
  return (
    <section className="bg-white">
      <Home_Header />
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-4">
        <LeftSideBar />
        <div className="col-span-2">
          <h1 className="font-semibold text-xl text-gray-900 mt-2 mb-5">
            Dragon News
          </h1>
          <div className="flex flex-col justify-center items-center gap-5">
            {newsCards.slice(0, 2).map((card) => (
              <NewsCard key={card._id} card={card} />
            ))}
          </div>
        </div>
        <RightSideBar />
      </div>
    </section>
  );
};

export default Homepage;
