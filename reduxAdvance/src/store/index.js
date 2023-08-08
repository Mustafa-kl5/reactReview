import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCartState = { cartItems: [], showCart: true, notification: null };

const cartReducer = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    showCart(state) {
      state.showCart = !state.showCart;
    },
    addItemToCart(state, action) {
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.title === action.payload.title
      );

      if (existingItemIndex === -1) {
        state.cartItems.push(action.payload);
      } else {
        state.cartItems[existingItemIndex].quantity++;
      }
    },
    increaseItemQuantity(state, action) {
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.title === action.payload.title
      );
      state.cartItems[existingItemIndex].quantity++;
    },
    decreaseItemQuantity(state, action) {
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.title === action.payload.title
      );
      if (state.cartItems[existingItemIndex].quantity === 1) {
        state.cartItems.splice(existingItemIndex, 1);
      } else {
        state.cartItems[existingItemIndex].quantity--;
      }
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartReducer.reducer,
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      cartAction.showNotification({
        status: "pending",
        title: "sending...",
        message: "sending cart data",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-redux-eb861-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("sending cart data failed");
      }
    };
    try {
      await sendRequest();
      dispatch(
        cartAction.showNotification({
          status: "success",
          title: "Success!",
          message: "sending cart data Success",
        })
      );
    } catch (error) {
      dispatch(
        cartAction.showNotification({
          status: "error",
          title: "Error!",
          message: "sending cart data failed",
        })
      );
    }
  };
};

export const cartAction = cartReducer.actions;
export default store;
