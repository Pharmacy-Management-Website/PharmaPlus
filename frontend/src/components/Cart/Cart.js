import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import ItemCard from "./ItemCard.js";
import {
	addMedToCart,
	removeMedFromCart,
	clearErrors,
} from '../../actions/cartActions';
import Loader from '../Utils/Loader/Loader';
import Title from "../Utils/Meta/Title";

const Cart = () => {

	const dispatch = useDispatch();
	const alert = useAlert();

	const { loading, error, cartItems } = useSelector((state) => state.cart);

	const increaseQuantity = (id, quantity, stock) => {
		const newQty = quantity + 1;
		if (stock <= quantity) {
			return;
		}
		dispatch(addMedToCart(id, newQty));
	};

	const decreaseQuantity = (id, quantity) => {
		const newQty = quantity - 1;
		if (1 >= quantity) {
			return;
		}
		dispatch(addMedToCart(id, newQty));
	};

	const deleteItemFromList = (id) => {
		dispatch(removeMedFromCart(id));
	};

	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}
	}, [error, alert, dispatch]);

	return (
		<Fragment>
			{
				loading ? (
					<Loader />
				) : (
					<Fragment>
						<Title title="Cart" />
						<div>
							<h2>Cart</h2>
							{
								cartItems.length === 0 ? (
									<div>Cart is empty</div>
								) : (
									<div>
										<p>Total Items: {cartItems.length}</p>
										{
											cartItems &&
											cartItems.map((item) => (
												<div>
													<ItemCard med={item} deleteItemFromList={deleteItemFromList} />
													<button
														onClick={() =>
															decreaseQuantity(item.medicine, item.qty)
														}
													>
														-
													</button>
													<input readOnly type="number" value={item.qty} />
													<button
														onClick={() =>
															increaseQuantity(
																item.medicine,
																item.qty,
																item.inStock
															)
														}
													>
														+
													</button>
												</div>
											))
										}
										<p>{`₹${cartItems.reduce(
											(acc, item) => acc + item.qty * item.price,
											0
										)}`}</p>
									</div>
								)
							}
							<Link to="/custinfo">
								Proceed
							</Link>
						</div>
					</Fragment>
				)
			}
		</Fragment>
	)
};

export default Cart;

