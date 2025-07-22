import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ReactImageZoom from 'react-image-zoom';
import Meta from '../components/meta'
import BreadCrumb from '../components/breadCrumb'
import ProductCard from '../components/productCard'
import ReactStars from "react-rating-stars-component";
import product_01 from "../../src/assets/images/watch.jpg"
import { BsHeart,  BsRepeat} from 'react-icons/bs'

const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true);
  const props = {width: 400, height: 300, zoomWidth: 300, img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"};
 const copyToClipboard = (text) => {
  console.log('text', text)
  var textField = document.createElement('textarea')
  textField.innerText = text
  document.body.appendChild(textField)
  textField.select()
  document.execCommand('copy')
  textField.remove()
}
 return (
<>
<Meta title ={"Product Name"} />
   <BreadCrumb title={"Product Name" }/>
 
   <div className="main-product-wrapper py-4 home-wrapper-2 bg-white">
    <div className="container-xl">
        <div className="row">
            <div className="col-6"> 
            <div className="main-product-image p-2">
          <div className="w-90">
          <ReactImageZoom {...props} />
          </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-10 p-2">
           <div>
            <img src={product_01} className="img-fluid" alt="" />
           </div>
           <div>
            <img src={product_01} className="img-fluid" alt="" />
           </div>
           <div>
            <img src={product_01} className="img-fluid" alt="" />
           </div>
           <div>
            <img src={product_01} className="img-fluid" alt="" />
           </div>
            </div>
            </div>
            <div className="col-6">
          <div className="main-product-details p-3">
            <div>
              <h5>Smart watch with Blutooth 5.0 . headphone enabled.</h5>
              <h5 className="py-2">2499/-</h5>
               <ReactStars
    count={5} size={18} value='3.5' edit={false} activeColor="#ffd700"/>
              <p><a href="" className="py-2 text-dark">Write a review</a></p>
            </div>
            <div>
               <div className="d-flex flex-wrap py-2">
              <h5 className="pe-2">Type:</h5>
              <p>Smart Watch</p>
              </div>
            <div className="d-flex flex-wrap py-2">
              <h5 className="pe-2">Brand:</h5>
              <p>Havels</p>
            </div>
             <div className="d-flex flex-wrap py-2">
              <h5 className="pe-2">Categories:</h5>
              <p>Watch</p>
              </div>
              <div className="d-flex flex-wrap py-2">
              <h5 className="pe-2">Tags:</h5>
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
             <div>
              <h5 className="py-2">Color:</h5>
              <ul className="colors ps-0">
            <li></li>
            </ul>
             </div>
             <div  className="d-flex flex-wrap py-2">
                <h5 className="pe-2">Screen:</h5>
                <p>720 X 720 pixels </p>
              </div>
              <div  className="d-flex flex-column py-2">
                <h5 className="pe-2">Size:</h5>
                <div className="d-flex flex-wrap gap-15 py-2">
                  <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                  <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                  <span className="badge border border-1 bg-white text-dark border-secondary">L</span>

                </div>
              </div>
              
                 <div className="d-flex flex-wrap py-2">
                  <h5 className="pe-2">Warranty:</h5>
                  <p>6 Month Brand Warranty</p>
                 </div>
                 <div className="d-flex flex-wrap py-2">
                    <h5 className="pe-2">SKU:</h5>
                    <p>SKU1998</p>
                  </div>
                   <div className="d-flex flex-wrap py-2">
                    <h5 className="pe-2">Available:</h5>
                    <p>Yes</p>
                  </div>
                  <div className="d-flex flex-column py-2">
                    <h5 className="pe-2">Quantity:</h5>
                    <div className="py-2 d-flex justify-content-center gap-15">
                      <input type="number" name="" min={1} max={10} style={{ width: "30px"}} id="" />
                     
                      <button className="button border-0">Buy Now</button>
                      <button className="button border-0 bg-warning text-dark">Add to Cart</button>
                      
                    </div> 
                  </div>
                  <div className="d-flex flex-wrap gap-15 py-2">
                    <div className="d-flex gap-10">
                      <BsHeart className="mt-1"/>
                      <a href="" className="mb-0">Add to Wishlist</a>
                    </div>
                    <div className="d-flex gap-10">
                    <BsRepeat  className="mt-1"/>
                      <a href="">Add to Compare</a>
                    </div>
                  </div>
                  </div>
          
                  <div className="d-flex flex-wrap py-2">
              <h5 className="pe-2">Shipping & Returns:</h5>
              <p>Free shipping and returns available on all order! <br /> We ship all orders in seven commercial days.</p>
              </div>
              <div className="d-flex flex-wrap py-2">
              <h5 className="pe-2">Product link:</h5>
              <a href="javascript:void(0);" onClick={()=>{
                copyToClipboard("https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg")
                }}>Copy product link</a>
              </div>

          </div>
            </div>
        </div>
        
    </div>
   </div>
   <div className="description-wrapper py-2 home-wrapper-2">
    <div className="container-xl">
      <div className="row">
        <div className="col-12">
          <div className="bg-white p-3">
          <h5>Description:</h5>
          <p className="bg-white p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, earum tempora! Obcaecati, quae. Obcaecati provident consequuntur, alias expedita cupiditate, minima minus ipsum error veniam, aspernatur delectus! Facilis, voluptatibus itaque. Eos?
          </p>
          </div>
        </div>
      </div>
    </div>
   </div>
   <section className="reviews-wrappers py-4 home-wrapper-2">
    <div className="container-xl">
        <div className="row">
        <div className="col-12  p-3 bg-white">
       <div className="review-head d-flex justify-content-between align-items-end">
        <div className="review-inner">
          <h5>Customer Review</h5>
         <div className="d-flex gap-15 align-items-center">
         <ReactStars
    count={5} size={18} value='3.5' edit={false} activeColor="#ffd700"/>
    <p className="mb-0">Based on 2 reviews</p>
         </div>
        </div>
        {orderedProduct && (
          <div>
        <a href=""> Write a review </a>
        </div>
        )}
       </div>
       <div className="review-form p-2">
        <form action="" className="d-flex flex-column gap-15">
          <div>
            <h5>Write a review</h5>
          <ReactStars
    count={5} size={18} value='0' edit={true} activeColor="#ffd700"/>
          </div>
          <div>
           <textarea name="" id="" className="w-100 form-control" cols="30" rows="4" placeholder="Comment"></textarea>
          </div>
          <div className="d-flex justify-content-end">
            <button className="button border-0">Submit</button>
          </div>
        </form>
       </div>
       <div className="reviews mt-5">
        <div className="review">
        <div className="d-flex gap-10">
          <h6 className="mb-0 pb-0">Bakkar</h6>
        <ReactStars
    count={5} size={18} value='3.5' edit={false} activeColor="#ffd700"/>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur neque ad eum molestiae dolores hic voluptate eaque officia dolorum odio, doloremque, animi molestias cupiditate rerum expedita dolorem deleniti laboriosam </p>
        </div>
       </div>
        </div>
        </div>
    </div>
   
   </section>
   <section className="featured-wrapper py-3"> 
  <div className="container-xl">
    <div className="row">
      <div className="col-12">
        <h3 className="section-heading">Featured Collection</h3>
      </div>
      <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>

    </div>
  </div>
</section>
   </>
  )
}

export default SingleProduct