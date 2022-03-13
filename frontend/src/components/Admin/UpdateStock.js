import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom'
import {
	updateMedicine,
	getMedicineDetails,
	clearErrors
} from '../../actions/medicineActions';
import { useAlert } from "react-alert";

const UpdateStock = () => {

	const dispatch = useDispatch();
	const alert = useAlert();
	const navigate = useNavigate();
	const params = useParams();

	const { medicine } = useSelector((state) => state.medicineDetails);

	const medId = params.id;

	return (
		<Fragment>
			<div>Update Stock</div>
			{

			}
		</Fragment>
	)
}

export default UpdateStock
