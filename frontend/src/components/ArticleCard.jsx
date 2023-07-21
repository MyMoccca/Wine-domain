import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import articleType from "../types/ArticleType";

function ArticleCard({ article }) {
  return (
    <article className="one-article-wrapper">
      <div className="one-article-container">
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
            article.src
          }`}
          alt={article.alt}
          className="w-100 rounded-1"
        />
        <h2 className="article-title">{article.title}</h2>
      </div>
      <div className="">
        <Link to={`/articles/${article.id}`} className="btn-articles">
          <span className="btn__circle" />
          <span className="btn__white-circle">
            <svg id="icon-arrow-right" viewBox="0 0 21 12">
              <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z" />
            </svg>
          </span>
          <span className="btn__text"> Découvrir l'article</span>
        </Link>
      </div>
    </article>
  );
}

ArticleCard.propTypes = {
  article: PropTypes.shape(articleType).isRequired,
};

export default ArticleCard;
