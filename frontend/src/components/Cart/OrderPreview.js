import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import { Link, useNavigate } from 'react-router-dom';
import { clearErrors, newInvoice } from '../../actions/invoiceActions';
import { CART_RESET } from '../../constants/cartConstants';
import Loader from "../Utils/Loader/Loader";
import Title from "../Utils/Meta/Title";

const OrderPreview = () => {

	const dispatch = useDispatch();
	const alert = useAlert();
	const navigate = useNavigate();

	const { loading, error, cartItems, customerInfo } = useSelector((state) => state.cart);
	const [invNum, setInvNum] = useState();

	const invoice = {
		invoiceNumber: invNum,
		customerDetails: {
			name: customerInfo.customerName,
			mobileNumber: customerInfo.customerMobileNumber,
		},
		purchasedMedicines: cartItems,
	};

	const invoiceHandler = (e) => {
		if (!invNum) {
			alert.error('Please enter invoice number');
			return;
		}
		e.preventDefault();
		dispatch(newInvoice(invoice));
		dispatch({ type: CART_RESET });
		localStorage.removeItem('cartItems');
		localStorage.removeItem('customerDetails');
		navigate('/cart');
		alert.success('Invoice created successfully');
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
						<Title title="Order Preview" />
						<h2>Order Preview</h2>
						<div>
							<p>Customer Name: {customerInfo.customerName}</p>
							<p>Mobile Number: {customerInfo.customerMobileNumber}</p>
						</div>
						<div>
							<p>Total Items: {cartItems.length}</p>
							{
								cartItems.map((item) => (
									<div key={item.id}>
										<p>{item.name}</p>
										<p>{item.qty}</p>
										<p>{item.price * item.qty}</p>
										<hr />
									</div>
								))
							}
						</div>
						<div>
							<p>Total Amount: {cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)}</p>
						</div>
						<input
							type="number"
							value={invNum}
							onChange={(e) => setInvNum(e.target.value)}
						/>
						<button
							onClick={invoiceHandler}
						>
							Confirm Purchase
						</button>
					</Fragment>
				)
			}
		</Fragment>
	)
};

export default OrderPreview;

