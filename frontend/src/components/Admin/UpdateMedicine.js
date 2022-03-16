import React, { useEffect, useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import { useParams, useNavigate } from 'react-router-dom';
import {
	updateMedicine,
	getMedicineDetails,
	clearErrors,
} from '../../actions/medicineActions';
import { UPDATE_MEDICINE_RESET } from '../../constants/medicineConstants';

const UpdateMedicine = () => {

	const dispatch = useDispatch();
	const alert = useAlert();
	const params = useParams();
	const navigate = useNavigate();

	const medId = params.id;

	const [mId, setMId] = useState('');
	const [name, setName] = useState('');
	const [composition, setComposition] = useState('');
	const [categoryOne, setCategoryOne] = useState('');
	const [categoryTwo, setCategoryTwo] = useState('');

	const { medicine, loading, error } = useSelector(
		(state) => state.medicineDetails
	);

	const {
		loading: medUpdateLoading,
		error: medUpdateError,
		medicine: medUpdate,
		isUpdated,
	} = useSelector((state) => state.medicineUpdate);

	useEffect(() => {
		if (medicine && medicine._id !== medId) {
			dispatch(getMedicineDetails(medId));
		}
		else {
			setMId(medicine.med_id);
			setName(medicine.name);
			setComposition(medicine.composition);
			setCategoryOne(medicine.categoryOne);
			setCategoryTwo(medicine.categoryTwo);
		}
		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}
		if (medUpdateError) {
			alert.error(medUpdateError);
			dispatch(clearErrors());
		}
		if (isUpdated) {
			alert.success('Medicine updated successfully');
			// navigate(`/medicine/${medId}`);
			dispatch({ type: UPDATE_MEDICINE_RESET });
		}
	}, [dispatch, medId, medicine, error, medUpdateError, isUpdated, navigate, alert]);

	const updateSubmitHandler = (e) => {
		e.preventDefault();
		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}
		dispatch(updateMedicine(mId, name, composition, categoryOne, categoryTwo));
		alert.success('Medicine updated successfully');
		navigate(`/medicine/${medId}`);
	}

	return (
		<>
			{
				loading ? (
					<div>Loading...</div>
				) : (
					<Fragment>
						<h1>Update Medicine</h1>
						<form onSubmit={updateSubmitHandler}>
							<input
								type="text"
								placeholder="ID"
								value={mId}
								onChange={(e) => setMId(e.target.value)}
							/>
							<input
								type="text"
								placeholder="Name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							<input
								type="text"
								placeholder="Composition"
								value={composition}
								onChange={(e) => setComposition(e.target.value)}
							/>
							<input
								type="text"
								placeholder="Brand"
								value={categoryOne}
								onChange={(e) => setCategoryOne(e.target.value)}
							/>
							<input
								type="text"
								placeholder="Health Issue"
								value={categoryTwo}
								onChange={(e) => setCategoryTwo(e.target.value)}
							/>
							<input type="submit" value="Update" />
						</form>
					</Fragment>
				)
			}
		</>
	)
};

export default UpdateMedicine;