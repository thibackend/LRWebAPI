import React from "react";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom"
import Addproduct from "./AdminPage/Addproduct";
export default function Showproduct() {
    const [data, setData] = useState([]);
    const handleBuy = (id) => {
        alert("Thank you " + id)
    }

    const fetch = async () => {
        try {
            await axios.get("http://localhost:8000/api/products")
                .then((res) => { setData(res.data); console.log("res data: ", res.data); })
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetch();
    }, []);
    return (
        <>
            <div className="d-flex justify-content-center row">
                {data ?
                    data.map((e) => (
                        <div className="col-md-3 mx-5 my-5" key={e.id}>
                            <div className="card" style={{ width: '26rem', height: "40rem" }}>
                                <img className="card-img-top img-thumbnail" src={e.img} alt="Card image cap" style={{ width: "100%", height: "65%" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{e.name}</h5>
                                    <p className="card-text">Price: {e.price}$</p>
                                    <p className="card-text">qty{e.qty} $</p>
                                    <p className="card-text">star{e.star} $</p>
                                    <p className="card-text">{e.description}</p>
                                    <button className="btn btn-success mx-2" onClick={() => handleBuy(e.id)}>Buy</button>
                                    <a className="btn btn-primary">Add cart</a>
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



