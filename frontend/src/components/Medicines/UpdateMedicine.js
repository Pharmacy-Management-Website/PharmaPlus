import React, { useEffect, useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import { useParams, useNavigate } from 'react-router-dom';
import {
	updateMedicine,
	getMedicineDetails,
	clearErrors,
} from '../../actions/medicineActions';

const UpdateMedicine = () => {

	const dispatch = useDispatch();
	const alert = useAlert();
	const params = useParams();
	const navigate = useNavigate();

	const medId = params.id;

	const [mId, setMId] = useState('');
	const [name, setName] = useState('');
	const [composition, setComposition] = useState('');

	const { medicine, loading, error } = useSelector(
		(state) => state.medicineDetails
	);

	useEffect(() => {
		if (medicine && medicine._id !== medId) {
			dispatch(getMedicineDetails(medId));
		}
		else if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}
		else {
			setMId(medicine.med_id);
			setName(medicine.name);
			setComposition(medicine.composition);
		}
	}, [dispatch, medId, medicine]);

	const updateSubmitHandler = (e) => {
		e.preventDefault();
		if(error) {
			alert.error(error);
			dispatch(clearErrors());
		}
		dispatch(updateMedicine(mId, name, composition));
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
							<input type="submit" value="Update" />
						</form>
					</Fragment>
				)
			}
		</>
	)
};

export default UpdateMedicine;