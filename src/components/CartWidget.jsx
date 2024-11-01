import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart" className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      <span className="cart-count">3</span>
    </Link>
  );
};

export default CartWidget;
