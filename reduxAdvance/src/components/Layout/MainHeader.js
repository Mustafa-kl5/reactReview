import { cartAction } from "../../store";
import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import { useDispatch } from "react-redux";

const MainHeader = (props) => {
  const dispatch = useDispatch();
  const buttonHandler = () => {
    dispatch(cartAction.showCart());
  };
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton cartButton={buttonHandler} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
