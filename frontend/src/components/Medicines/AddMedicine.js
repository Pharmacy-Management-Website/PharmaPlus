import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { createMedicine, clearErrors } from "../../actions/medicineActions.js";
import Loader from "../Utils/Loader/Loader.js";
import Title from "../Utils/Meta/Title.js";
import AddNew from "../../images/Add-New.svg";
import "./AddMedicine.css";

const AddMedicine = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { error, loading, medicine } = useSelector(
    (state) => state.newMedicine
  );

  const [med_id, setMed_id] = useState("");
  const [name, setName] = useState("");
  const [composition, setComposition] = useState("");

  const newMedSubmit = (e) => {
    e.preventDefault();
    if(!med_id || !name) {
      alert.error("Please fill in all fields");
    }
    dispatch(createMedicine(med_id, name, composition));
    navigate("/medicines");
  };

  useEffect(() => {
    if (medicine) {
      navigate("/medicines");
    } else if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, navigate, medicine, error, alert]);

  return (
    <div>
      <Fragment>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <Title title="Add Med+" />
            <section id="login">
              <div className="container">
                {/* <!-- AddNew Page --> */}
                <div className="addNew__wrapper">
                  {/* <!--  AddNew Left Side --> */}

                  <div className="addNew__right" data-aos="fade-left">
                    <div className="addNew__imgWrapper">
                      <img src={AddNew} />
                    </div>
                  </div>

                  {/* <!-- Login Right Side --> */}

                  <div className="addNew__left" data-aos="fade-right">
                    <div className="addNew__left__wrapper">
                      <div className="addNew-box">
                        <form onSubmit={newMedSubmit}>
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
                              required
                              name="username"
                              value={composition}
                              onChange={(e) => setComposition(e.target.value)}
                            />
                            <label>Composition</label>
                          </div>
                          <a href="/">
                            <br></br>
                            <input
                              type="submit"
                              value="Add"
                              className="addButton"
                            />
                          </a>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Fragment>
        )}
      </Fragment>
    </div>
  );
};

export default AddMedicine;
