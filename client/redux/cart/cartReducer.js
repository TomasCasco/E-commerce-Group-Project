const initialState = {
    products: [
      { id: 1, name: "producto1", price: 100 },
      { id: 2, name: "producto2", price: 200 },
      { id: 3, name: "producto3", price: 300 },
      { id: 4, name: "producto4", price: 400 },
      { id: 5, name: "producto5", price: 500 },
      { id: 6, name: "producto6", price: 600 },
    ],
    cart: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
          //Item data from products array
          const item = state.products.find(
            (product) => product.id === action.payload.id
          );
          // Check if Item is in cart already
          const inCart = state.cart.find((item) =>
            item.id === action.payload.id ? true : false
          );
    
          return {
            ...state,
            cart: inCart
              ? state.cart.map((item) =>
                  item.id === action.payload.id
                    ? { ...item, qty: item.qty + 1 }
                    : item
                )
              : [...state.cart, { ...item, qty: 1 }],
          };
        case 'REMOVE_FROM_CART':
          return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload.id),
          };
        case 'ADJUST_ITEM_QTY':
          return {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            ),
          };

        case 'SUBTRACT_ITEM_QTY':
          return {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty - 1 }
                : item
            ),
          };
        case 'LOAD_CURRENT_ITEM':
          return {
            ...state,
            currentItem: action.payload,
          };
        default:
          return state;
      }
    };
  
  
  export default cartReducer;