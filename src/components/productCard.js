import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
import product_01 from "../../src/assets/images/watch.jpg"
import product_01t from "../../src/assets/images/watch-1.jpg"
import add_cart from "../../src/assets/images/add-cart.svg"
import compare from "../../src/assets/images/prodcompare.svg"
import view from "../../src/assets/images/view.svg"
import wishlist from "../../src/assets/images/wish.svg"



const ProductCard = (props) => {
    const {grid}= props;
    let location = useLocation();
  return (
   <div className={` ${location.pathname =="/store" ? `gr-${grid}` : "col-3"} `}>
    <Link to="product/:id" className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <Link>
            <img src={wishlist} alt="w" />
            </Link>
        </div>
        <div className="product-image">
            <img src={product_01} alt="product-img" className="img-fluid" />
            <img src={product_01t} alt="psroduct-img" className="img-fluid"/>
            
        </div>
        <div className="product-details mt-3">
            <h6 className="brand">Havels</h6>
            <h5 className="product-name">Smart watch with Blutooth 5.0 . headohone enalbled.</h5>
            <ReactStars
             count={5} size={24} value='3' activeColor="#ffd700"
             />
            <p className="price">3,499.00/-</p>
        </div>
        <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
        <Link>
        <img src={compare} alt="add cart" />
        </Link>
        <Link>
        <img src={view} alt="add cart" />
        </Link>
        <Link>
        <img src={add_cart} alt="add cart" />
        </Link>
            </div>
        </div>
      
    </Link>
   </div>
  )
}

export default ProductCard