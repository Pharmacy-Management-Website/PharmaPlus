import React, { useEffect, Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMedicineDetails, clearErrors, deleteMedicine } from "../../actions/medicineActions";
import { useAlert } from "react-alert";
import { useNavigate, useParams, Link } from "react-router-dom";
import { addMedToCart } from "../../actions/cartActions.js";

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
	}

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
				<div>Loading...</div>
			) : (
				<div>
					<h1>{medicine.name}</h1>
					<p>{medicine.composition}</p>
					<div className="detailsBlock-3-1-1">
						<button onClick={decreaseQuantity}>-</button>
						<input readOnly type="number" value={quantity} />
						<button onClick={increaseQuantity}>+</button>
					</div>
					<Link to={`/updatemed/${medicine._id}`}>
						Update
					</Link>
					<h4>Stocks</h4>
					{
						medicine.stockDetails ? (
							medicine.stockDetails.map((stock, index) => (
								<div key={index}>
									<h3>{stock.price}</h3>
									<p>{stock.inStock}</p>
								</div>
							))
						)
							:
							("No stocks")
					}
					<div>
						<button>
							<Link to="/">Update Stock</Link>
						</button>
					</div>
					<div>
						<Link to={`/newstock/${medicine._id}`}>New Stock+</Link>
					</div>
					<div>
						<button
							onClick={addToListHandler}
						>
							Add to Cart
						</button>
					</div>
					<div>
						<button
							onClick={deleteMedHandler}
						>
							Delete
						</button>
					</div>
				</div>
			)}
		</Fragment>
	);
};

export default Medicine;
