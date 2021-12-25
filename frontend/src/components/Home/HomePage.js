import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import Title from "../Utils/Meta/Title.js";

const HomePage = () => {

	return (
		<Fragment>
			<Title title="Home" />
			HOME PAGE
			<Link to="/medicines" variant="primary">Meds</Link>
		</Fragment>
	);
};

export default HomePage;
