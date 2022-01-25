import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	updateMedicine,
	getMedicineDetails,
	clearErrors
} from '../../actions/medicineActions';
import { useAlert } from "react-alert";

const UpdateMed = () => {

	const dispatch = useDispatch();
	const alert = useAlert();

	return (
		<div>

		</div>
	);
};

export default UpdateMed;
