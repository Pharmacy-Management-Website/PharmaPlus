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

	const handleSearch = (e) => {
		e.preventDefault();
		if (keyword.trim()) {
			navigate(`/medicines/${keyword}`);
		} else {
			navigate("/medicines");
		}
	};

	return (
		<div className="container">
			<div className="navbar-wrapper">
				{/* Logo */}
				<a href="/home" className="logo">
					<i className="fas fa-capsules fa-5x"></i>
				</a>

				{/* Search */}
				<form className="search" onSubmit={handleSearch}>
					<input
						type="text"
						className="search__input"
						placeholder="Search Medicines"
						onChange={(e) => setKeyword(e.target.value)}
					/>
					<button type="submit" className="search__button">
						<i className="fa fa-search" aria-hidden="true"></i>
					</button>
				</form>

				{/* Navbar */}
				<div className="navbar-btn-group">
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							{
								manager.role === "admin" && (
									<a href="/dashboard" className="nav-links">
										Dashboard
									</a>
								)
							}
						</li>
						<li className="nav-item">
							<a href="/medicines" className="nav-links">
								Medicines
							</a>
						</li>
						<li className="nav-item">
							<a href="/cart" className="nav-links">
								Cart
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-links" onClick={handleLogout} href="/">
								Logout
							</a>
						</li>
					</ul>
					<div className="nav-icon" onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"}></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
