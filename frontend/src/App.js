import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.js";
import { useSelector } from "react-redux";
import LoginPage from "./components/Auth/LoginPage";
import HomePage from "./components/Home/HomePage.js";
import "./App.css";

function App() {

	const { error, loading, isAuthenticated } = useSelector((state) => state.user);

	return (
		<Router>
			<Fragment>
				<Routes>
					<Route exact path="/" element={<LoginPage />} />
					<Route exact path='/home' element={<HomePage />} />
				</Routes>
			</Fragment>
		</Router>
	);
}

export default App;
