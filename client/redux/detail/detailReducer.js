const initialState = {
  product: {},
};
const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT_BY_ID":
      return {
        ...state,
        product: action.payload,
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

export default detailReducer;
