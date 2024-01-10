import './AddToCartPopup.css'
import { HiOutlineX } from "react-icons/hi";
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/cartContext';
import QuantitySelector from '../QuantitySelector/QuantitySelector';

const AddToCartPopup = ({product,setPopupActive, popupActive}) => {
    const {addToCart} = useCart();
    
    const handlePopup =()=>{
        setPopupActive(false)
    }

    

    const handleAddToCart = ()=>{
        addToCart(product);
        setPopupActive(false);   
    }
  return (
    <div className={`popupBox ${popupActive ? 'popupAppear' : ''}`}>
        <div className="head">
            <h4>Choose Options</h4>
            <div className="cut" onClick={handlePopup}><HiOutlineX /></div>
        </div>
        <div className="productDetails">
            <img src={product.image1} alt={product.name} />
            <div className="namePrice">
                <h5>OverLays Clothing</h5>
                <h6>{product.name}</h6>
                <h6><span className='newPrice'>₹ {product.new_price}</span> ---- <span className='oldPrice'>₹ {product.old_price}</span></h6>
                
            </div>
        </div>
        <div className="sizeSelector">
            <div className="label">
                <h6>Size:</h6>
                <h6>Size chart</h6>
            </div>
            <div className="sizeBox">
                <span>XS</span>
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
                <span>XXL</span>
            </div>
        </div>
        <div className="label2"><h6>Quantity:</h6></div>
        <QuantitySelector />
        <button onClick={handleAddToCart}><h5>ADD TO CART</h5></button>
        <Link to={`/product/${product.id}`} >Product details</Link>

    </div>
  )
}

export default AddToCartPopup