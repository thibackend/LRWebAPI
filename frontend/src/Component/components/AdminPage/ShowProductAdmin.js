import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Edit from "./Edit";
import Addproduct from "./Addproduct";

function Admin() {
    const [data, setData] = useState([]);
    const [status, setStatus] = useState(0);
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
    useEffect(() => {

        getData();
    }, [status]);
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/products/${id}`)
                .then(res => { alert(res.data.mes + ` ${id}`); setStatus(status + 1) });
        } catch (error) {
            console.error(error);
            // Xử lý lỗi khi xóa sản phẩm không thành công
        }
    };
    return (
        <>
            <Addproduct />
            <table className="table table-striped my-3 mx-3">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Star</th>
                        <th>Price</th>
                        <th>Sale Number</th>
                        <th>Promote</th>
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
                                    <td>{item.unit_price}</td>
                                    <td>{item.unit}</td>
                                    <td>{item.sale_number}</td>
                                    <td>{item.promotion_price}</td>
                                    <td>
                                        <button className="btn btn-danger py-2 px-2 mx-4" onClick={() => handleDelete(item.id)}>
                                            Delete
                                        </button>
                                        <Link className="btn btn-primary"  to={`edit/${item.id}`}>Edit</Link>
                                    
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
