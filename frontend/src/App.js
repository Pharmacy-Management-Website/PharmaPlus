import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors } from "./actions/medicineActions";
import LoginPage from "./components/Auth/LoginPage";
import RegisterPage from "./components/Auth/RegisterPage.js";
import HomePage from "./components/Home/HomePage.js";
import MedicinesPage from "./components/Medicines/MedicinesPage.js";
import Medicine from "./components/Medicines/Medicine.js";
import Stocks from "./components/Medicines/Stocks.js";
import AddMedicine from "./components/Medicines/AddMedicine.js";
import NewStock from "./components/Medicines/NewStock.js";
import Cart from "./components/Cart/Cart.js";
import CustomerInfo from "./components/Cart/CustomerInfo.js";
import OrderPreview from "./components/Cart/OrderPreview.js";
import "./App.css";

function App() {

	const userLogin = useSelector((state) => state.userLogin);
	const { error, manager } = userLogin;

	const dispatch = useDispatch();
	const alert = useAlert();

	function RequiredAuth() {
		if (!manager) {
			alert.error("Please Login");
			return <Navigate to="/" />
		}
		return <Outlet />
	};

	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}
	}, [error, alert, dispatch]);

	return (
		<Router>
			<Fragment>
				<Routes>
					<Route exact path="/" element={<LoginPage />} />
					<Route exact path="/register" element={<RegisterPage />} />
					<Route element={<RequiredAuth />}>
						<Route exact path='/home' element={<HomePage />} />
						<Route exact path='/medicines' element={<MedicinesPage />} />
						<Route path='/medicine/:id' element={<Medicine />} />
						<Route path='/stock/:id' element={<Stocks />} />
						<Route path='/newmed' element={<AddMedicine />} />
						<Route path='/newstock/:id' element={<NewStock />} />
						<Route path='/cart' element={<Cart />} />
						<Route path='/custinfo' element={<CustomerInfo />} />
						<Route path='/orderpreview' element={<OrderPreview />} />
					</Route>
				</Routes>
			</Fragment>
		</Router>
	);
}

export default App;
