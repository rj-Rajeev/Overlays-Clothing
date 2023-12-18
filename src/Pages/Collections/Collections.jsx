import React, { useEffect } from 'react'
import './Collections.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';
import ProductCard from '../../components/ProductCard/ProductCard'
import DeliveryInfoCard from '../../components/DeliveryInfoCard/DeliveryInfoCard'
import PriceRangeSelector from '../../components/PriceRangeSelector/PriceRangeSelector'


const Collections = () => {

  useEffect(() => {
    window.addEventListener('scroll',(e)=>{
      console.log(e);
    })
  }, [])
  
  return (
    <>
    <div className="collections">
      <Header/>
      <h1>All Products</h1>
    </div>
    <div className="productSection">
      <div className="filters">
        <h1>filters</h1>
        <div className="priceFilter">
          <PriceRangeSelector />
        </div>
        <hr />
        <div className="productFilter">
          <h5>Product Type</h5>
        </div>
        <div className="sizeFilter">
          <h5>Size</h5>
        </div>
      </div>
      <div className="productsField">
        <div className="productsInfoStrip">
          <h5>95 Products</h5>
          <h5>Sort by Featured</h5>
        </div>
        <div className="productsCards">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>

      </div>
    </div>
    <hr />
    <DeliveryInfoCard/>
    <hr />
    <div className="homefotter">
        {<Footer />}
      </div>
    </>
    )
}

export default Collections