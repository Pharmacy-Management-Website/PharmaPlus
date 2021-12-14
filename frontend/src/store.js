import {
	createStore,
	combineReducers,
	applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { medicinesReducer } from './reducers/medicineReducer.js';

import { userReducer } from './reducers/userReducer.js';

const reducer = combineReducers({
	user: userReducer,
	medicines: medicinesReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
