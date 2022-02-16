import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { allMedicines, clearErrors } from "../../actions/medicineActions.js";
import { useAlert } from "react-alert";
import Pagination from "react-js-pagination";
import MedDisplay from "../Utils/MedComp/MedDisplay.js";
import Loader from "../Utils/Loader/Loader.js";
import Title from "../Utils/Meta/Title.js";

const MedicinesPage = () => {

	const dispatch = useDispatch();
	const alert = useAlert();
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
						<ul>
							{medicines.map((medicine) => (
								<li>
									<MedDisplay key={medicine._id} medicine={medicine} />
								</li>
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
