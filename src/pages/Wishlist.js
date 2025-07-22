import React from 'react'
import Meta from '../components/meta'
import BreadCrumb from '../components/breadCrumb'
import product_01 from "../../src/assets/images/watch.jpg"
import cross from "../../src/assets/images/cross.svg"
const Wishlist = () => {
  return (
   <>
     <Meta title ="Favourite Products" />
   <BreadCrumb title="wishlist" />
   <div className="wishlist-wrapper home-wrapper-2 py-5">
    <div className="container-xl">
        <div className="row">
            <div className="col-3">
          <div className="wishlist-card position-relative">
          <img src={cross} alt="cross" className="position-absolute cross img-fluid" />
            <div className="wishlist-card-image">
            <img src={product_01} alt="watch" className="img-fluid" />
            </div>
            <div className="compare-product-details mb-2">
                <h6 className="title">
                    Havells Smart Watch 2023
                </h6>
                <h7 className="price">2599/-</h7>
            </div>
          </div>
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Wishlist