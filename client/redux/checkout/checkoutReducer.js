const initialState = {
  bills: [],
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BILLS":
      return {
        ...state,
        bills: action.payload,
      };
      case "GET_DETAIL_BILLS":
      return {
        ...state,
        bills: action.payload,
      };


    default:
      return { ...state };
  }
};
