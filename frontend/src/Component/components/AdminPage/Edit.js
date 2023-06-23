import axios from "axios";
import { CircularProgress } from "@chakra-ui/progress";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Edit() {
    const { id } = useParams();
    const [data, setData] = useState({});
    let navigate = useNavigate();

    const [img, setImg] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [star, setStar] = useState(0);
    const [desc, setDesc] = useState('');
    const [qty, setQty] = useState(0);
    const [dataupdate, setDataupdate] = useState([]);
    const getData = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/products/${id}`);
            setData(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (!data) {
            getData();
        }
        setDataupdate({
            img, name, price, star, desc, qty
        })

    }, [img, name, price, star, desc, qty]);


    const handleSubmit = (e) => {
        e.preventDefault();
        const update = async () => {
            console.log("data update:", dataupdate);
            console.log("data old:", data);
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
                                value={data.img}
                                onChange={(e) => setImg(e.target.value)}
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
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="price">Price:</label>
                            <input
                                className="form-control"
                                type="number"
                                step="0.01"
                                id="price"
                                name="price"
                                value={data.price}
                                onChange={(e) => setPrice(e.target.value)}
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
                                onChange={(e) => setStar(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="star">Description</label>
                            <textarea
                                className="form-control"
                                type="text"
                                value={data.desc}
                                onChange={(e) => setDesc(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="qty">Quantity</label>
                            <input
                                className="form-control"
                                type="number"
                                value={data.qty}
                                onChange={(e) => setQty(e.target.value)}
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
