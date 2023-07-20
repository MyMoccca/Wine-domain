import React from "react";
import PropTypes from "prop-types";
import productType from "../types/ProductType";

function AdminProductCard({ product }) {
  return (
    <article className="card-container">
      <div className="admin-product-container">
        <div className="picture-container">
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
              product.src
            }`}
            alt={product.alt}
            className="admin-product-picture"
          />
        </div>
        <div className="product-text">
          <h2 className="admin-product-title">{product.winename}</h2>
          <h3 className="admin-product-text">{product.year}</h3>
          <h4 className="admin-product-text">{product.type}</h4>
          <h5 className="admin-product-text">{product.variety}</h5>
        </div>
      </div>
    </article>
  );
}

AdminProductCard.propTypes = {
  product: PropTypes.shape(productType).isRequired,
};

export default AdminProductCard;
