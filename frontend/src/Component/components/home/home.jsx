import React from "react";
import { Outlet } from "react-router-dom";
function HomePage() {
    let userLogin = JSON.parse(localStorage.getItem('userLogin')) || undefined;
    if (!userLogin) {
        return <Navigate to="/auth" />
    }
    return ( 
        <Outlet/>
     );
}

export default HomePage;

