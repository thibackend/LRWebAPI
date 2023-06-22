import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Showproduct from "./Showproduct";
import Admin from "./AdminPage/ShowProductAdmin";
import Addproduct from "./AdminPage/Addproduct";
import Edit from "./AdminPage/Edit";
import Header from "./Header";
import Cart from "./Cart";
import Notfound from "./NotFound";
import Login from "./auth/Login";
function AppwebTiki() {
  return (
    <>
      <Header />
      <nav className="my-5">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className='nav-link' to="/">HOME</Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link' to="/cart">CART</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default AppwebTiki;