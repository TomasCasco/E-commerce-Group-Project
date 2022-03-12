const initialState = {
  favorites: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return state;
    case "REMOVE_FROM_FAVORITES":
      return state;
    default:
      return state;
  }
};

export default favoritesReducer;
