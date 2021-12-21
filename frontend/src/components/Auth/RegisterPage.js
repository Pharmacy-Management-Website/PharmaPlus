import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { registerUser, clearErrors } from "../../actions/userActions.js";
import Loader from '../Utils/Loader/Loader.js';
import Title from '../Utils/Meta/Title.js';
import "./LoginPage.css";

const RegisterPage = () => {

	const dispatch = useDispatch();
	const alert = useAlert();
	const navigate = useNavigate();

	const { error, loading, isAuthenticated } = useSelector(
		(state) => state.user
	);

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const registerSubmit = (e) => {
		e.preventDefault();
		dispatch(registerUser(username, password));
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
						<Title title="Register" />
						<div class="login-box">
							<h2 style={{ color: 'white' }}>REGISTER</h2>
							<form
								onSubmit={registerSubmit}
							>
								<div class="user-box">
									<input
										type="text"
										required
										name="username"
										value={username}
										onChange={(e) => setUsername(e.target.value)}
									/>
									<label>Username</label>
								</div>
								<div class="user-box">
									<input
										type="password"
										required
										name="password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
									<label>Password</label>
								</div>
								<input type="submit" value="Register" />
								<span></span>
								<span></span>
								<span></span>
								<span></span>
							</form>
							<div className="navigate__reg__log">
								Login? <Link to="/">Login</Link>
							</div>
						</div>
					</Fragment>
				)
			}
		</Fragment>
	);
};

export default RegisterPage;