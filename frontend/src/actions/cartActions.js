import {
	ADD_TO_CART,
	REMOVE_CART_ITEM,
} from "../constants/cartConstants.js";
import axios from "axios";

export const addMedToCart = (id, quantity) => async (dispatch, getState) => {
	const { data } = await axios.get(`/medapi/medicine/${id}`);
	dispatch({
		type: ADD_TO_CART,
		payload: {
			medicine: data.medicine._id,
			name: data.medicine.name,
			price: data.medicine.stockDetails[0].price,
			inStock: data.medicine.stockDetails[0].inStock,
			quantity,
		}
	});
	localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
	dispatch({
		type: ADD_TO_CART,
		payload: item,
	});
};

export const removeMedFromCart = (id) => async (dispatch, getState) => {
	dispatch({
		type: REMOVE_CART_ITEM,
		payload: id,
	});
	localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}
