import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import favoritesReducer from "./favorites/favoritesReducer";
import productsReducer from "./products/productsReducer";
import usersReducer from "./user/usersReducer";
import detailReducer from "./detail/detailReducer";

const rootReducer = combineReducers({
  cartReducer,
  favoritesReducer,
  productsReducer,
  usersReducer,
  detailReducer,
});

export default rootReducer;
