import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Select } from "@chakra-ui/select"


const Addproduct = () => {
  const navigate = useNavigate();
  const [type, setType] = useState([])
  const [data, setData] = useState(
    {
      img: '',
      name: '',
      star: 0,
      price: 0,
      qty: 0,
      desc: '',
      status: 1,
      desc: '',
      type_product_id: 0
    }
  );
  const GettypeProduct = async () => {
    try {
      await axios.get('http://localhost:8000/api/type_products').then(e => { setType(e.data); })
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    GettypeProduct();
  }, []);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((data) => ({
      ...data,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data push :", data);
    const postData = async () => {
      await axios.post('http://localhost:8000/api/products', data)
        .then(res => { alert("Add successful !"); navigate('/admin'); });

    }
    postData();
  }
  return (
    <>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
        ADD
      </button>
      <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">ADD PRODUCT </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form style={{ width: '100%' }} className="form-group">
                <label style={{ width: '100%' }}>
                  Image:
                  <input
                    style={{ width: '100%' }}
                    className="form-control"
                    placeholder="enter the link image"
                    type="text"
                    id="img"
                    name="img"
                    onChange={handleChange}
                  />
                </label>
                <br />
                <label style={{ width: '100%' }}>
                  Name:
                  <input
                    style={{ width: '100%' }}
                    className="form-control"
                    placeholder="enter the product name"
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleChange}
                  />
                </label>
                <br />
                <label style={{ width: '100%' }}>
                  Star:
                  <input
                    style={{ width: '100%' }}
                    className="form-control"
                    placeholder="enter the star number"
                    type="number"
                    id="star"
                    name="star"
                    onChange={handleChange}

                  />
                </label>
                <br />
                <label style={{ width: '100%' }}>
                  Price:
                  <input
                    style={{ width: '100%' }}
                    className="form-control"
                    placeholder="enter the price"
                    type="number"
                    id="price"
                    name="price"
                    onChange={handleChange}
                  />
                </label>
                <br />
                <label style={{ width: '100%' }}>
                  quantity:
                  <input
                    style={{ width: '100%' }}
                    className="form-control"
                    placeholder="enter the quantity"
                    type="number"
                    id="qty"
                    name="qty"
                    onChange={handleChange}
                  />
                </label>
                <br/>
                <label style={{ width: '100%' }}>
                  Status:
                  <input
                    style={{ width: '100%' }}
                    className="form-control"
                    placeholder="Enter status"
                    type="number"
                    name="status"
                    id="status"
                    onChange={handleChange}
                  />
                </label>
                <label style={{ width: '100%' }}>
                  Description:
                  <input
                    style={{ width: '100%' }}
                    className="form-control"
                    placeholder="Enter status"
                    type="text"
                    name="desc"
                    id="desc"
                    onChange={handleChange}
                  />
                </label>
                <br />
                <label style={{ width: '100%' }}>
                  type_product_id:
                  <br />
                  <Select
                    placeholder={type ? "Choose type product" : "loading ..."}
                    type="number"
                    className="form-control my-3"
                    id="type_product_id"
                    name="type_product_id"
                    onChange={handleChange}
                  >
                    {type ? type.map(
                      e => (
                        <option key={e.id} value={e.id}>{e.name}</option>
                      )
                    ) : ""}
                  </Select>
                </label>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary" onClick={handleSubmit} >ADD</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Addproduct;