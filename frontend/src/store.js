import {
	createStore,
	combineReducers,
	applyMiddleware,
} from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './root-reducers';

const initialState = {
};

const middleware = [thunk];

export const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware)),
);

export const persistor = persistStore(store);

export default { store, persistor };
