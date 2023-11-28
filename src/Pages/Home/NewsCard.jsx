import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function NewsCard({ news }) {
  const { title, image_url, details, _id } = news;
  return (
    <div className="card bg-base-100 shadow-xl mb-16">
      <figure>
        <img src={image_url} alt="thumbnail" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}{" "}
            <Link to={`/news/${_id}`} className="text-blue-600 font-bold">
              Read More...
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>
    </div>
  );
}

NewsCard.propTypes = {
  news: PropTypes.object.isRequired,
};
