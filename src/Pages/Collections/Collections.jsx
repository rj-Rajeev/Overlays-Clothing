import React, { useEffect, useState } from 'react'
import './Collections.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';
import ProductCard from '../../components/ProductCard/ProductCard'
import DeliveryInfoCard from '../../components/DeliveryInfoCard/DeliveryInfoCard'
import PriceRangeSelector from '../../components/PriceRangeSelector/PriceRangeSelector'
import all_products from '../../assets/Overlays Products/all_product';


const Collections = ({headLine, category}) => {
  const [scrolled, setScrolled] = useState(true);
  const [prev, setPrev] = useState(true);

    const handleScroll = () => {
      if (window.scrollY > 100 && window.scrollY < 2200) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
    };
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [handleScroll]);

    const handlePrev = () => {
      if (window.scrollY > 2170) {
        setPrev(false);
      } else {
        setPrev(true);
      }
    };
    useEffect(() => {
      window.addEventListener('scroll', handlePrev);
      
      return () => {
        window.removeEventListener('scroll', handlePrev);
      };
    }, [handleScroll]);

    const [filterProducts,setFilterProducts] = useState([]);

    useEffect(()=>{
      if(category=="all"){
        setFilterProducts(all_products);
      } else if(category=='men'){
        const mensProducts = all_products.filter((product)=>product.category==='men');
        setFilterProducts(mensProducts);
      } else {
        const womensProducts = all_products.filter((product)=>product.category==='women');
        setFilterProducts(womensProducts);

      }
    },[category])
  
  return (
    <>
    <div className="collections">
      <h1>{headLine}</h1>
    </div>
    <div className="productSection">
      <div className={`filters ${scrolled?"":"filter-fixed"}  ${prev?"":"filter-fixed2"}`}>
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
        {filterProducts.map((product) => (              
              <ProductCard key={product.id} product={product} />
         ))}
        </div>

      </div>
    </div>
    <hr />
    <DeliveryInfoCard/>
    <hr />
    </>
    )
}

export default Collections

