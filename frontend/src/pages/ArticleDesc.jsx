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
            <meta name={article.resume} content={article.resume} />
          </Helmet>
          <div className="one-article-container">
            <h1 className="">{article.title}</h1>s
            <div className="image-one-article">
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
                  article.src
                }`}
                alt={article.alt}
                className="header-img-blog"
              />
            </div>
            <h3 className="">{article.subtitle}</h3>
            <div className="">
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
