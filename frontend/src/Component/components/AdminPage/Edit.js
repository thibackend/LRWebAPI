import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function Edit(props) {
    // const { id } = useParams();
    // const data = JSON.parse(localStorage.getItem('product'));
    // let productFound = data.find(product => product.id == id);
    // const [img, setImg] = useState('');
    // const [name, setName] = useState('');
    // const [star, setStar] = useState(0);
    // const [price, setPrice] = useState(0);
    // const [sale_number, setSaleNumber] = useState(0);
    // const [promote, setPromote] = useState(0);

    let navigate = useNavigate();

    // // const [formData, setFormData] = useState({
    // //     img: '',
    // //     name:'',
    // //     star: 0,
    // //     price: 0,
    // //     sale_number: 0,
    // //     promote: 0
    // // });

    // useEffect(() => {
    //     // setFormData({
    //     //     img: productFound.img,
    //     //     name: productFound.name,
    //     //     star: productFound.star,
    //     //     price: productFound.price,
    //     //     sale_number: productFound.sale_number,
    //     //     promote: productFound.promote
    //     // })
    //     setImg(productFound.img);
    //     setName(productFound.name);
    //     setStar(productFound.star);
    //     setPrice(productFound.price);
    //     setPromote(productFound.sale_number);
    // }, [])

    // // const handleChange = (event) => {
    // //     // const { name, value } = event.target;
    // //     // setFormData((prevFormData) => ({
    // //     //     ...prevFormData,
    // //     //     [name]: value
    // //     // }));
    // // };

    const handleSubmit = (e) => {
        //     e.preventDefault();
        //     const update = async () => {
        //         try {
        //             await axios.put(`http://localhost:8000/api/products/${id}`,
        //                 {
        //                     img,
        //                     name,
        //                     star,
        //                     price,
        //                     sale_number,
        //                     promote
        //                 }).then((res) => { alert(res.data.mes) });
        //         } catch (error) {
        //             console.log(error);
        //         }
        navigate('/admin');
        //     }
        //     update();

    }
    return (
        <>

            <div className="w-50 justify-content-center mx-5">

                <form method="put" onSubmit={handleSubmit}>
                    <h2>  PRODUCT UPDATE </h2>
                    <hr />
                    <div style={{ width: '100%' }}>
                        <label htmlFor="img">Image:</label>
                        <input
                            className="form-control"
                            type="text"
                            id="img"
                            name="img"
                            value={props.id}
                        // onChange={(e) => setImg(e.target.value)}
                        />
                    </div>


                    <div style={{ width: '100%' }} >
                        <label htmlFor="name">Name:</label>
                        <input
                            className="form-control"
                            type="text"
                            id="name"
                            name="name"
                        // value={name}
                        // onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="star">Star:</label>
                        <input
                            className="form-control"
                            type="number"
                            id="star"
                            name="star"
                        // value={star}
                        // onChange={(e) => setStar(e.target.value)}
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
                        // value={price}
                        // onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="promote">Promote:</label>
                        <input
                            className="form-control"
                            type="number"
                            id="promote"
                            name="promote"
                        // value={promote}
                        // onChange={(e) => setPromote(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary my-5" >edit</button>
                    <Link to={'/admin'} type="button" className="btn btn-danger mx-3" >close</Link>
                </form>
            </div>
        </>
    );
}
export default Edit;