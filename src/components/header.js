import React from 'react'
import {NavLink, Link, useLocation} from 'react-router-dom'
import {BsSearch , BsCart4, BsHeart, BsPerson, BsRepeat} from 'react-icons/bs'
import {CgMenuGridO} from 'react-icons/cg'

const Header = () => {
  let location = useLocation();
  return (
   <>
    <header className="header-top-strip py-1">
      <div className="container xl">
        <div className="row">
          <div className="col-6">
            <p className="text-white mb-0">Free shipping Over 5000Tk & Free return.</p>
          </div>
          <div className="col-6">
            <p className="text-end text-white mb-0">
              Hotline: <a href="tel: 01394837858474" className="text-white">Call</a>
              </p>
          </div>
        </div>
      </div>
    </header>
    <header className="header-upper py-4">
      <div className="container-xxl">
        <div className="row align-items-center ps-3">
          <div className="col-2">
            <h2 className="ps-4">
              <Link to="/" className="text-white">PlayTech</Link>
            </h2>
          </div>
         <div className="col-5">
         <div class="input-group ps-2">
  <input type="text" class="form-control py-1" placeholder="Search Product Here..." aria-label="Search Product Here..." aria-describedby="basic-addon1"/>
  <span className="input-group-text p-1" id="basic-addon1">
   <BsSearch />
    </span>
</div>
         </div>
         <div className="col-5">
          <div className="header-upper-links ms-5 gap-10">
            <div className={`${location.pathname==="compare-product" ? "text-warning" : "text-white"}`} >
              <Link to="/compare-product" className="text-white d-flex align-items-center" >
            <BsRepeat className='icons' />
              <p className="text-white m-1">Compare <br />Products</p>
              </Link>
            </div>
            <div>
            <Link to="/login" className="d-flex align-items-center">
              <BsPerson className='icons'/>
              <p  className="text-white m-1">My <br />Account</p>
              </Link>
            </div>
            <div>
              <Link to="/wishlist" className="d-flex align-items-center">
              <BsHeart className='icons' />
              <p  className="text-white m-1">Favourite <br />Products</p>
              </Link>
            </div>
            <div>
            <Link to="/cart" className="d-flex align-items-center">
              <BsCart4 className='icons'/>
              <p className="text-white m-1">Cart</p>
              </Link>
            </div>
          </div>
         </div>

        </div>

      </div>
    </header>
    <header className="header-bottom py-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="menu-bottom d-flex align-items-center gap-30">
                <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <CgMenuGridO className='menu-icon' />
  <span className="me-5 d-inline-block">Shop Categories</span>
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
          <div className="menu-links">
            <div className="d-flex align-items-center gap-30">
              <NavLink to="/" className={`${location.pathname=="/" ? "text-warning" : "menu-link"}`}>Home</NavLink>
              <NavLink to="/store" className={`${location.pathname=="/store" ? "text-warning": "menu-link"}`}>Our Store</NavLink>
              <NavLink to="/blogs" className={`${location.pathname=="/blogs" ? "text-warning": "menu-link"}`}>Blogs</NavLink>
              <NavLink to="/contact" className={`${location.pathname=="/contact" ? "text-warning": "menu-link"}`}>Contact</NavLink>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </header>
      </>
  )
}

export default Header