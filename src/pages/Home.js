import React from 'react'
import Meta from '../components/meta'
import { Link } from 'react-router-dom'
import ProductCard from '../components/productCard'
import SpecialProduct from '../components/specialProduct'
import Marquee from "react-fast-marquee";

import banner_2 from "../../src/assets/images/main-banner-1.jpg"
import catBanner_1 from "../../src/assets/images/catbanner-01.jpg"
import catBanner_2 from "../../src/assets/images/catbanner-02.jpg"
import catBanner_3 from "../../src/assets/images/catbanner-03.jpg"
import catBanner_4 from "../../src/assets/images/catbanner-04.jpg"
import services_1 from "../../src/assets/images/service.png"
import services_2 from "../../src/assets/images/service-02.png"
import services_3 from "../../src/assets/images/service-03.png"
import services_4 from "../../src/assets/images/service-04.png"
import services_5 from "../../src/assets/images/service-05.png"
import laptop from "../../src/assets/images/laptop.png"
import mobile1 from "../../src/assets/images/mobile-1.png"
import tv from "../../src/assets/images/tv.png"
import smart_watch from "../../src/assets/images/smart-watch.png"

import brand_01 from "../../src/assets/images/brand-01.png"
import brand_02 from "../../src/assets/images/brand-02.png"
import brand_03 from "../../src/assets/images/brand-03.png"
import brand_04 from "../../src/assets/images/brand-04.png"
import brand_05 from "../../src/assets/images/brand-05.png"
import brand_06 from "../../src/assets/images/brand-06.png"
import brand_07 from "../../src/assets/images/brand-07.png"
import brand_08 from "../../src/assets/images/brand-08.png"



const Home = () => {
  return (
  <>
<Meta title = "PlayTech" />

 <section className="home-wrapper-1 py-5 px-5">
  <div className="container-xxl">
    <div className="row">
      <div className="col-6">
     <div className="main-banner position-relative me-0 gap-30">
 <div className="main-banner-img">
 <img
src={banner_2}
className="img-fluid rounded-3"
alt="main banner"
/>
 </div>
<div className="main-banner-content position-absolute p-2">
 <h4>HEADPHONE</h4>
 <h5>From 1000tk upto 5000tk</h5>
 <p>GET YOURS</p>
 <Link className="button">BUY NOW</Link>

</div>
     </div>
      </div>
      <div className="col-6">
    <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center py-4 px-1">
    <div className="small-banner position-relative">
     <img
     src={catBanner_1}
     className="img-fluid rounded-1"
     alt="cat banner 1"
     />
     <div className="small-banner-content position-absolute">
     <p className='text-dark'>BEST DEAL</p>
      <h4 className='text-warning'>KEYBOARD SALE</h4>
      <h5 className='text-dark'>UPTO 50% OFF</h5>
      <Link className="button">BUY NOW</Link>

     </div>
     </div>
     <div className="small-banner position-relative">
     <img
     src={catBanner_2}
     className="img-fluid rounded-1"
     alt="cat banner 1"
     />
     <div className="small-banner-content position-absolute">
     <p className='text-dark'>BEST DEAL</p>
      <h4 className='text-danger'>SMART PHONE</h4>
      <h5 className='text-dark'>UPTO 30% OFF</h5>
      <Link className="button">BUY NOW</Link>

     </div>
     </div>
     <div className="small-banner position-relative">
     <img
     src={catBanner_3}
     className="img-fluid rounded-1"
     alt="cat banner 1"
     />
     <div className="small-banner-content position-absolute">
     <p className='text-dark'>NEW ARRIVAL</p>
      <h4 className='text-info'>MACBOOK PRO</h4>
      <h5 className='text-dark'>AT BEST PRICES!</h5>
      <Link className="button">BUY NOW</Link>

     </div>
     </div>
     <div className="small-banner position-relative">
     <img
     src={catBanner_4}
     className="img-fluid rounded-1"
     alt="cat banner 1"
     />
     <div className="small-banner-content position-absolute">
      <p className='text-dark'>NEW ARRIVAL</p>
      <h4 className='text-warning'>iPHONE 14 PRO</h4>
      <h5 className='text-dark'>AT BEST PRICES!</h5>
      <Link className="button">BUY NOW</Link>

     </div>
     </div>
    </div>
      </div>
    </div>
  </div>
</section>


<section className="home-wrapper-2 py-2">
  <div className="container-xl">
    <div className="row">
    <div className="col-12">
      <div className="services d-flex align-items-center justify-content-between ps-6 gap-30">
        <div className="d-flex align-items-center gap-10">
          <img src={services_1} alt="services-1" className='service-icon' />
          <div className="py-1">
            <h6>Free shipping</h6>
            <p>From all orders over 5000Tk</p>
          </div>
        </div>
        <div className="d-flex align-items-center gap-10">
          <img src={services_2} alt="fdhg" className='service-icon' />
          <div className="py-1">
            <h6>Surprise offers</h6>
            <p>Save upto 25%</p>
          </div>
        </div>
        <div className="d-flex align-items-center gap-10">
          <img src={services_3} alt="dhg" className='service-icon' />
          <div className="py-1">
            <h6>Support 24/7</h6>
            <p>Shop with an expert</p>
          </div>
        </div>
        <div className="d-flex align-items-center gap-10">
          <img src={services_4} alt="dtgjhtg" className='service-icon' />
          <div className="py-1">
            <h6>Affordable Prices</h6>
            <p>Get factory default price</p>
          </div>
        </div>
        <div className="d-flex align-items-center gap-10">
          <img src={services_5} alt="" className='service-icon' />
          <div className="py-1">
            <h6>Secure payment</h6>
            <p>100% protected payment</p>
          </div>
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

<section className="famous-wrapper py-3 home-wrapper-2 pb-5">
  <div style={{"height": "350px"}} className="container-xl">
    <div className="row">
    <div className="col-12">
        <h3 className="section-heading">Famous Collection</h3>
      </div>
      <div className="col-3">
     <div style={{"height": "350px"}} className="famous-card bg-danger text-white p-3">
    <p>Big screen</p>
    <h5>Smart Watch Series 7</h5>
    <p> From 2999/- to 6499/-</p>
    <img src={smart_watch} alt="" className="img-fluid" /> 
     </div>
     </div>
     <div className="col-3">
     <div style={{"height": "350px"}} className="famous-card bg-white text-white p-3">
    <p className="text-dark">Studio Display</p>
    <h5 className="text-dark">600 Nits of Brightness</h5>
    <p className="text-dark"> 16-inch 4k display Laptop</p>
    <img src={laptop} alt="" className="img-fluid py-3" /> 
     </div>
     </div>
     <div className="col-3">
     <div style={{"height": "350px"}} className="famous-card bg-info text-white p-3">
    <p className="text-white">Smart Phone</p>
    <h5 className="text-white">Higher Display Ratio</h5>
    <p className="text-white">Latest Iphone 14 Pro</p>
    <img src={mobile1} alt="" className="img-fluid py-1" /> 
     </div>
     </div>
     <div className="col-3">
     <div className="famous-card bg-dark text-white p-3">
    <p className="text-white">Smart TV</p>
    <h5 className="text-white">Watch The World In HD</h5>
    <p className="text-white">4k Smart TV</p>
    <img src={tv} alt="" className="img-fluid py-1 px-2" /> 
     </div>
     </div>
    </div>
  </div>
</section>

<section className="special-wrapper py-4 home-wrapper-2">
  <div className="container-xl">
    <div className="row">
      <div className="col-12">
        <h3 className="section-heading">Special Products</h3>
      </div>
    </div>
    <div className="row">
      <SpecialProduct/>
      <SpecialProduct/>
      <SpecialProduct/>
    </div>
  </div>
</section>

<section className="marquee-wrapper py-5">
  <div className="container-xl">
   <div className="row">
   <div className="col-12">
     <div className="marquee-inner-wrapper card-wrapper">
     <Marquee className="d-flex">
     <div className="mx-3 w-5">
      <img src={brand_01} alt="brand" className="brand-pic"/>
     </div>
     <div className="mx-3 w-5">
      <img src={brand_02} alt="brand" className="brand-pic"/>
     </div>
     <div className="mx-3 w-5">
      <img src={brand_03} alt="brand" className="brand-pic"/>
     </div>
     <div className="mx-3 w-5">
      <img src={brand_04} alt="brand" className="brand-pic"/>
     </div>
     <div className="mx-3 w-5">
      <img src={brand_05} alt="brand" className="brand-pic"/>
     </div>
     <div className="mx-3 w-5">
      <img src={brand_06} alt="brand" className="brand-pic"/>
     </div>
     <div className="mx-3 w-5">
      <img src={brand_07} alt="brand" className="brand-pic"/>
     </div>
     <div className="mx-3 w-5">
      <img src={brand_08} alt="brand" className="brand-pic"/>
     </div>
      </Marquee>
     </div>
    </div>
   </div>
  </div>
</section>

  </>
  )
}

export default Home