import { combineReducers } from "redux"
import cartReducer from "./cart/cartReducer"
import favoritesReducer from "./favorites/favoritesReducer"

const rootReducer = combineReducers({
  cartReducer,
  favoritesReducer
})

export default rootReducer;