import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useAlert } from "react-alert";
import { loginUser, clearErrors } from "../../actions/userActions.js";
import "./LoginPage.css";

const LoginPage = () => {

	const dispatch = useDispatch();
	const alert = useAlert();
	const navigate = useNavigate();

	const { error, loading, isAuthenticated } = useSelector((state) => state.user);

	const [loginUsername, setLoginUsername] = useState("");
	const [loginPassword, setLoginPassword] = useState("");

	const loginSubmit = (e) => {
		e.preventDefault();
		dispatch(loginUser(loginUsername, loginPassword));
		navigate("/home");
	};

	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}
		if (isAuthenticated) {
			navigate("/home");
		}
	}, [dispatch, alert, error, isAuthenticated]);

	return (
		<Fragment>
			<div className="login-box">
				<h2>Welcome! Login</h2>
				<form onSubmit={loginSubmit}>
					<div className="user-box">
						<input
							type="text"
							name=""
							required
							value={loginUsername}
							onChange={(e) => setLoginUsername(e.target.value)}
						/>
						<label>Username</label>
					</div>
					<div className="user-box">
						<input
							type="password"
							name=""
							required
							value={loginPassword}
							onChange={(e) => setLoginPassword(e.target.value)}
						/>
						<label>Password</label>
					</div>
					<input type="submit" value="Login" className="btn btn--green" />
				</form>
			</div>
		</Fragment>
	);
};

export default LoginPage;
