import React, { useState } from "react";
import axios from "axios";

const Addproduct = () => {
  const [name, setname] = useState();
  const [img, setimg] = useState();
  const [star, setstar] = useState();
  const [price, setprice] = useState();
  const [sale_number, setsale_numer] = useState();
  const [promote, setpromote] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/products', {
      name,
      img,
      star,
      price,
      sale_number,
      promote
    })
      .then(res => { console.log(alert(res.data.message)); })
      .catch(err => { console.log(err); })
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
                    name="img"
                    onChange={(e) => { setimg(e.target.value) }}
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
                    name="name"
                    onChange={(e) => { setname(e.target.value) }}
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
                    name="star"
                    onChange={(e) => { setstar(e.target.value) }}
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
                    name="price"
                    onChange={(e) => { setprice(e.target.value) }}
                  />
                </label>
                <br />
                <label style={{ width: '100%' }}>
                  Sale Number:
                  <input
                    style={{ width: '100%' }}
                    className="form-control"
                    placeholder="enter the sale number"
                    type="number"
                    name="sale_number"
                    onChange={(e) => { setsale_numer(e.target.value) }}
                  />
                </label>
                <br />
                <label style={{ width: '100%' }}>
                  Promote:
                  <input
                    style={{ width: '100%' }}
                    className="form-control"
                    placeholder="enter the total promote"
                    type="number"
                    name="promote"
                    onChange={(e) => { setpromote(e.target.value) }}
                  />
                </label>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleSubmit} >ADD</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addproduct;