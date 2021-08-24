import { Link } from "react-router-dom";
import { WrapCart, NotEmptyWrap } from "./Cart.styled";
import CartItem from "./CartItem";

const Cart = ({ cart, onUpdate, onRemove, onEmpty }) => {
  if (!cart.line_items) return "Loading";
  const EmptyCart = () => {
    return <h1>kosong</h1>;
  };
  const NotEmptyCart = () => (
    <NotEmptyWrap>
      <div className="container">
        {cart.line_items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onUpdate={onUpdate}
            onRemove={onRemove}
          />
        ))}
      </div>
      <div>
        <p>Subtotal: {cart.subtotal.formatted_with_symbol}</p>
        <button className="btn a" onClick={() => onEmpty()}>
          Empty Cart
        </button>
        <button className="btn b">
          <Link to="/checkout" style={{ textDecoration: "none" }}>
            Checkout
          </Link>
        </button>
      </div>
    </NotEmptyWrap>
  );
  //console.log(cart.line_items.length);
  return (
    <WrapCart>
      <h2>Your shopping cart</h2>
      {true ? NotEmptyCart() : EmptyCart()}
    </WrapCart>
  );
};

export default Cart;
