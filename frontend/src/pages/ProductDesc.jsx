import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
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
            <h3 className="text-center">{product.year}</h3>
            <h4 className="text-center">{product.type}</h4>
            <h5 className="text-center">{product.variety}</h5>
            <h5 className="text-center">{product.price}</h5>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductDesc;
