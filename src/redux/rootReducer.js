import { combineReducers } from 'redux';
import itemReducer from './item/itemReducer';
import itemsReducer from './items/itemsReducer';
import userReducer from './users/userReducer';
import userRegisterReducer from './users/userRegisterReducer';
import favouriteReducer from './favourites/favouriteReducer';
import getFavReducer from './favourites/getFavReducer';

const rootReducer = combineReducers({
  items: itemsReducer,
  item: itemReducer,
  user: userReducer,
  signup: userRegisterReducer,
  favourites: favouriteReducer,
  getFavs: getFavReducer,
});

export default rootReducer;
