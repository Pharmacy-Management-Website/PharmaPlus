import {
	ALL_MEDICINE_REQUEST,
	ALL_MEDICINE_SUCCESS,
	ALL_MEDICINE_FAIL,
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
