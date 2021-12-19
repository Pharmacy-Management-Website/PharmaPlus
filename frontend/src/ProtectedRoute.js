import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
	const { loading, isAuthenticated, admin } = useSelector((state) => state.user);
	return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;

