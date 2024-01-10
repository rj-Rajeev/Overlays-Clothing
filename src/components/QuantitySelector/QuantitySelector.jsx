import React, { useState } from 'react'
import '../AddToCartPopup/AddToCartPopup.css'


const QuantitySelector = () => {
    const [productQuantity, setProductQuantity] = useState(1);

    const minusQuantity =()=>{
        setProductQuantity((prev)=>prev-1);
    }
    const plusQuantity =()=>{
        setProductQuantity((prev)=>prev+1);
    }

  return (
    <div className="counterBox">
                <h3 onClick={productQuantity === 1? null :minusQuantity} className={productQuantity === 1 ? 'disabled' : ''}>-</h3>
                <h3>{productQuantity}</h3>
                <h3 onClick={plusQuantity}>+</h3>
            </div>
  )
}

export default QuantitySelector