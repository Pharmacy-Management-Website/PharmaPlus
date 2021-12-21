import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOAD_ADMIN_REQUEST,
	LOAD_ADMIN_SUCCESS,
	LOAD_ADMIN_FAIL,
	REGISTER_USER_REQUEST,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_FAIL,
	LOGOUT_SUCCESS,
	LOGOUT_FAIL,
	CLEAR_ERRORS
} from '../constants/userConstants.js';

export const userReducer = (state = { user: {} }, action) => {
	switch (action.type) {
		case LOGIN_REQUEST:
		case LOAD_ADMIN_REQUEST:
		case REGISTER_USER_REQUEST:
			return {
				loading: true,
				isAuthenticated: false,
			};
		case LOGIN_SUCCESS:
		case LOAD_ADMIN_SUCCESS:
		case REGISTER_USER_SUCCESS:
			return {
				...state,
				loading: false,
				isAuthenticated: true,
				admin: action.payload,
			};
		case LOGOUT_SUCCESS:
			return {
				loading: false,
				user: null,
				isAuthenticated: false,
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
		case REGISTER_USER_FAIL:
			return {
				...state,
				loading: false,
				isAuthenticated: false,
				user: null,
				error: action.payload,
			};
		case LOGOUT_FAIL:
			return {
				...state,
				loading: false,
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
