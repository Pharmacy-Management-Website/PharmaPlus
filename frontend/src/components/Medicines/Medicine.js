import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMedicineDetails, clearErrors } from '../../actions/medicineActions';
import { useAlert } from "react-alert";
import { useNavigate, useParams } from "react-router-dom";

const Medicine = () => {

	const dispatch = useDispatch();
	const alert = useAlert();
	const navigate = useNavigate();
	const params = useParams();

	const { medicine, loading, error } = useSelector((state) => state.medicineDetails);

	const medId = params.id;

	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}
		dispatch(getMedicineDetails(medId));
	}, [error, alert, dispatch, medId]);

	return (
		<Fragment>
			{
				loading ? (
					<div>Loading...</div>
				) : (
					<div>
						<h1>{medicine.name}</h1>
						<p>{medicine.composition}</p>
						{
							medicine.stockDetails.map((stock, index) => (
								<div key={index}>
									<h3>{stock.price}</h3>
									<p>{stock.inStock}</p>
									<p>{stock.mfgDate}</p>
									<p>{stock.expDate}</p>
								</div>
							))
						}
					</div>
				)
			}
		</Fragment>
	)
};

export default Medicine;
