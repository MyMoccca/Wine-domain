import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import connexion from "../services/connexion";
import ProductCard from "../components/ProductCard";

function Products() {
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

  return (
    <div>
      <Helmet>
        <title>Vins domaine Esclarmonde</title>
        <meta
          name="Vins domaine Esclarmonde"
          content="Vigneron independant à Paziols, vin bio nature, Fitou"
        />
      </Helmet>
      <div className="main-products-wrapper">
        <h1 className="products-title">Vins Domaine Esclarmonde</h1>
        <section className="user-products-wrapper">
          <div className="user-products-container">
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Products;
