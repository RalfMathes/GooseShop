import { combineReducers } from "redux";
import anchorElementReducer from "../redux/slices/anchorElementMenu/anchorElementMenu";
import shoppingCartReducer from "./slices/shoppingCart/shoppingCart";
import storeItemsReducer from "./slices/storeItems/storeItems";
import categoriesReducer from "./slices/categories/categories";
import collectionsReducer from "./slices/collections/collections";

const rootReducer = combineReducers({
  anchorElementReducer,
  shoppingCartReducer,
  storeItemsReducer,
  categoriesReducer,
  collectionsReducer,
});

export default rootReducer;
