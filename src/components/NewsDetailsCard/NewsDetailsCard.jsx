import PropTypes from "prop-types";
import {BsArrowLeft} from "react-icons/bs";
import {Link} from "react-router-dom";
const NewsDetailsCard = ({card}) => {
  const {title, image_url, details} = card;
  return (
    <div className="card w-full border">
      <figure className="px-5 pt-5">
        <img src={image_url} className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h1 className="font-semibold text-3xl text-gray-900">{title}</h1>
        <p>{details}</p>
        <div className="card-actions">
          <Link to={"/"} className="btn btn-secondary rounded-xl normal-case">
            <BsArrowLeft /> All news in this category
          </Link>
        </div>
      </div>
    </div>
  );
};

NewsDetailsCard.propTypes = {
  card: PropTypes.object,
};

export default NewsDetailsCard;
