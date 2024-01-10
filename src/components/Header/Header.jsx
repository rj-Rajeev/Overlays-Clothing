import React, { useState, useEffect } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart';
import { OfferPopup } from '../OfferPopup/OfferPopup';
import { useCart } from '../../contexts/cartContext';

const Header = ({scrolled}) => {
  const[popupActive, setPopupActive] = useState(false);
  const[subPopupActive, setSubPopupActive] = useState(false);
  const {cartItems} = useCart();
  
    /* const [scrolled, setScrolled] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setScrolled(false);
    } else {
      setScrolled(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]); */
  
  const popupHandle = ()=>{
    setPopupActive((prev)=>!prev);
  }
  
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
            <Link><img src="src/assets/massageIcon.png" alt="" onClick={()=>setSubPopupActive(true)} /></Link>
            <Link to={'/Profile'}><img src="src/assets/accountIcon.png" alt="" /></Link>
            <img src="src/assets/cartIcon.png" alt="" onClick={popupHandle} />
            <div className="counter">{cartItems.length}</div>
        </div>
       </div>
        <div className="NavLinks">
            <hr />
            <Link to={'/'}>Home</Link>
            <Link to={'/all-products'}>ShopAll</Link>
            <Link to={'/Mens'}>Men</Link>
            <Link to={'/Womens'}>Women</Link>
            <Link to={'/contact-us'}>Get In Touch!</Link>
        </div>
    </div>
    {<Cart popupActive={popupActive} setPopupActive={setPopupActive} />}
    {<OfferPopup popupActive={subPopupActive} setPopupActive={setSubPopupActive} />}
    </>
    )
}

export default Header