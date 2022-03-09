import { combineReducers } from "redux"
import cartReducer from "./cart/cartReducer"
import favoritesReducer from "./favorites/favoritesReducer"
import productsReducer from "./products/productsReducer"
import usersReducer from "./user/usersReducer"

const rootReducer = combineReducers({
  cartReducer,
  favoritesReducer,
  productsReducer,
  usersReducer
})

export default rootReducer;