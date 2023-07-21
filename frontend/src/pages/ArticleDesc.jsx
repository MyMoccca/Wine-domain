import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import connexion from "../services/connexion";

function ArticleDesc() {
  const [article, setArticle] = useState();
  const { id } = useParams();

  const getArticle = async () => {
    const articleData = await connexion.get(`/articles/${id}`);
    try {
      if (articleData) {
        setArticle(articleData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <div className="desc-container-details">
      {article && (
        <>
          <Helmet>
            <title>{article.title} - notre Blog</title>
            <meta name="description" content={article.resume} />
          </Helmet>
          <div className="one-article-container">
            <div className="image-one-article">
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
                  article.src
                }`}
                alt={article.alt}
                className=""
              />
            </div>
            <h2 className="">{article.title}</h2>
            <h4 className="">{article.subtitle}</h4>
            <div className="">
              <div className="">
                <h6 className="">{article.resume}</h6>
              </div>
              <div className="">
                <p>{article.text}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ArticleDesc;
