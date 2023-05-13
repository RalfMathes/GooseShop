import { combineReducers } from "redux";
import anchorElementReducer from "../redux/slices/anchorElementMenu/anchorElementMenu";
import shoppingCart from "./slices/shoppingCart/shoppingCart";
import storeItems from "./slices/storeItems/storeItems";

const rootReducer = combineReducers({
  anchorElementReducer,
  shoppingCart,
  storeItems,
});

export default rootReducer;
