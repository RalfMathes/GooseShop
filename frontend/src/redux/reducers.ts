import { combineReducers } from "redux";
import anchorElementReducer from "../redux/slices/anchorElementMenu/anchorElementMenu";
import shoppingCart from "./slices/shoppingCart/shoppingCart";

const rootReducer = combineReducers({
  anchorElementReducer,
  shoppingCart,
});

export default rootReducer;
