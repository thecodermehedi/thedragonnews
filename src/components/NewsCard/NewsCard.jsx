import {BsBookmark, BsShare, BsFillEyeFill} from "react-icons/bs";
const NewsCard = () => {
  return (
    <div className="border w-full rounded-xl">
      <header className="bg-black bg-opacity-5 flex justify-between items-center p-4">
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
            </div>
          </div>
          <div>
            <h1 className="text-gray-900 font-semibold">Jimmy Dane</h1>
            <p className="text-gray-700">2022-08-24</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-gray-700">
          <BsBookmark />
          <BsShare />
        </div>
      </header>
      <main>
        <h1 className="font-semibold text-3xl text-gray-900 p-5">
          Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military
          Aid Package Yet
        </h1>
        <figure className="rounded-xl">
          <img
            className="rounded-xl px-5"
            src="https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png"
          />
        </figure>
        <figcaption className="p-5">
          Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe,
          Joe Biden, Military, News, Russia, Security, UK, Ukraine, United
          States, Worthy News (Worthy News) – U.S. President Joe Biden has
          announced nearly $3 billion in new U.S. military aid for Kyiv as
          Ukraine marked its independence day six months after Russia invaded
          the country... <span className="text-orange-400">Read More</span>
        </figcaption>
        <hr className="mx-5 border-2" />
        <div className="flex justify-between items-center p-5 text-lg">
          <div className="flex items-center gap-2">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
            <p className="text-gray-700">4.9</p>
          </div>
          <div className="flex items-center gap-2">
            <BsFillEyeFill />
            <span>499</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewsCard;
