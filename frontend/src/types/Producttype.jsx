import PropTypes from "prop-types";

const productType = {
  id: PropTypes.number,
  vinename: PropTypes.string.isRequired,
  year: PropTypes.string,
  type: PropTypes.string,
  variety: PropTypes.string,
  details: PropTypes.string,
  price: PropTypes.string,
  wineimage: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
};

export default productType;
