import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { cartAction, sendCartData } from "./store";
import Notification from "./components/UI/Notification";
let isInitial = true;
function App() {
  const show = useSelector((state) => state.cart.showCart);
  const cart = useSelector((state) => state.cart.cartItems);
  const showNotification = useSelector((state) => state.cart.notification);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <>
      {showNotification && (
        <Notification
          status={showNotification.status}
          title={showNotification.title}
          message={showNotification.message}
        />
      )}
      <Layout>
        {show && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
