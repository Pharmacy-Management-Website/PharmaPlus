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

export const medicinesReducer = (state = { medicines: [] }, action) => {
	switch (action.type) {
		case ALL_MEDICINE_REQUEST:
			return {
				loading: true,
				medicines: [],
			};
		case ALL_MEDICINE_SUCCESS:
			return {
				loading: false,
				medicines: action.payload.medicines,
				medCounts: action.payload.medCounts,
				resultPerPage: action.payload.resultPerPage,
				filteredMedicinesCount: action.payload.filteredMedicinesCount,
			};
		case ALL_MEDICINE_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload
			};
		case CLEAR_ERRORS:
			return {
				...state,
				error: null
			};
		default:
			return state;
	}
};

export const medicineDetailsReducer = (state = { medicine: {} }, action) => {
	switch (action.type) {
		case MEDICINE_DETAILS_REQUEST:
			return {
				loading: true,
				...state,
			};
		case MEDICINE_DETAILS_SUCCESS:
			return {
				loading: false,
				medicine: action.payload,
			};
		case MEDICINE_DETAILS_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload
			};
		case CLEAR_ERRORS:
			return {
				...state,
				error: null
			};
		default:
			return state;
	}
};

export const stockDetailsReducer = (state = { stock: [] }, action) => {
	switch (action.type) {
		case STOCK_DETAILS_REQUEST:
			return {
				loading: true,
				...state,
			};
		case STOCK_DETAILS_SUCCESS:
			return {
				loading: false,
				stock: action.payload,
			};
		case STOCK_DETAILS_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload
			};
		case CLEAR_ERRORS:
			return {
				...state,
				error: null
			};
		default:
			return state;
	}
};
