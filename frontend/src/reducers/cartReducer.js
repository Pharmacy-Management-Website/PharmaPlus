import {
	ADD_TO_CART,
	REMOVE_CART_ITEM,
} from "../constants/cartConstants.js";

export const cartReducer = (state = { cartItems: [] }, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			const item = action.payload;
			const isItemExist = state.cartItems.find(
				(i) => i.medicine === item.medicine
			);
			if (isItemExist) {
				return {
					...state,
					cartItems: state.cartItems.map((i) =>
						i.medicine === isItemExist.medicine ? item : i
					),
				};
			} else {
				return {
					...state,
					cartItems: [...state.cartItems, item],
				};
			}
		case REMOVE_CART_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter((x) => x.medicine !== action.payload)
			};
		default:
			return state;
	}
};
