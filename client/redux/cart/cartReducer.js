const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { product: action.payload, qty: 1 }],
      };
    case "RESET_CART":
      return {
        ...state,
        cart: [],
      };
    case "SET_CART_LOCAL_STORAGE":
      return {
        ...state,
        cart: action.payload,
      };

    case "REMOVE_FROM_CART":
      const cartFiltered = [
        ...state.cart.filter((el) => el.product._id !== action.payload),
      ];
      return {
        ...state,
        cart: cartFiltered,
      };
    case "ADD_ITEM_QTY":
      const cartAddItemQty = [
        ...state.cart.map((el) => {
          if (el.product._id === action.payload) {
            el.qty = el.qty + 1;
            return el;
          }
          return el;
        }),
      ];
      return {
        ...state,
        cart: cartAddItemQty,
      };
    case "SUBTRACT_ITEM_QTY":
      const cartSubstractItemQty = [
        ...state.cart.map((el) => {
          if (el.product._id === action.payload) {
            el.qty !== 1 ? (el.qty = el.qty - 1) : null;
            return el;
          }
          return el;
        }),
      ];
      return {
        ...state,
        cart: cartSubstractItemQty,
      };

    default:
      return state;
  }
};

export default cartReducer;
