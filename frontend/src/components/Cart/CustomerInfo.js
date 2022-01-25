import React, { useState, Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import { saveCustInfo, clearErrors } from '../../actions/cartActions';

const CustomerInfo = () => {

	const [customerName, setCustomerName] = useState('');
	const [customerMobileNumber, setCustomerMobileNumber] = useState();

	const dispatch = useDispatch();
	const alert = useAlert();
	const navigate = useNavigate();

	const { loading, error, customerInfo } = useSelector((state) => state.cart);

	const saveHandler = (e) => {
		if (customerMobileNumber.length !== 10) {
			alert.error('Please enter valid mobile number');
			return;
		}
		e.preventDefault();
		dispatch(saveCustInfo({ customerName, customerMobileNumber }));
		navigate('/orderpreview');
	};

	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}
	}, [error, alert, dispatch, customerInfo, navigate]);

	return (
		<Fragment>
			{
				loading ? (
					<div>Loading...</div>
				) : (
					<Fragment>
						<h2>Customer Info</h2>
						<form
							onSubmit={saveHandler}
						>
							<div>
								<input
									type="text"
									placeholder="Name"
									required
									value={customerName}
									onChange={(e) => setCustomerName(e.target.value)}
								/>
							</div>
							<div>
								<input
									type="number"
									placeholder="Mobile Number"
									required
									value={customerMobileNumber}
									onChange={(e) => setCustomerMobileNumber(e.target.value)}
								/>
							</div>
							<input type="submit" value="Save" />
						</form>
					</Fragment>
				)
			}

		</Fragment>
	)
};

export default CustomerInfo;

