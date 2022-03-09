const initialState = {
  products: [],
  loading: false,
  search: false,
  searchValue: null,
  brands: [],
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

    case "RESET_SEARCH":
      return {
        ...state,
        search: action.payload.search,
        searchValue: action.payload.searchValue,
      };

    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload.search,
        searchValue: action.payload.searchValue,
      };

    case "GET_ALL_BRANDS":
      return {
        ...state,
        brands: action.payload,
      };

    default:
      return state;
  }
};

export default productsReducer;
