import React from 'react'
import './OfferPopup.css'
import { RxCross2 } from "react-icons/rx";


export const OfferPopup = ({popupActive, setPopupActive}) => {
  return (
    <div className={`offer-card ${popupActive ? "popupAppear" : ""}`}>
        <div className="cross" onClick={()=>setPopupActive(false)}><RxCross2 /></div>
        <h1>10% off FOR YOU !</h1>
        <h4>Sign up & receive a discount coupon on your first order in your email.</h4>

        <input type="text" />
        <button className='subscribe'>SUBSCRIBE</button>
    </div>
  )
}
