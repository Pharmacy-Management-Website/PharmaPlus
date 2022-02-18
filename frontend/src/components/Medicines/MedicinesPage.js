import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { allMedicines, clearErrors } from "../../actions/medicineActions.js";
import { useAlert } from "react-alert";
import Pagination from "react-js-pagination";
import MedDisplay from "../Utils/MedComp/MedDisplay.js";
import Loader from "../Utils/Loader/Loader.js";
import Title from "../Utils/Meta/Title.js";
// import Prescription from "../../images/Medicine Page-1.png";

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
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <section className="event">
            <div className="event-left">
              <div className="event-banner">
                {/* <img
                  src="./images/Medicine Page-1.png"
                  alt="event banner"
                  className="banner-img"
                />
                <img
                  src="./images/Medicine Page-2.png"
                  alt="event banner"
                  className="banner-img"
                /> */}
              </div>
            </div>

            <div className="event-right">
              <button className="btn btn-primary">
                <p className="btn-text">
                  <Link to="/newmed"> Add New +</Link>
                </p>
                <span className="square"></span>
              </button>

              <div className="event-card-group">
                {medicines.map((medicine) => (
                  <div className="event-card">
                    <div className="content-left">
                      <p className="stock">
                        {medicine.stockDetails.length === 0
                          ? 0
                          : medicine.stockDetails[0].inStock}
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
                  </div>
                ))}
              </div>

              <div className="pagination-container">
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
              </div>
            </div>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

export default MedicinesPage;

{
  /* <ul>
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
          </div> */
}
