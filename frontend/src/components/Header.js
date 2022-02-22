import React, { useState } from "react";
import { logoutUser } from "../actions/userActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const alert = useAlert();

	const handleLogout = () => {
		dispatch(logoutUser());
		alert.success("Logged out successfully");
		navigate("/");
	};

	const [keyword, setKeyword] = useState("");

	const handleSearch = (e) => {
		e.preventDefault();
		if (keyword.trim()) {
			navigate(`/medicines/${keyword}`);
		} else {
			navigate("/medicines");
		}
	};

	return (
		<div className="nav">
			<div className="container">
				<div className="nav__wrapper">
					<a href="/home" className="logo">
						<i className="fas fa-capsules fa-5x"></i>
					</a>
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
					<nav>
						<div className="nav__icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								className="feather feather-menu"
							>
								<line x1="3" y1="12" x2="21" y2="12" />
								<line x1="3" y1="6" x2="21" y2="6" />
								<line x1="3" y1="18" x2="21" y2="18" />
							</svg>
						</div>
						<div className="nav__bgOverlay"></div>
						<ol className="nav__list">
							<div className="nav__close">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									className="feather feather-x"
								>
									<line x1="18" y1="6" x2="6" y2="18" />
									<line x1="6" y1="6" x2="18" y2="18" />
								</svg>
							</div>
							<div className="nav__list__wrapper">
								<li>
									<a className="nav__link" href="/medicines">
										Medicines
									</a>
								</li>
								<li>
									<a className="nav__link" href="/allinvoices">
										Invoices
									</a>
								</li>
								<li>
									<a className="nav__link" href="/cart">
										Cart
									</a>
								</li>
								<li>
									<a
										className="btn primary-btn"
										onClick={handleLogout}
										href="/"
									>
										Logout
									</a>
								</li>
							</div>
						</ol>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Header;
