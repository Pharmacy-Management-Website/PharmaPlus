import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { medicinesReducer } from './reducers/medicineReducer.js';
import { userReducer } from './reducers/userReducer.js';

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["user", "medicines"],
}

const rootReducer = combineReducers({
	user: userReducer,
	medicines: medicinesReducer,
});

export default persistReducer(persistConfig, rootReducer);

// export default reducer;
