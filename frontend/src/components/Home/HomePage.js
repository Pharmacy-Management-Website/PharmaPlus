import React, { Fragment } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { logoutUser } from "../../actions/userActions.js";
import SearchBox from "../Utils/SearchBox/SearchBox.js";
import Title from "../Utils/Meta/Title.js";

const HomePage = () => {

	const dispatch = useDispatch();
	const alert = useAlert();
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch(logoutUser());
		alert.success("Logged out successfully");
		navigate("/");
	};

	return (
		<Fragment>
			<Title title="Home" />
			{/* <SearchBox /> */}
			HOME PAGE
			<Link to="/medicines" variant="primary">Meds</Link>
			<button
				onClick={handleLogout}
			>
				Logout
			</button>
		</Fragment>
	);
};

export default HomePage;
