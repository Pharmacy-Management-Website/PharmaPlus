import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOAD_ADMIN_REQUEST,
	LOAD_ADMIN_SUCCESS,
	LOAD_ADMIN_FAIL,
	CLEAR_ERRORS
} from '../constants/userConstants.js';

export const userReducer = (state = { user: {} }, action) => {
	switch (action.type) {
		case LOGIN_REQUEST:
		case LOAD_ADMIN_REQUEST:
			return {
				loading: true,
				isAuthenticated: false,
			};
		case LOGIN_SUCCESS:
		case LOAD_ADMIN_SUCCESS:
			return {
				...state,
				loading: false,
				isAuthenticated: true,
				admin: action.payload,
			};
		case LOGIN_FAIL:
		case LOAD_ADMIN_FAIL:
			return {
				...state,
				loading: false,
				isAuthenticated: false,
				admin: null,
				error: action.payload,
			};
		case CLEAR_ERRORS:
			return {
				...state,
				error: null,
			};
		default:
			return state;
	}
}
