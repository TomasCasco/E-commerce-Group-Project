import { combineReducers } from "redux"
import cartReducer from "./cart/cartReducer"

const rootReducer = combineReducers({
    cartReducer
})

export default rootReducer;