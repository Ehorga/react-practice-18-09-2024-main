const Product = (props) => {
    const {product:{title , price , quantity}} = props
    return (
        <tr>
            <td>{title}</td>
            <td>{price}uah</td>
            <td>{quantity}etc.</td>
        </tr>
    );
}

export default Product;
