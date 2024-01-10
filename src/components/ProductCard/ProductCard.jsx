import React, { useState, useEffect } from 'react'
import './ProductCard.css'
import AddToCartPopup from '../AddToCartPopup/AddToCartPopup';

const ProductCard = ({product, ukey}) => {
  const { name, image1, image2 } = product;
  const [productLink, setProductLink] = useState(image1);
  const[popupActive, setPopupActive] = useState(false);
  if (!product) {
    return <div>Error: Product data is missing</div>;
  }
  const hover = ()=>{
    setProductLink(image2);
  }
  const mouseLeave= ()=>{
    setProductLink(image1);
  }

  const popupHandle = ()=>{
    setPopupActive((prev)=>!prev);
  }
  return (
    <div className="productCard" key={ukey}>
        <div className="productImg">
            <img onMouseEnter={hover} onMouseLeave={mouseLeave} src={productLink} alt={name} />
        </div>
        <h2>{name}</h2>
        <button onClick={popupHandle} >Shop Now</button>
        {<AddToCartPopup product={product} popupActive={popupActive} setPopupActive={setPopupActive} />}
    </div>
  )
}

export default ProductCard
