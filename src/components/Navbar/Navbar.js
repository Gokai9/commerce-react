import { WrapNav, CartPlus } from "./Navbar.styled";
import { FaSkullCrossbones } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ total }) => {
  console.log(total);
  return (
    <WrapNav>
      <h1>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          SkullShop <FaSkullCrossbones />
        </NavLink>
      </h1>
      <span className="notif">
        <Link to="/cart">
          <CartPlus />
        </Link>
        <span className="badge">{total}</span>
      </span>
    </WrapNav>
  );
};

export default Navbar;
