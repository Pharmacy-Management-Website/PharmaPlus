import { combineReducers } from "redux";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import {
	managerLoginReducer,
	managerRegisterReducer
} from './reducers/userReducer.js';
import { medicinesReducer } from './reducers/medicineReducer.js';

// const persistConfig = {
// 	key: "root",
// 	storage,
// 	whitelist: ["user", "medicines"],
// }

const rootReducer = combineReducers({
	userLogin: managerLoginReducer,
	userRegister: managerRegisterReducer,
	medicines: medicinesReducer,
});

// export default persistReducer(persistConfig, rootReducer);
export default rootReducer;

// export default reducer;
