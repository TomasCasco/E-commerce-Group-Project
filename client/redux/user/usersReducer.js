const initialState = {
  user: {},
  isLogged: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_LOGGED":
      return {
        ...state,
        isLogged: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
