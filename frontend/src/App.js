import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.js";
import { useSelector } from "react-redux";
import LoginPage from "./components/Auth/LoginPage";
import RegisterPage from "./components/Auth/RegisterPage.js";
import HomePage from "./components/Home/HomePage.js";
import MedicinePg from "./components/Medicines/MedicinesPg.js";
import "./App.css";

function App() {

	const { error, loading, isAuthenticated } = useSelector((state) => state.user);

	return (
		<Router>
			<Fragment>
				<Routes>
					<Route exact path="/" element={<LoginPage />} />
					<Route exact path="/register" element={<RegisterPage />} />
					<Route exact path='/home' element={<HomePage />} />
					<Route exact path='/medicines' element={<MedicinePg />} />
				</Routes>
			</Fragment>
		</Router>
	);
}

export default App;
