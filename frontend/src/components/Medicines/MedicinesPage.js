import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { allMedicines, clearErrors } from "../../actions/medicineActions.js";
import { useAlert } from "react-alert";
import Pagination from "react-js-pagination";
import SearchBox from "../Utils/SearchBox/SearchBox.js";
import MedDisplay from "../Utils/MedComp/MedDisplay.js";
import Loader from "../Utils/Loader/Loader.js";
import Title from "../Utils/Meta/Title.js";

const MedicinesPage = () => {

	const dispatch = useDispatch();
	const alert = useAlert();
	const navigate = useNavigate();
	const params = useParams();

	const {
		error,
		loading,
		medicines,
		medCounts,
		resultPerPage,
		filteredMedicinesCount } = useSelector((state) => state.medicines);

	const [currentPage, setCurrentPage] = useState(1);

	const keyword = params.keyword || "";

	const setCurrentPageNum = (e) => {
		setCurrentPage(e);
	};

	const searchHandler = (e) => {
		// e.preventDefault();
		// if (keyword.trim() !== "") {
		// 	navigate(`/medicines`);
		// }
		// else {
		// 	navigate("/medicines");
		// }
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
			{
				loading ? (
					<Loader />
				) : (
					<Fragment>
						<Title title="Medicines" />
						<Link to="/newmed">
							Add new +
						</Link>
						<form className="searchBox" onSubmit={searchHandler}>
							<input
								type="text"
								placeholder="Search..."
							// onChange={(e) => setKeyword(e.target.value)}
							/>
							<input type="submit" value="Search" />
						</form>
						<ul>
							{medicines.map((medicine) => (
								<MedDisplay key={medicine._id} medicine={medicine} />
							))}
						</ul>
						<div className="paginationBox">
							<Pagination
								activePage={currentPage}
								itemsCountPerPage={resultPerPage}
								totalItemsCount={medCounts}
								onChange={setCurrentPageNum}
								nextPageText="Next"
								prevPageText="Prev"
								firstPageText="1st"
								lastPageText="Last"
								itemClass="page-item"
								linkClass="page-link"
								activeClass="pageItemActive"
								activeLinkClass="pageLinkActive"
							/>
						</div>
					</Fragment>
				)
			}
		</Fragment>
	)
}

export default MedicinesPage;
