import React from "react";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom"
import Addproduct from "./AdminPage/Addproduct";
export default function Showproduct() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products').
            then((res) => { setData(res.data); console.log("res data: ",res.data); }).
            catch((err) => { console.log("ERRORS: " + err) });
    }, []);
    const Edit = (data) => {
        console.log(data);
    }
    const aler = () => {
        alert("cam ơn bạn")
    }

    return (
        <>
            <div className="d-flex justify-content-center row">
                {data ?
                    data.map((e) => (
                        <div className="col-md-3 mx-5 my-5" key={e.id}>
                            <div className="card" style={{ width: '26rem', height: "40rem" }}>
                                <img className="card-img-top img-thumbnail" src={e.image} alt="Card image cap" style={{ width: "100%", height: "65%" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{e.name}</h5>
                                    <p className="card-text">Price: {e.unit_price}$</p>
                                    <p className="card-text">promotion: {e.promotion_price} $</p>
                                    <p className="card-text">{e.description}</p>
                                    <a className="btn btn-primary" onClick={aler}>Buy</a>
                                </div>
                            </div>
                        </div>
                    ))
                    : <h1>Loading ... </h1>
                }
            </div>
        </>
    );
}



