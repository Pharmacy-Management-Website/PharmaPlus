import React, { Fragment } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <Fragment>
      <div className="login-box">
        <h2>Welcome! Login</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <button className="btn btn--green">Login</button>
        </form>
      </div>
    </Fragment>
  );
};

export default LoginPage;