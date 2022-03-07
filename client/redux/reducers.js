import { combineReducers } from "redux"
import cartReducer from "./cart/cartReducer"
import favoritesReducer from "./favorites/favoritesReducer"
import productsReducer from "./products/productsReducer"

const rootReducer = combineReducers({
  cartReducer,
  favoritesReducer,
  productsReducer
})

export default rootReducer;