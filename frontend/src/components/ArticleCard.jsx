import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import articleType from "../types/ArticleType";

function ArticleCard({ article }) {
  return (
    <article className="col-md-4 col-sm-12 d-flex">
      <div className="border m-2 p-2 h-100 rounded-1 shadow-sm flex-fill">
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
            article.src
          }`}
          alt={article.alt}
          className="w-100 rounded-1"
        />
        <h2 className="text-center">{article.title}</h2>
        <div className="p-2" />
        <div className="">
          <Link
            to={`/articles/${article.id}`}
            className="btn btn-secondary w-100"
          >
            En savoir plus
          </Link>
        </div>
      </div>
    </article>
  );
}

ArticleCard.propTypes = {
  article: PropTypes.shape(articleType).isRequired,
};

export default ArticleCard;
