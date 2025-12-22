import PropTypes from 'prop-types'
const Product = (props) => {
  const {
    product: { title, price, quantity },
  } = props;

  return (
    <tr>
      <td>{title}</td>
      <td>{price} uah</td>
      <td>{quantity || 0} etc.</td>
    </tr>
  );
};
Product.propTypes={
  product : PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number,
  })
}
export default Product;
