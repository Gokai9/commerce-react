import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Checkout from "./components/CheckoutForm/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import { useEffect, useState } from "react";
import commerce from "./lib/commerce";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  console.log(cart);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    console.log(data);
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddtoCart = async (id, quantity) => {
    const { cart } = await commerce.cart.add(id, quantity);
    setCart(cart);
  };

  const handleUpdateCart = async (id, quantity) => {
    const { cart } = await commerce.cart.update(id, { quantity });
    setCart(cart);
  };

  const handleRemoveCart = async (id) => {
    const { cart } = await commerce.cart.remove(id);
    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar total={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddtoCart={handleAddtoCart} />
          </Route>
          <Route path="/cart">
            <Cart
              cart={cart}
              onUpdate={handleUpdateCart}
              onRemove={handleRemoveCart}
              onEmpty={handleEmptyCart}
            />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
