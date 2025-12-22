import Product from "../Product/Product";
import products from "./data";

const ProductsTable = () => {
    const showProduct = (product) => (<Product key={product.id} product ={product}/>)
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>{products.map(showProduct)}</tbody>
    </table>
  );
};

export default ProductsTable;
