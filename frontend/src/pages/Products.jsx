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
          name="description"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut repellendus deleniti nam corrupti eius ipsam accusantium pariatur nesciunt eos, perspiciatis saepe eveniet. Ut aperiam, velit sit alias eaque dignissimos quis."
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
