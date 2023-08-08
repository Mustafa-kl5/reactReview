import { cartAction } from "../../store";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";

const ProductItem = (props) => {
  const { title, price, description } = props;
  const dispatch = useDispatch();
  const addItemHandler = () => {
    dispatch(
      cartAction.addItemToCart({
        title,
        price,
        description,
        quantity: 1,
        price,
      })
    );
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
