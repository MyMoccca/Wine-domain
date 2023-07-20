import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import productType from "../types/ProductType";

function ProductCard({ product }) {
  return (
    <article className="user-product-container">
      <div className="l">
        <div className="">
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
              product.src
            }`}
            alt={product.alt}
            className=""
          />
        </div>
        <h2 className="text-center">{product.winename}</h2>
        <h3 className="text-center">{product.year}</h3>
        <h4 className="text-center">{product.type}</h4>
        <h5 className="text-center">{product.variety}</h5>
        <div className="">
          <Link to={`/vins/${product.id}`} className="btn btn-secondary w-100">
            Découvrir le vin
          </Link>
        </div>
      </div>
    </article>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape(productType).isRequired,
};

export default ProductCard;
