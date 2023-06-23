import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Addproduct from "./Addproduct";

function Admin() {
    const [data, setData] = useState([]);
    let navigate = useNavigate();
    const getData = async () => {
        try {
            const res = (await axios.get("http://localhost:8000/api/products").
                then(
                    (res) => {
                        setData(res.data);
                    }));
        } catch (err) {
            console.log(err);
        }
    };
    const handleDeleteProduct = async (id) => {
        // Hiển thị cảnh báo xác nhận xóa
        const confirmDelete = window.confirm("Delete this product?");
        if (confirmDelete) {
            try {
                await axios.delete(`http://127.0.0.1:8000/api/products/${id}`);
                // Xóa sản phẩm khỏi danh sách
                const updatedProducts = data.filter((product) => product.id !== id);
                setData(updatedProducts);
            } catch (error) {
                console.error('Error deleting product:', error);
            }
        }
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <Addproduct />
            <table className="table table-striped my-3 mx-2">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>qty</th>
                        <th>star</th>
                        <th>Description</th>
                        <th>status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(
                            (item) => (
                                <tr key={item.id}>
                                    <td><img src={item.img} alt='anh tuong trung' style={{ width: "100px", height: "100px" }} /></td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.qty}</td>
                                    <td>{item.star}</td>
                                    <td>{item.desc}</td>
                                    <td>{item.status}</td>
                                    <td className="d-flex">
                                        <button
                                            onClick={() => handleDeleteProduct(item.id)}
                                            className="btn btn-danger py-2 px-2 mx-4">
                                            Delete
                                        </button>
                                        <Link className="btn btn-primary py-2 px-2 mx-4" to={`edit/${item.id}`}>Edit</Link>
                                    </td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </>
    );
}
export default Admin;
