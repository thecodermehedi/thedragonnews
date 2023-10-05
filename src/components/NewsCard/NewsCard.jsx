import PropTypes from "prop-types";
import {BsBookmark, BsShare, BsFillEyeFill} from "react-icons/bs";
import {Link} from "react-router-dom";

const NewsCard = ({card}) => {
  const {
    author: {img, name, published_date},
    title,
    image_url,
    details,
    rating: {number},
    total_view,
  } = card;
  return (
    <div className="border w-full rounded-xl">
      <header className="bg-black bg-opacity-5 flex justify-between items-center p-4">
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={img} />
            </div>
          </div>
          <div>
            <h1 className="text-gray-900 font-semibold">{name}</h1>
            <p className="text-gray-700">
              {published_date && published_date.length > 9
                ? published_date.slice(0, 10)
                : published_date}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-gray-700">
          <BsBookmark />
          <BsShare />
        </div>
      </header>
      <main>
        <h1 className="font-semibold text-3xl text-gray-900 p-5">{title}</h1>
        <figure className="rounded-xl">
          <img className="rounded-xl px-5" src={image_url} />
        </figure>
        <figcaption className="p-5">
          {details && details.length > 250 ? (
            <>
              {details.slice(0, 253) + "..."}
              <Link
                to={`/news/${card._id}`}
                className="text-orange-400 font-semibold text-lg"
              >
                Read More
              </Link>
            </>
          ) : (
            details
          )}
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
              />
            </div>
            <p className="text-gray-700">{number}</p>
          </div>
          <div className="flex items-center gap-2">
            <BsFillEyeFill />
            <span>{total_view}</span>
          </div>
        </div>
      </main>
    </div>
  );
};

NewsCard.propTypes = {
  card: PropTypes.object,
};

export default NewsCard;
