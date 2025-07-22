import React, { useState } from 'react'
import BreadCrumb from '../components/breadCrumb'
import Meta from '../components/meta'
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/productCard';

import product_01 from "../../src/assets/images/watch.jpg"
import smart_TV from "../../src/assets/images/tv.png"
import gr from "../../src/assets/images/gr.svg"
import gr2 from "../../src/assets/images/gr2.svg"
import gr3 from "../../src/assets/images/gr3.svg"
import gr4 from "../../src/assets/images/gr4.svg"


const OurStore = () => {
const [grid, setGrid] = useState(4);

  return (
<>
<Meta title = "Our Store" />
<BreadCrumb title="Our Store" />

<div className="store-wrapper home-wrapper-2 py-3">
  <div className="container-xl">
    <div className="row">
      <div className="col-3">
        <div className="filter-card mb-2">
        <h3 className="filter-title">Shop By Categories</h3>
        <div>
          <ul className="ps-0">
          <li>Smart Phone</li>
            <li>Watch</li>
            <li>TV</li>
            <li>Camera</li>
            <li>Laptop</li>
          </ul>
        </div>
        </div>


        <div className="filter-card mb-2">
        <h3 className="filter-title">Filter By</h3>
        <div>
          <h5 className="sub-title">Availablity</h5>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id='' checked />
            <label class="form-check-label" htmlFor="">
            In Store(1)
              </label>
              </div>
              <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id='' />
            <label class="form-check-label" htmlFor="">
            Out of Store(0)
              </label>
              </div>
        </div>

        <div>
          <h5 className="sub-title">Price</h5>
          <div className="d-flex align-items-center gap-10">
          <div className="form-floating mb-3">
         <input type="email" className="form-control" id="floatingInput" placeholder="From"/>
         <label htmlFor="floatingInput">From</label>
</div>

     <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="To"/>
  <label htmlFor="floatingInput">To</label>
</div>
     </div>
        </div>
         <div>

          <h5 className="sub-title">Colours</h5>
          <div>
          <ul className="colors ps-0">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
</div>
        </div>

        <div>
          <h5 className="sub-title">Size</h5>
          <div className="form-check">
            <input class="form-check-input" type="checkbox" value="" id="color-1"/>
            <label class="form-check-label" htmlFor="color-1">
            S (2)
              </label>
              </div>
              <div className="form-check">
            <input class="form-check-input" type="checkbox" value="" id="color-2"/>
            <label class="form-check-label" htmlFor="color-2">
            S (2)
              </label>
              </div>
        </div>
        </div>

        <div className="filter-card mb-2">
        <h3 className="filter-title">Product Tags</h3>
        <div className="products-tags d-flex flex-wrap align-items-center gap-10">
      <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
        headphone
      </span>
      <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
       laptop
      </span>
      <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
        mobile
      </span>
      <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
        watch
      </span>
        </div>
        </div>

        <div className="filter-card mb-2">
        <h3 className="filter-title">Random Product</h3>
        <div className="random-products">
         <div className="random-prod-1 d-flex">
         <div className="w-50">
            
            <img src={product_01} alt="" className="img-fluid"/>
        
          </div>
          <div className="w-50 py-2">
          <h6>Watch for Man</h6>
         
          <ReactStars
    count={5} size={24} value='3' edit={false} activeColor="#ffd700"/>

     <b>1499/-</b>
 </div>
         </div>

         <div className="random-prod-2 d-flex">
         <div className="w-50">
            <img src={smart_TV} alt="" className="img-fluid"/>
          </div>
          <div className="w-45 py-3 ps-2">
          <h6>4K Smart TV</h6>
         
          <ReactStars
    count={5} size={24} value='4' edit={false} activeColor="#ffd700"/>
     <b>15,999/-</b>
 </div>
         </div>
        </div>
        </div>
      </div>

      <div className="col-9">
        <div className="filter-sort-grid mb-3">
         <div className="sort-by d-flex justify-content-between align-items-center">
         <div className="d-flex align-items-center gap-10">
            <p className="mb-0 d-block" style={{"width": "100px"}}>Sort by:</p>
            <select name="" className="form-control form-select py-1" id="">
              <option value="manual">Featured</option>
              <option value="best-selling" selected="selected" >Best Selling</option>
              <option value="title-ascending">Alphabetically, A-Z</option>
              <option value="title-descending">Alphabetically, Z-A</option>
              <option value="price-ascending">Price, low to high</option>
              <option value="title-descending">price, high to low</option>
            </select>
          </div>
          <div className="d-flex align-items-center gap-10 grid">
            <p className="total-products mb-0">21 Products</p>
            <div className="d-flex gap-10 align-items-center grid">
            <img
            onClick={()=>{setGrid(4)}}
            src={gr4} alt="grid" className="d-block img-fluid"/>
            <img
            onClick={()=>{setGrid(3)}}
            src={gr3} alt="grid" className="d-block img-fluid"/>
            <img
            onClick={()=>{setGrid(2)}}
              src={gr2} alt="grid" className="d-block img-fluid"/>
            <img
            onClick={()=>{setGrid(1)}}
             src={gr} alt="grid" className="d-block img-fluid"/>
            </div>
          </div>
         </div>

        </div>

      <div className="product-list d-flex align-items-center flex-wrap gap-10 pb-4">
      <ProductCard grid={grid} />
      <ProductCard grid={grid} />
      <ProductCard grid={grid} />
      <ProductCard grid={grid} />
      </div>
      </div>
    </div>
  </div>
</div>
</>
  )
}


export default OurStore