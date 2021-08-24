import WrapCartItem from "./CartItem.styled";

const CartItem = ({ item, onUpdate, onRemove }) => {
  console.log(item);
  return (
    <WrapCartItem>
      <div>
        <img src={item.media.source} alt={item.name} />
        <div className="name">
          <p>{item.name}</p>
          <p>{item.line_total.formatted_with_symbol}</p>
        </div>
        <div className="container">
          <div className="btn-wrap">
            <button onClick={() => onUpdate(item.id, item.quantity - 1)}>
              -
            </button>
            <span>{item.quantity}</span>
            <button onClick={() => onUpdate(item.id, item.quantity + 1)}>
              +
            </button>
          </div>
          <button className="btn" onClick={() => onRemove(item.id)}>
            Remove
          </button>
        </div>
      </div>
    </WrapCartItem>
  );
};

export default CartItem;
