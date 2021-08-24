import Product from "./Product/Product";
import WrapProd from "./Products.styled";

// const products = [
//   { id: 1, name: "Book", description: "A great book", price: "$4" },
//   { id: 2, name: "Laptop", description: "Asux Laptop", price: "$100" },
// ];

const Products = ({ products, onAddtoCart }) => {
  return (
    <WrapProd>
      {products.map((product) => (
        <Product key={product.id} product={product} onAddtoCart={onAddtoCart} />
      ))}
    </WrapProd>
  );
};

export default Products;
