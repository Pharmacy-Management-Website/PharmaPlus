import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from "react-alert";
import { useNavigate, useParams } from "react-router-dom";
import { getMedicineStockDetails, clearErrors } from '../../actions/medicineActions';

const Stocks = () => {

	const dispatch = useDispatch();
	const alert = useAlert();
	const navigate = useNavigate();
	const params = useParams();

	const { stock, loading, error } = useSelector((state) => state.stockDetails);

	const medId = params.id;

	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}
		dispatch(getMedicineStockDetails(medId));
	}, [error, alert, dispatch, medId]);

	return (
		<div>
			{
				stock && stock.map((stock, index) => (
					<div key={index}>
						<h3>{stock.price}</h3>
						<p>{stock.inStock}</p>
						<p>{stock.mfgDate}</p>
						<p>{stock.expDate}</p>
					</div>
				))
			}
			<p>No stocks</p>
		</div>
	)
};

export default Stocks;
