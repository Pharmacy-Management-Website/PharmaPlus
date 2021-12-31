import {
	ALL_MEDICINE_REQUEST,
	ALL_MEDICINE_SUCCESS,
	ALL_MEDICINE_FAIL,
	MEDICINE_DETAILS_REQUEST,
	MEDICINE_DETAILS_SUCCESS,
	MEDICINE_DETAILS_FAIL,
	STOCK_DETAILS_REQUEST,
	STOCK_DETAILS_SUCCESS,
	STOCK_DETAILS_FAIL,
	CLEAR_ERRORS
} from '../constants/medicineConstants.js';
import axios from 'axios';

// ? All medicines
export const allMedicines = (keyword = "", currentPage = 1) => async (dispatch) => {
	try {
		dispatch({ type: ALL_MEDICINE_REQUEST });
		let link = `/medapi/medicines?keyword=${keyword}&page=${currentPage}`;
		const { data } = await axios.get(link);
		dispatch({
			type: ALL_MEDICINE_SUCCESS,
			payload: data
		});
	} catch (error) {
		dispatch({ type: ALL_MEDICINE_FAIL, payload: error.message });
	}
};

export const getMedicineDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: MEDICINE_DETAILS_REQUEST });
		const { data } = await axios.get(`/medapi/medicine/${id}`);
		dispatch({
			type: MEDICINE_DETAILS_SUCCESS,
			payload: data.medicine
		});
	} catch (error) {
		dispatch({ type: MEDICINE_DETAILS_FAIL, payload: error.message });
	}
};

// ? Medicine stock details
export const getMedicineStockDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: STOCK_DETAILS_REQUEST });
		const { data } = await axios.get(`/medapi/medicine/${id}`);
		dispatch({
			type: STOCK_DETAILS_SUCCESS,
			payload: data.medicine.stockDetails
		});
	} catch (error) {
		dispatch({ type: STOCK_DETAILS_FAIL, payload: error.message });
	}
};

// ? Clearing Errors
export const clearErrors = () => async (dispatch) => {
	dispatch({ type: CLEAR_ERRORS });
};
