import React from 'react'
import './Collections.css'
import Header from '../../components/Header/Header'
import ProductCard from '../../components/ProductCard/ProductCard'

const Collections = (props) => {
  return (
    <>
    <div className="pageHeader">
      <nav>
        <li>Home/</li>
      </nav>
      <h1>{props.headLine}</h1>
    </div>
    <div className="main">
      <div className="left"></div>
      <div className="right">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
    </>
    )
}

export default Collections