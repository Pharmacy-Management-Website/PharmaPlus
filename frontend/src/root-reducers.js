import { combineReducers } from "redux";

import {
	managerLoginReducer,
	managerRegisterReducer
} from './reducers/userReducer.js';

import {
	medicinesReducer,
	medicineDetailsReducer,
	stockDetailsReducer,
	newMedicineReducer,
	newStockReducer
} from './reducers/medicineReducer.js';

import { cartReducer } from "./reducers/cartReducer.js";

const rootReducer = combineReducers({
	userLogin: managerLoginReducer,
	userRegister: managerRegisterReducer,
	medicines: medicinesReducer,
	medicineDetails: medicineDetailsReducer,
	stockDetails: stockDetailsReducer,
	newMedicine: newMedicineReducer,
	newStock: newStockReducer,
	cart: cartReducer,
});

export default rootReducer;
