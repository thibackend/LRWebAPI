import { Navigate, Outlet } from "react-router-dom";
import Header from "../Header";

function AdminAuth() {
    let userLogin = JSON.parse(localStorage.getItem('userLogin')) || undefined;
    if (!userLogin) {
        return <Navigate to="/auth" />
    } if (userLogin.email != 'admin') {
        return <Navigate to="/" />
    }
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}
export default AdminAuth;