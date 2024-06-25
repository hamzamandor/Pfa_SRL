import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./NavbarUser.css";
import logoImg from "../../../images/icons8-books-48.png"
import {HiOutlineMenuAlt3} from "react-icons/hi";

const NavbarUser = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className='navbar' id = "navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to = "/" className='navbar-brand flex'>
            <img src = {logoImg} alt = "site logo" />
            <span className='text-uppercase fw-7 fs-16 ls-1'>GOLDENBOOK</span>

          </Link>
          
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#8B4513"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <Link to="/bookUser" className='nav-link text-uppercase text-white fs-22 fw-bold ls-1'>Home</Link>

            </li>
            <li className='nav-item'>
              <Link to = "aboutUser" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>about</Link>
          
            </li>

            <li className='nav-item'>
              <Link to = "savebook" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>SaveBook</Link>
              </li>

            <li className='nav-item'>
              <Link to = "/" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Disconnect</Link>
              </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavbarUser