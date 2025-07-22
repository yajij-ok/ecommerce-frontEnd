import React from 'react'
import Meta from '../components/meta'
import BreadCrumb from '../components/breadCrumb'
import product_01 from "../../src/assets/images/watch.jpg"
import { AiFillDelete } from "react-icons/ai";
import {Link} from "react-router-dom"
import { RxCross2 } from "react-icons/rx";
const Cart2 = () => {
  return (
    
    <>
    <Meta title ="Your Cart" />
   <BreadCrumb title="cart" />
   <section className="cart-wrapper home-wrapper-2 py-5">
   <div className="container-xl">
   <div className="row">
   <div className="title py-2">
            <h5>Your Cart</h5>
        </div>
    <div className="col-7">
        <div className="cart-card d-flex justify-content-between positon-relative mb-4">
    
        <div className="w-25 p-2">
            <img src={product_01} className="img-fluid" alt="" />
        </div>
        <div className="w-75">
        <div className="border-bottom pt-3 pb-1 px-2 gap-10">
        <h5 className="title">Smart watch with Blutooth 5.0 . headphone enabled.</h5>
        <p className="serial text-secondary">SKT1122</p>
        <p className="size  text-secondary">Size: S</p>
        </div>
        <div className="d-flex justify-content-between align-items-center gap-10 px-3 py-2">
         <p className="quantity">Quantity:</p>
         <div className="quantity">
            <input className="form-control" type="number" name="" min={1} max={10} defaultValue={1} style={{ width: "80px"}} id="" />
        </div>
       <p className="single-price text-secondary">2499/-</p>
       <p className="price">2499/-</p>
        </div>
        
        </div>
        <div  className="position-absolute cart-cross">
        <RxCross2 />
        </div>
        </div>


        <div className="cart-card d-flex justify-content-between positon-relative mb-4">
    
        <div className="w-25 p-2">
            <img src={product_01} className="img-fluid" alt="" />
        </div>
        <div className="w-75">
        <div className="border-bottom pt-3 pb-1 px-2 gap-10">
        <h5 className="title">Smart watch with Blutooth 5.0 . headphone enabled.</h5>
        <p className="serial text-secondary">SKT1122</p>
        <p className="size  text-secondary">Size: S</p>
        </div>
        <div className="d-flex justify-content-between align-items-center gap-10 px-3 py-2">
         <p className="quantity">Quantity:</p>
         <div className="quantity">
            <input className="form-control" type="number" name="" min={1} max={10} defaultValue={1} style={{ width: "80px"}} id="" />
        </div>
       <p className="single-price text-secondary">2499/-</p>
       <p className="price">2499/-</p>
        </div>
        
        </div>
        <div  className="position-absolute cart-cross">
        <RxCross2 />
        </div>
        </div>

        <div className="cart-card d-flex justify-content-between positon-relative mb-4">
    
    <div className="w-25 p-2">
        <img src={product_01} className="img-fluid" alt="" />
    </div>
    <div className="w-75">
    <div className="border-bottom pt-3 pb-1 px-2 gap-10">
    <h5 className="title">Smart watch with Blutooth 5.0 . headphone enabled.</h5>
    <p className="serial text-secondary">SKT1122</p>
    <p className="size  text-secondary">Size: S</p>
    </div>
    <div className="d-flex justify-content-between align-items-center gap-10 px-3 py-2">
     <p className="quantity">Quantity:</p>
     <div className="quantity">
        <input className="form-control" type="number" name="" min={1} max={10} defaultValue={1} style={{ width: "80px"}} id="" />
    </div>
   <p className="single-price text-secondary">2499/-</p>
   <p className="price">2499/-</p>
    </div>
    
    </div>
    <div  className="position-absolute cart-cross">
    <RxCross2 />
    </div>
    </div>

    </div>
     <div className="col-5">
        <div className="cart-right cart-card ms-3 mb-4 py-3 w-90">
    <div className="radio d-flex gap-30 mx-3 py-2 ps-4 border-bottom">
    <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label" for="flexRadioDefault1">
    Home Delivery
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
  <label className="form-check-label" for="flexRadioDefault2">
   Standard Delivery
  </label>
</div>
    </div>

    <div className="d-flex justify-content-between align-items-center mx-3 px-4 pt-4">
        <p className="text-secondary cart-col-1">SubTotal:</p>
        <p className="text-secondary cart-col-4">2499/-</p>
    </div>

    <div className="d-flex justify-content-between align-items-center border-bottom mx-3 px-4 pt-1 pb-1">
        <p className="text-secondary cart-col-1">Delivery:</p>
        <p className="text-secondary cart-col-4">60/-</p>
    </div>

    <div className="d-flex justify-content-between align-items-center border-bottom mx-3 px-4 py-2">
     <h5 className="total cart-col-1">Total</h5>
      <p className="cart-col-4">2559/-</p>
    </div>
    <div className="d-flex flex-column align-items-center text-center gap-15 mx-3 w-60 ps-4 py-4">
    <Link to="/checkout" className="button">
        Checkout
            </Link>
      <Link to="/products" className="button bg-warning">
            Continue to Shopping
        </Link>
    </div>
        </div>
     </div>

   </div>
   <div className="col-12 cart-card mb-4">
    <div className="py-4 mx-4">
   <div className="delivery-info">
    <h5>Delivery information:</h5>
    <p className="text-secondary border-bottom">
      Delivery usually takes 4-7 business Days.
    </p>
    <h6>Home Delivery:</h6>
    <p className="text-secondary">
      Product will be directly delivered to your address (Starndard Charges applied).
    </p>
    <h6>Standard Delivery:</h6>
    <p className="text-secondary">Products will be sent to your nearest Sundharban Courier Office. <br />
    You have to collect them by yourself.
    </p>
   </div>
    </div>
   </div>
     </div>
   </section>
    </>
  )
}

export default Cart2