// ProductCard.jsx
import PropTypes from 'prop-types';

function ProductCard(props) {
  return (
    <div className="border p-4 shadow-lg rounded-lg">
      <img src={props.product.thumbnail} alt={props.product.name} className="mb-4" />
      <h3 className="text-xl font-semibold">{props.product.name}</h3>
      <p className="text-lg font-bold text-blue-500">{props.product.price} €</p>
      <p className="text-sm text-gray-600">
        {props.product.available ? "Verfügbar" : "Nicht verfügbar"}
      </p>
    </div>
  );
}
ProductCard.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    available: PropTypes.bool.isRequired
  }).isRequired
};

export default ProductCard;
