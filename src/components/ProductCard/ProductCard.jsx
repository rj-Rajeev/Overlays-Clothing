import React, { useState } from 'react'
import './ProductCard.css'

const ProductCard = ({product}) => {
  const { name, image1, image2 } = product;
  const [productLink, setProductLink] = useState(image1);
  if (!product) {
    return <div>Error: Product data is missing</div>;
  }
  const hover = ()=>{
    setProductLink(image2);
  }
  const mouseLeave= ()=>{
    setProductLink(image1);
  }
  console.log(productLink);
  return (
    <div className="productCard">
        <div className="productImg">
            <img onMouseEnter={hover} onMouseLeave={mouseLeave} src={productLink} alt={name} />
        </div>
        <h2>{name}</h2>
        <button>Shop Now</button>
    </div>
  )
}

export default ProductCard
