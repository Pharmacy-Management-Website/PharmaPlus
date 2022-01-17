import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import { Link } from 'react-router-dom';
import { clearErrors } from '../../actions/cartActions';

const OrderPreview = () => {

	const dispatch = useDispatch();
	const alert = useAlert();

	const { loading, error, cartItems, customerInfo } = useSelector((state) => state.cart);

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
					<div>Loading...</div>
				) : (
					<Fragment>
						<h2>Order Preview</h2>
						<div>
							<p>Customer Name: {customerInfo.customerName}</p>
							<p>Mobile Number: {customerInfo.cutomerMobileNumber}</p>
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
					</Fragment>
				)
			}
		</Fragment>
	)
};

export default OrderPreview;

