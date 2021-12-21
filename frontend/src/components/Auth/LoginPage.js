import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { loginUser, clearErrors } from "../../actions/userActions.js";
import Loader from '../Utils/Loader/Loader.js';
import Title from '../Utils/Meta/Title.js';
import "./LoginPage.css";

const LoginPage = () => {
	const dispatch = useDispatch();
	const alert = useAlert();
	const navigate = useNavigate();

	const { error, loading, isAuthenticated } = useSelector(
		(state) => state.user
	);

	const [loginUsername, setLoginUsername] = useState("");
	const [loginPassword, setLoginPassword] = useState("");

	const loginSubmit = (e) => {
		e.preventDefault();
		dispatch(loginUser(loginUsername, loginPassword));
	};

	useEffect(() => {
		if (error) {
			alert(error);
			dispatch(clearErrors());
		}
		if (isAuthenticated) {
			navigate("/home");
		}
	}, [dispatch, alert, error, isAuthenticated, navigate]);

	return (
		<Fragment>
			{
				loading ? (
					<Loader />
				) : (
					<Fragment>
						<Title title="Login" />
						<div class="login-box">
							<h2 style={{ color: 'white' }}>LOGIN</h2>
							<form onSubmit={loginSubmit}>
								<div class="user-box">
									<input
										type="text"
										value={loginUsername}
										required
										onChange={(e) => setLoginUsername(e.target.value)}
									/>
									<label>Username</label>
								</div>
								<div class="user-box">
									<input
										type="password"
										value={loginPassword}
										required
										onChange={(e) => setLoginPassword(e.target.value)}
									/>
									<label>Password</label>
								</div>
								<input type="submit" value="Login" />
								<span></span>
								<span></span>
								<span></span>
								<span></span>
							</form>
							<div className="navigate__reg__log">
								Create new manager account? <Link to="/register">Register</Link>
							</div>
						</div>
					</Fragment>
				)
			}
		</Fragment>
	);
};

export default LoginPage;
