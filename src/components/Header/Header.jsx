import React, { useState, useEffect } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = ({scrolled}) => {
  return (
    <>
    <div className={`header ${scrolled?"" : "white"}`}>
    <div className="offer">
        <h4>Shipping within 48 Hours</h4>
    </div>
       <div className="head">
       <div className="search">
            <img src="src/assets/searchIcon.png" alt="" />
            <input type="search" placeholder='What are you looking for?' />
        </div>
        <div className="logo">
            <img src={scrolled? "src/assets/Logo2.webp" : "src/assets/Logo1.webp"} alt="" />
        </div>
        <div className="headLinks">
            <Link to={'Massage'}><img src="src/assets/massageIcon.png" alt="" /></Link>
            <Link to={'Profile'}><img src="src/assets/accountIcon.png" alt="" /></Link>
            <Link to={'Cart'}><img src="src/assets/cartIcon.png" alt="" /></Link>
            <div className="counter">0</div>
        </div>
       </div>
        <div className="NavLinks">
            <hr />
            <Link to={'/'}>Home</Link>
            <Link to={'all-products'}>ShopAll</Link>
            <Link to={'Mens'}>Men</Link>
            <Link to={'Womens'}>Women</Link>
            <Link to={'contact-us'}>Get In Touch!</Link>
        </div>
    </div>
    </>
    )
}

export default Header