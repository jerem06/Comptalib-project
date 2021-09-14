import { createStore, combineReducers } from 'redux';
import idReducer from './reducers/getIdReducer';
const rootReducer = combineReducers(
{ id: idReducer }
);
const configureStore = () => {
return createStore(rootReducer);
}
export default configureStore;