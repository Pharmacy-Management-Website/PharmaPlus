import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allMedicines, clearErrors } from "../../actions/medicineActions.js";
import { useAlert } from "react-alert";
import Loader from "../Utils/Loader/Loader.js";
import Title from "../Utils/Meta/Title.js";

const MedicinesPage = () => {

	const dispatch = useDispatch();
	const alert = useAlert();
	const navigate = useNavigate();

	const { error, loading, medicines } = useSelector((state) => state.medicines);

	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}
		dispatch(allMedicines());
	}, [dispatch, error]);

	return (
		<Fragment>
			{
				loading ? (
					<Loader />
				) : (
					<Fragment>
						<Title title="Medicines" />
						<h1>Home Page</h1>
						<ul>
							{medicines.map((medicine) => (
								<li key={medicine.id}>{medicine.name}</li>
							))}
						</ul>
					</Fragment>
				)
			}
		</Fragment>
	)
}

export default MedicinesPage;
