import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { loginUser, clearErrors } from "../../actions/userActions.js";
import Loader from "../Utils/Loader/Loader.js";
import Title from "../Utils/Meta/Title.js";
// import "./LoginPage.css";
import SignUp from "../../images/SignUp.svg";

const LoginPage = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, manager } = userLogin;

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginUsername, loginPassword));
  };

  useEffect(() => {
    if (manager) {
      navigate("/home");
    } else if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [manager, navigate, error, alert, dispatch]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Title title="Login" />
          {/* <div className="login-box">
            <h2 style={{ color: "white" }}>LOGIN</h2>
            <form onSubmit={loginSubmit}>
              <div className="user-box">
                <input
                  type="text"
                  value={loginUsername}
                  required
                  onChange={(e) => setLoginUsername(e.target.value)}
                />
                <label>Username</label>
              </div>
              <div className="user-box">
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
          </div> */}

          <section id="login">
            <div className="container">
              {/* <!-- Login Page --> */}
              <div className="login__wrapper">
                {/* <!-- Login Left Side --> */}

                <div className="login__right" data-aos="fade-right">
                  <div className="login__imgWrapper">
                    <img src={SignUp} />
                  </div>
                </div>

                {/* <!-- Login Right Side --> */}

                <div className="login__left" data-aos="fade-left">
                  <div className="login__left__wrapper">
                    <div className="login-box">
                      <h2>Welcome! Login</h2>
                      <form onSubmit={loginSubmit}>
                        <div className="user-box">
                          <input
                            type="text"
                            value={loginUsername}
                            required
                            onChange={(e) => setLoginUsername(e.target.value)}
                          />
                          <label>Username</label>
                        </div>
                        <div className="user-box">
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
                        Submit
                        <a href="/register">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          Register
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

export default LoginPage;
