import {
	ALL_MEDICINE_REQUEST,
	ALL_MEDICINE_SUCCESS,
	ALL_MEDICINE_FAIL,
	CLEAR_ERRORS
} from '../constants/medicineConstants.js';
import axios from 'axios';

// ? All medicines
export const allMedicines = () => async (dispatch) => {
	try {
		dispatch({ type: ALL_MEDICINE_REQUEST });
		const { data } = await axios.get('/medapi/medicines');
		dispatch({
			type: ALL_MEDICINE_SUCCESS,
			payload: data
		});
	} catch (error) {
		dispatch({ type: ALL_MEDICINE_FAIL, payload: error.message });
	}
};

// ? Clearing Errors
export const clearErrors = () => async (dispatch) => {
	dispatch({ type: CLEAR_ERRORS });
};
