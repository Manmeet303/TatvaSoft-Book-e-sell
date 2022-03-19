import React from 'react'
import '../Css/Header.css';
import { Button , Link } from "@mui/material"
import cart from '../../src/Views/images/cart.svg';
import sitelogo from '../../src/Views/images/site-logo.svg';
function Header() {
  return (
    <>
        <div className='header'>
            <div className='header-container'>
                <div className='logo'>
                <Link to="/"> 
                <img src={sitelogo} alt="siteLogo"></img>
                </Link>
               
                </div>
                <div className='navigation'>
                   <Button className="login-btn">Login</Button>
                   <div className='vertical-slash'></div>
                   <Button className="register-btn">Register</Button>
                   <Button className="cart-btn">
                   <img src={cart} alt="cart"></img>
                   </Button>
                </div>
            </div>

        </div>
    </>
  )
}

export default Header;