import WrapPro from "./Product.styled";
import { FaCartPlus } from "react-icons/fa";

const Product = ({ product, onAddtoCart }) => {
  return (
    <WrapPro>
      <img src={product.media.source} alt={product.name} />
      <div className="container">
        <h4>{product.name}</h4>
        <span>{product.price.formatted_with_symbol}</span>
      </div>
      <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
      <button onClick={() => onAddtoCart(product.id, 1)}>
        <FaCartPlus />
      </button>
    </WrapPro>
  );
};

export default Product;
