import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { createMedicine, clearErrors } from '../../actions/medicineActions.js'
import Loader from '../Utils/Loader/Loader.js';
import Title from '../Utils/Meta/Title.js';

const AddMedicine = () => {

	const dispatch = useDispatch();
	const alert = useAlert();
	const navigate = useNavigate();

	const { error, loading, medicine } = useSelector((state) => state.newMedicine);

	const [med_id, setMed_id] = useState("");
	const [name, setName] = useState("");
	const [composition, setComposition] = useState("");

	const newMedSubmit = (e) => {
		e.preventDefault();
		dispatch(createMedicine(med_id, name, composition));
		navigate("/medicines");
	}

	useEffect(() => {
		if (medicine) {
			navigate("/medicines");
		}
		else if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}
	}, [dispatch, navigate, medicine, error, alert]);

	return (
		<div>
			<Fragment>
				{
					loading ? (
						<Loader />
					) : (
						<Fragment>
							<Title title="Add Med+" />
							<div>
								<form
									onSubmit={newMedSubmit}
								>
									<div class="user-box">
										<input
											type="text"
											required
											name="username"
											value={med_id}
											onChange={(e) => setMed_id(e.target.value)}
										/>
										<label>Med-id</label>
									</div>
									<div class="user-box">
										<input
											type="text"
											required
											name="username"
											value={name}
											onChange={(e) => setName(e.target.value)}
										/>
										<label>Name</label>
									</div>
									<div class="user-box">
										<input
											type="text"
											name="username"
											value={composition}
											onChange={(e) => setComposition(e.target.value)}
										/>
										<label>Composition</label>
									</div>
									<input type="submit" value="Add" />
									<span></span>
									<span></span>
									<span></span>
									<span></span>
								</form>
							</div>
						</Fragment>
					)
				}
			</Fragment>
		</div>
	)
}

export default AddMedicine;
