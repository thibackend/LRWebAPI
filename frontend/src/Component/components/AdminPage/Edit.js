import axios from "axios";
import { CircularProgress } from "@chakra-ui/progress";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Edit() {
    const { id } = useParams();
    const [data, setData] = useState({
        img: '', name: '', price: 0, star: 0, desc: '', qty: 0, type_product_id: 0
    });
    let navigate = useNavigate();
    const getData = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/products/${id}`);
            setData(response.data);
        } catch (err) {
            console.log(err);
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };
    useEffect(() => {
        if (!data.price) {
            getData();
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const update = async () => {
            console.log('data update :', data);
            try {
                await axios.post(`http://localhost:8000/api/products/${id}`, data)
                    .then(res => {
                        if (res.data.price) {
                            console.log("data response:",res.data);
                            navigate('/admin');
                        }
                    })
            } catch (error) {
                console.log(error);
            }
        };
        update();
    };
    return (
        <>
            <div className="w-50 justify-content-center mx-5">
                {data ? (
                    <form method="put" onSubmit={handleSubmit}>
                        <h2>PRODUCT UPDATE</h2>
                        <hr />
                        {/* Rest of the form code */}
                        <div style={{ width: '100%' }}>
                            <label htmlFor="img">Image:</label>
                            <input
                                className="form-control"
                                type="text"
                                id="img"
                                name="img"
                                value={data.img}
                                onChange={handleChange}
                            />
                        </div>
                        <div style={{ width: '100%' }}>
                            <label htmlFor="name">Name:</label>
                            <input
                                className="form-control"
                                type="text"
                                id="name"
                                name="name"
                                value={data.name}
                                onChange={handleChange}

                            />
                        </div>

                        <div>
                            <label htmlFor="price">Price:</label>
                            <input
                                className="form-control"
                                type="number"
                                id="price"
                                name="price"
                                value={data.price}
                                onChange={handleChange}

                            />
                        </div>
                        <div>
                            <label htmlFor="star">Star:</label>
                            <input
                                className="form-control"
                                type="number"
                                id="star"
                                name="star"
                                value={data.star}
                                onChange={handleChange}

                            />
                        </div>

                        <div>
                            <label htmlFor="star">Description</label>
                            <textarea
                                className="form-control"
                                type="text"
                                name="desc"
                                value={data.desc}
                                onChange={handleChange}

                            />
                        </div>

                        <div>
                            <label htmlFor="qty">Quantity</label>
                            <input
                                className="form-control"
                                type="number"
                                name="qty"
                                value={data.qty}
                                onChange={handleChange}

                            />
                        </div>

                        <button type="submit" className="btn btn-primary my-5">
                            edit
                        </button>
                        <button onClick={() => navigate('/admin')} type="button" className="btn btn-danger mx-5">
                            close
                        </button>
                    </form>
                ) : (
                    <CircularProgress isIndeterminate color="green.300" />
                )}
            </div>
        </>
    );
}

export default Edit;
