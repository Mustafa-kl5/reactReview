import classes from "./CartButton.module.css";
import { useSelector } from "react-redux";
const CartButton = (props) => {
  const itemQuantity = useSelector((state) => state.cart.cartItems.length);
  return (
    <button className={classes.button} onClick={props.cartButton}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemQuantity}</span>
    </button>
  );
};

export default CartButton;
