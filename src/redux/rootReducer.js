import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './userReducer';
import cartReducer from './cart/cartReducer';
import cardContainerReducer from './cardContainer/cardContainerReducer';
import shopReducer from './shop/shopReducer';

const persistConfig = {
  key: 'root',
  storage, 
  whitelist: ["cart"],
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  cardContainer: cardContainerReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);