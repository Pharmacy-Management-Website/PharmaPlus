import React, { useEffect, Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	getMedicineDetails,
	clearErrors,
	deleteMedicine,
} from "../../actions/medicineActions";
import { useAlert } from "react-alert";
import { useNavigate, useParams, Link } from "react-router-dom";
import { addMedToCart } from "../../actions/cartActions.js";
import Loader from "../Utils/Loader/Loader.js";
import AddMedicine from "../../images/Add-Medicine.png";
import "./Medicine.css";

const Medicine = () => {
	const dispatch = useDispatch();
	const alert = useAlert();
	const navigate = useNavigate();
	const params = useParams();

	const { medicine, loading, error } = useSelector(
		(state) => state.medicineDetails
	);
	const [quantity, setQuantity] = useState(1);

	const medId = params.id;

	const increaseQuantity = () => {
		if (medicine.stockDetails[0].inStock <= quantity) return;
		const qty = quantity + 1;
		setQuantity(qty);
	};

	const decreaseQuantity = () => {
		if (1 >= quantity) return;
		const qty = quantity - 1;
		setQuantity(qty);
	};

	const addToListHandler = () => {
		dispatch(addMedToCart(medId, quantity));
		alert.success("Medicine added to cart");
		navigate("/cart");
	};

	const deleteMedHandler = (e) => {
		e.preventDefault();
		dispatch(deleteMedicine(medId));
		alert.success("Medicine deleted successfully");
		navigate("/medicines");
	};

	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}
		dispatch(getMedicineDetails(medId));
	}, [error, alert, dispatch, medId]);

	return (
		<Fragment>
			{loading ? (
				<Loader />
			) : (
				<section id="meds_page">
					<div className="container">
						{/* <!-- Meds Page --> */}
						<div className="meds__wrapper">
							{/* <!--  Meds Left Side --> */}

							<div className="meds__right" data-aos="fade-left">
								<div className="meds__imgWrapper">
									<img src={AddMedicine} />
								</div>
							</div>
							{/* <!-- Meds Right Side --> */}

							<div className="meds__left" data-aos="fade-right">
								<div className="meds__left__wrapper">
									<div className="meds-box">
										<form>
											<div className="user-box">
												<h1>
													{medicine.name}
												</h1>
												<div className="wrapper">
													<a className="minus" onClick={decreaseQuantity}>
														-
													</a>
													<div className="num">
														<input readOnly type="number" value={quantity} />
													</div>
													<a className="plus" onClick={increaseQuantity}>
														+
													</a>
												</div>
												{/* <div>
													<Link to={`/updatemed/${medicine._id}`}>Update</Link>
												</div> */}
												<div className="AddToCart__wrapper">
													<button
														onClick={addToListHandler}
														className="updBtn secBtn"
													>
														Add to Cart
													</button>
												</div>
												{/* <button
													onClick={deleteMedHandler}
													className="updBtn secBtn"
												>
													Delete
												</button> */}
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			)}
		</Fragment>
	);
};

export default Medicine;
