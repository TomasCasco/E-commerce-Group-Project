const initialState = {
  favorites: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FAVS_LOCAL_STORAGE":
      return {
        ...state,
        favorites: action.payload,
      };
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "REMOVE_FROM_FAVORITES":
      const favoriteFiltered = [
        ...state.favorites.filter((el) => el?._id !== action.payload.id),
      ];
      return {
        ...state,
        favorites: favoriteFiltered,
      };
    default:
      return state;
  }
};

export default favoritesReducer;
