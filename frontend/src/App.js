import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAlert } from "react-alert";
import LoginPage from "./components/Auth/LoginPage";
import RegisterPage from "./components/Auth/RegisterPage.js";
import HomePage from "./components/Home/HomePage.js";
import MedicinesPage from "./components/Medicines/MedicinesPage.js";
import "./App.css";

function App() {

	const { isAuthenticated } = useSelector((state) => state.user);
	const alert = useAlert();

	function RequiredAuth() {
		if (!isAuthenticated) {
			alert.error("Please Login");
			return <Navigate to="/" />
		}
		return <Outlet />
	}


	return (
		<Router>
			<Fragment>
				<Routes>
					<Route exact path="/" element={<LoginPage />} />
					<Route exact path="/register" element={<RegisterPage />} />
					<Route element={<RequiredAuth />}>
						<Route exact path='/home' element={<HomePage />} />
						<Route exact path='/medicines' element={<MedicinesPage />} />
					</Route>
				</Routes>
			</Fragment>
		</Router>
	);
}

export default App;
