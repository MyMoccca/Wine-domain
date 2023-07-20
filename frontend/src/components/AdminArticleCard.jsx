import React from "react";
import PropTypes from "prop-types";
import articleType from "../types/ArticleType";

function AdminArticleCard({ article }) {
  return (
    <article className="">
      <div className="item-blog-container">
        <div className="item-text-box">
          <h3 className="">{article.title}</h3>
          <h6 className="">{article.subtitle}</h6>
        </div>

        <div className="row">
          <div className="col-6">
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
                article.src
              }`}
              alt={article.alt}
              className="admin-article-picture"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

AdminArticleCard.propTypes = {
  article: PropTypes.shape(articleType).isRequired,
};

export default AdminArticleCard;
