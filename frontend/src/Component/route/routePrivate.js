import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AppwebTiki from "../components/AppWeb";

function PrivateUser() {
    let userLogin = JSON.parse(localStorage.getItem('userLogin')) || undefined;
    if (!userLogin) {
        return <Navigate to="/auth" />
    }
    else if (userLogin.email == "admin" && userLogin.password == "123") return <Navigate to={'/admin'} />
    else {
        return (
            <>
                <AppwebTiki />
                <Outlet />
            </>
        );
    }
}
export default PrivateUser;