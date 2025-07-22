import React from 'react';
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
import product_01 from "../../src/assets/images/watch.jpg"

//  

const SpecialProduct = () => {
  return (
<div className="col-4">
    <div className="special-product-card">
    <div className="d-flex justify-content-center p-2">
          <div className="special-product-img">
            <img src={product_01} alt="" className="img-fluid" />
          </div>
          <div className="special-product-content">
            <h6>havels</h6>
            <h5>
                Samsung Galaxy Note 10+ Mobile Phone.
            </h5>
            <ReactStars
             count={5} size={24} value='3' edit={false} activeColor="#ffd700"/> 
    <p className="price">
    &nbsp; <strike>45,000/-</strike>  <span className="red-p"> 40,000/-</span> 
    </p>
    <div className="discount-till d-flex align-items-center gap-30">
      <p className="mb-2">
        <b>5-days</b>
      </p>
      <div className="d-flex gap-10 align-items-center">
        <span className="badge rounded-circle p-2 bg-warning">d</span>:
        <span className="badge rounded-circle p-2 bg-warning">f</span>:
        <span className="badge rounded-circle p-2 bg-warning">s</span>
      </div>
      </div>
      <div className="prod-count my-3">
        <p>Products: 10</p>
        <div className="progress">
  <div className="progress-bar"
   role="progressbar"
    style={{"width": "25%"}}
     aria-valuenow="25" aria-valuemin="0"
      aria-valuemax="100">
</div>
</div>
      </div>
      <Link className="button">Add to Cart</Link>
  
          </div>
        </div>
    </div>
</div>
  )
}

export default SpecialProduct;