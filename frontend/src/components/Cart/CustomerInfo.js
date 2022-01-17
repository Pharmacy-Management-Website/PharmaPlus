import React, { useState, Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import { saveCustInfo, clearErrors } from '../../actions/cartActions';

const CustomerInfo = () => {

	const [customerName, setCustomerName] = useState('');
	const [cutomerMobileNumber, setCutomerMobileNumber] = useState();

	const dispatch = useDispatch();
	const alert = useAlert();
	const navigate = useNavigate();

	const { loading, error, customerInfo } = useSelector((state) => state.cart);

	const saveHandler = (e) => {
		e.preventDefault();
		dispatch(saveCustInfo({ customerName, cutomerMobileNumber }));
		navigate('/orderpreview');
	};

	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}
		if (customerInfo) {
			navigate('/orderpreview');
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
									value={cutomerMobileNumber}
									onChange={(e) => setCutomerMobileNumber(e.target.value)}
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

