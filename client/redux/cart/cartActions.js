import { client } from "../../apolloClient/apolloClient";
import { mutationEditCart } from "../../apolloClient/mutations";

export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

export const setCartFromLocalStorage = (cart) => {
  return {
    type: "SET_CART_LOCAL_STORAGE",
    payload: cart,
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: itemId,
  };
};

export const addItemQty = (itemId) => {
  return {
    type: "ADD_ITEM_QTY",
    payload: itemId,
  };
};

export const subtractItemQty = (itemId) => {
  return {
    type: "SUBTRACT_ITEM_QTY",
    payload: itemId,
  };
};

export const resetCart = () => {
  return {
    type: "RESET_CART",
  };
};
