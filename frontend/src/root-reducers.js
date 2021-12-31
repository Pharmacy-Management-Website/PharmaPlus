import { combineReducers } from "redux";

import {
	managerLoginReducer,
	managerRegisterReducer
} from './reducers/userReducer.js';

import { medicinesReducer } from './reducers/medicineReducer.js';

import { cartReducer } from "./reducers/cartReducer.js";

const rootReducer = combineReducers({
	userLogin: managerLoginReducer,
	userRegister: managerRegisterReducer,
	medicines: medicinesReducer,
	cart: cartReducer,
});

export default rootReducer;
