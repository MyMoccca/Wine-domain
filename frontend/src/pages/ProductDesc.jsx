import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import connexion from "../services/connexion";

function ProductDesc() {
  const [product, setProduct] = useState();
  const { id } = useParams();

  const getProduct = async () => {
    const productData = await connexion.get(`/vins/${id}`);
    try {
      if (productData) {
        setProduct(productData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="container">
      {product && (
        <>
          <Helmet>
            <title>{product.winename} - notre Blog</title>
            <meta name="description" content={product.details} />
          </Helmet>
          <div className="details-product-container">
            <div className="img-container">
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
                  product.src
                }`}
                alt={product.alt}
                className="w-100 rounded-2 shadow-sm"
              />
            </div>
            <div className="text-container">
              <h1 className="text-center">{product.winename}</h1>
              <h3 className="text-center">{product.year}</h3>
              <h4 className="text-center">{product.type}</h4>
              <h5 className="text-center"> {product.variety}</h5>
              <h6 className="description-product"> {product.details}</h6>
              <p className="price"> {product.price}</p>
              <Link to="/contact" className="btn-articles">
                <span className="btn__circle red__cercle" />
                <span className="btn__white-circle">
                  <svg id="icon-arrow-right" viewBox="0 0 21 12">
                    <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z" />
                  </svg>
                </span>
                <span className="btn__text"> Commander le vin</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductDesc;
