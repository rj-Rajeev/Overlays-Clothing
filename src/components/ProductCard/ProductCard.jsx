import React from 'react'
import './ProductCard.css'

const ProductCard = ({productName = ""}) => {
  return (
    <div className="productCard">
        <div className="productImg">
            <img src="src/assets/emperor.jpg" alt="" />
        </div>
        <h2>Solid Black dark</h2>
        <button>Shop Now</button>
    </div>
  )
}

export default ProductCard