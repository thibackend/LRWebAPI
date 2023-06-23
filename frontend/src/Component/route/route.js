import React from "react";
import Login from "../components/auth/Login";
import PrivateUser from "./routePrivate";
import AppwebTiki from "../components/AppWeb";
import Showproduct from "../components/Showproduct";
import Admin from "../components/AdminPage/ShowProductAdmin";
import LoginPage from "../components/auth/Login";
import Notfound from "../components/NotFound";
import AdminAuth from "../components/AdminPage";
import Addproduct from "../components/AdminPage/Addproduct";
import Edit from "../components/AdminPage/Edit";
import ShoppingCart from "../components/home/Cart";

export const routes = () => [
  {
    path: "/auth",
    element: <Login />,
    children: [
      { path: "", element: <LoginPage /> },
      { path: "login", element: <Login /> },
      // { path: "register", element: <Register /> },
    ],
  },
  {
    path: '/',
    element: <PrivateUser />,
    children: [
      {
        path: '', element: <Showproduct />
      },
      {
        path: 'cart', element: <ShoppingCart />
      }
    ]
  },
  {
    path: "/admin",
    element: (<AdminAuth />),
    children: [
      { path: '', element: <Admin /> },
      { path: 'add', element: <Addproduct /> },
      { path: "edit/:id", element: <Edit /> }
    ]
  },
  {
    path: "*", element: <Notfound />
  }
];

// <Routes>
//   <Route path="/" element={<Showproduct />} />
//   <Route path="/admin" element={<Admin />} />
//   <Route path="/add-product" element={<Addproduct />} />
//   <Route path='/edit/:id' element={<Edit />} />
//   <Route path='/cart' element={<Cart />} />
//   <Route path='/auth' element={<Login />} />
//   <Route path='*' element={<Notfound />} />
// </Routes>