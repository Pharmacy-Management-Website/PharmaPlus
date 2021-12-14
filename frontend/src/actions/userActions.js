import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOAD_ADMIN_REQUEST,
	LOAD_ADMIN_SUCCESS,
	LOAD_ADMIN_FAIL,
	CLEAR_ERRORS
} from '../constants/userConstants.js';
import axios from 'axios';

// ? Login
export const login = (email, password) => async dispatch => {
	try {
		dispatch({ type: LOGIN_REQUEST });
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		}
		const { data } = await axios.post(
			`/auth/login`,
			{ email, password },
			config
		);
		dispatch({
			type: LOGIN_SUCCESS,
			payload: data.user
		});
	} catch (err) {
		dispatch({ type: LOGIN_FAIL, payload: err.response.data.msg });
	}
};


