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
            // eslint-disable-next-line prettier/prettier
            src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
              product.src
              // eslint-disable-next-line prettier/prettier
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
          <Link to={`/vins/${product.id}`} className="btn-articles">
            <span className="btn__circle" />
            <span className="btn__white-circle">
              <svg id="icon-arrow-right" viewBox="0 0 21 12">
                <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z" />
              </svg>
            </span>
            <span className="btn__text"> Découvrir le vin</span>
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
