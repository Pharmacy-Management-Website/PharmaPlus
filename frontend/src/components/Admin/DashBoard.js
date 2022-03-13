import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { allMedicines, clearErrors } from "../../actions/medicineActions.js";
import { useAlert } from "react-alert";
import Pagination from "react-js-pagination";
import Loader from "../Utils/Loader/Loader.js";

const DashBoard = () => {

	const dispatch = useDispatch();
	const alert = useAlert();
	const params = useParams();

	const {
		error,
		loading,
		medicines,
		medCounts,
		resultPerPage,
		filteredMedicinesCount,
	} = useSelector((state) => state.medicines);

	const [currentPage, setCurrentPage] = useState(1);

	const keyword = params.keyword || "";

	const setCurrentPageNum = (e) => {
		setCurrentPage(e);
	};

	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}
		dispatch(allMedicines(keyword, currentPage));
	}, [dispatch, error, alert, keyword, currentPage]);

	return (
		<Fragment>
			<div className="event-card-group">
				{medicines?.map((medicine) => (
					<div className="event-card">
						<div className="content-left">
							<p className="stock">
								{medicine.stockDetails.length === 0
									? 0
									: medicine.stockDetails[0].inStock
								}
							</p>
						</div>
						<div className="content-right">
							<Link
								to={`/medicine/${medicine._id}`}
								className="event-name"
							>
								{medicine.name}
							</Link>
						</div>
						<div className="AddToCart__wrapper" style={{ marginLeft: '10px' }}>
							<button>
								<Link to={`/stockupdate/${medicine._id}`}>
									Update Stock
								</Link>
							</button>
						</div>
						<div className="AddToCart__wrapper" style={{ marginLeft: '10px' }}>
							<button>
								<Link to={`/updatemed/${medicine._id}`}>
									Update Medicine
								</Link>
							</button>
						</div>
						<div className="AddToCart__wrapper" style={{ marginLeft: '10px' }}>
							<button>
								<Link to={`/newstock/${medicine._id}`}>
									Add Stock
								</Link>
							</button>
						</div>
					</div>
				))}
			</div>
		</Fragment>
	);
};

export default DashBoard;