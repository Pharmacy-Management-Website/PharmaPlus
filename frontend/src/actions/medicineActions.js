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
	CREATE_MEDICINE_REQUEST,
	CREATE_MEDICINE_SUCCESS,
	CREATE_MEDICINE_FAIL,
	// CREATE_MEDICINE_RESET,
	ADD_MEDICINE_STOCK_REQUEST,
	ADD_MEDICINE_STOCK_SUCCESS,
	ADD_MEDICINE_STOCK_FAIL,
	ADD_MEDICINE_STOCK_RESET,
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

// ? Create new Medicine
export const createMedicine = (med_id, name, composition) => async (dispatch, getState) => {
	try {
		dispatch({ type: CREATE_MEDICINE_REQUEST });
		const { userLogin: { manager } } = getState();
		const config = {
			headers: {
				Authorization: `${manager.token}`,
			},
		};
		const { data } = await axios.post(`/medapi/addmedicine`,
			{ med_id, name, composition },
			config
		);
		dispatch({
			type: CREATE_MEDICINE_SUCCESS,
			payload: data
		});
	} catch (error) {
		dispatch({ type: CREATE_MEDICINE_FAIL, payload: error.message });
	}
};

// ? Add medicine stock details
export const addMedicineStock = (id, price, inStock) => async (dispatch, getState) => {
	try {
		dispatch({ type: ADD_MEDICINE_STOCK_REQUEST });
		const { userLogin: { manager } } = getState();
		const config = {
			headers: {
				Authorization: `${manager.token}`,
			},
		};
		const { data } = await axios.post(`/medapi/addstockdetails/${id}`,
			{ price, inStock },
			config
		);
		dispatch({
			type: ADD_MEDICINE_STOCK_SUCCESS,
			payload: data
		});
	} catch (error) {
		dispatch({ type: ADD_MEDICINE_STOCK_FAIL, payload: error.message });
	}
};

// ? Clearing Errors
export const clearErrors = () => async (dispatch) => {
	dispatch({ type: CLEAR_ERRORS });
};
