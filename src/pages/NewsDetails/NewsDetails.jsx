import {useLoaderData} from "react-router-dom";
import Header from "../../components/Header/Header";
import RightSideBar from "../../components/RightSideBar/RightSideBar";

const NewsDetails = () => {
  const newsData = useLoaderData();
  console.log(newsData);
  return (
    <section className="bg-white">
      <Header />
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2">
          <h1 className="font-semibold text-xl text-gray-900 mt-2 mb-5">
            Dragon News
          </h1>
          <div className="flex flex-col justify-center items-center gap-5">
            {newsData.length}
          </div>
        </div>
        <RightSideBar />
      </div>
    </section>
  );
};

export default NewsDetails;
