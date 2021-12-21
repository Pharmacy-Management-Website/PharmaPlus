import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allMedicines, clearErrors } from "../../actions/medicineActions.js";
import { useAlert } from "react-alert";

const HomePage = () => {
	const dispatch = useDispatch();
	const alert = useAlert();

	const { error, medicines } = useSelector((state) => state.medicines);

	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}
		dispatch(allMedicines());
	}, [dispatch, error]);

	return (
		<div>
			<h1>Home Page</h1>
			<ul>
				{medicines.map((medicine) => (
					<li key={medicine.id}>{medicine.name}</li>
				))}
			</ul>
		</div>
	);
};

export default HomePage;
