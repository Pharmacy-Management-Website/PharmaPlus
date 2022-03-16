import React, { useState } from "react";
import { logoutUser } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

const Header = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const alert = useAlert();

	const { manager } = useSelector((state) => state.userLogin);

	const handleLogout = () => {
		dispatch(logoutUser());
		alert.success("Logged out successfully");
		navigate("/");
	};

	const [keyword, setKeyword] = useState("");
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	window.onload = function () {
		// navbar variables
		const navbarNav = document.querySelector(".navbar-nav");
		const navbarToggleBtn = document.querySelector(".menu-toggle-btn");

		// navbar toggle functionality
		navbarToggleBtn.addEventListener("click", function () {
			navbarNav.classList.toggle("active");
			this.classList.toggle("active");
		});
	};

	return (
		<div className="container">
			<div className="navbar-wrapper">
				{/* Logo */}
				<a href="/home" className="logo">
					<i className="fas fa-capsules fa-5x"></i>
				</a>

				{/* Navbar */}
				<div className="navbar-btn-group">
					<ul className="navbar-nav">
						{manager.role === "admin" ? (
							<li>
								<a href="/dashboard" className="nav-link">
									Dashboard
								</a>
							</li>
						) : (
							<li>
								<a href="/invoices" className="nav-link">
									Invoices
								</a>
							</li>
						)}

						<li>
							<a href="/medicines" className="nav-link">
								Medicines
							</a>
						</li>

						<li>
							<a href="/cart" className="nav-link">
								Cart
							</a>
						</li>

						<li>
							<a className="btn primary-btn" onClick={handleLogout} href="/">
								Logout
							</a>
						</li>
					</ul>

					<button class="menu-toggle-btn">
						<span class="line one"></span>
						<span class="line two"></span>
						<span class="line three"></span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
