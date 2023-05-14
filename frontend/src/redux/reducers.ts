import { combineReducers } from "redux";
import shoppingCartReducer from "./slices/shoppingCart/shoppingCart";
import storeItemsReducer from "./slices/storeItems/storeItems";
import categoriesReducer from "./slices/categories/categories";
import collectionsReducer from "./slices/collections/collections";

const rootReducer = combineReducers({
  shoppingCartReducer,
  storeItemsReducer,
  categoriesReducer,
  collectionsReducer,
});

export default rootReducer;
