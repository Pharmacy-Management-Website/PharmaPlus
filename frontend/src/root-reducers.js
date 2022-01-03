import { combineReducers } from "redux";

import {
	managerLoginReducer,
	managerRegisterReducer
} from './reducers/userReducer.js';

import {
	medicinesReducer,
	medicineDetailsReducer,
	stockDetailsReducer,
	medStockDetailReducer,
	newMedicineReducer,
	newStockReducer,
	medicineDeleteReducer,
	medicineUpdateReducer,
	medicineStockUpdateReducer,
	medicineStockDeleteReducer
} from './reducers/medicineReducer.js';

import { cartReducer } from "./reducers/cartReducer.js";

const rootReducer = combineReducers({
	userLogin: managerLoginReducer,
	userRegister: managerRegisterReducer,
	medicines: medicinesReducer,
	medicineDetails: medicineDetailsReducer,
	stockDetails: stockDetailsReducer,
	medStockDetail: medStockDetailReducer,
	newMedicine: newMedicineReducer,
	newStock: newStockReducer,
	medicineDelete: medicineDeleteReducer,
	medicineUpdate: medicineUpdateReducer,
	medicineStockUpdate: medicineStockUpdateReducer,
	medicineStockDelete: medicineStockDeleteReducer,
	cart: cartReducer,
});

export default rootReducer;
