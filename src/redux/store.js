import{createStore,combineReducers,applyMiddleware} from 'redux';
import products from './Reducer/products';
import users from './Reducer/users';
import {plusUser,plusOrminus} from './middleware/crud';

 const reducer=combineReducers({products,users});
 const store=createStore(
     reducer
     ,applyMiddleware(
         plusUser,
         plusOrminus
         ));
 window.store=store;
 export default store;