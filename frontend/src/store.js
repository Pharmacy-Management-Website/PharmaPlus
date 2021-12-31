import {
	createStore,
	applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './root-reducers';

const managerInfoFromStorage = localStorage.getItem('datamanager')
	? JSON.parse(localStorage.getItem('datamanager'))
	: null

const initialState = {
	userLogin: {
		manager: managerInfoFromStorage,
	}
};

const middleware = [thunk];

export const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware)),
);
