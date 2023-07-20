import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import connexion from "../../services/connexion";
import AdminArticleCard from "../../components/AdminArticleCard";
import AdminProductCard from "../../components/AdminProductCard";

function Admindashboard() {
  const [articles, setArticles] = useState([]);
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const productsData = await connexion.get("/vins");
    try {
      if (productsData) {
        setProducts(productsData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const getArticles = async () => {
    const articlesData = await connexion.get("/articles");
    try {
      if (articlesData) {
        setArticles(articlesData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className="admin-container">
      <section className="admin-articles-container">
        <h1>Mes derniers articles </h1>
        <div className="articles-container">
          {articles.slice(1, 4).map((article) => (
            <AdminArticleCard article={article} key={article.id} />
          ))}
          <Link to="/admin/articles" className="btn-add">
            Ajouter un article
          </Link>
        </div>
      </section>
      <div className="products-colonne">
        <h1 className="produits-title">Mes derniers produits ajoutés </h1>
        <section className="products-container">
          <div className="products-container">
            {products.slice(1, 4).map((product) => (
              <AdminProductCard product={product} key={product.id} />
            ))}
          </div>
        </section>
        <Link to="/admin/vins" className="btn-add">
          Ajouter un produit
        </Link>
      </div>
    </div>
  );
}

export default Admindashboard;

/**
 * title
 * subtitle
 * resume
 * text
 * author => admin en auto
 * id en auto
 * images
 *  text alt
 * tags => select depuis la BDD
 */
