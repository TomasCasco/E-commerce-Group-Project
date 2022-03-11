const initialState = {
  products: [],
  productById: {},
  loading: false,
  brands: [],
  categories: [],
  suggestions: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return {
        ...state,
        products: action.payload.products,
      };

    case "SET_LOADING_PRODUCTS":
      return {
        ...state,
        loading: action.payload,
      };
    case "GET_ALL_BRANDS":
      return {
        ...state,
        brands: action.payload,
      };
    case "GET_PRODUCT_BY_ID":
      return {
        ...state,
        productById: action.payload,
      };
    case "GET_ALL_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };

    case "SUGGESTION":
      return {
        ...state,
        suggestions: action.payload,
      };

    default:
      return state;
  }
};

export default productsReducer;
