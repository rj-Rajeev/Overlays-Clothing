import React from 'react'
import Header from '../../components/Header/Header'
import './Home.css'
import ProductCard from '../../components/ProductCard/ProductCard';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <> 
    <div className="home">
      <div className="homeheader">
      {<Header />}
      </div>
      <div className="bgi">
      </div>
      <div className="productshow">
      <div className="product"><ProductCard /></div>
        <div className="product"><ProductCard /></div>
        <div className="product"><ProductCard /></div>
        <div className="product"><ProductCard /></div>
        <div className="product"><ProductCard /></div>
        <div className="product"><ProductCard /></div>
        <div className="product"><ProductCard /></div>
        <div className="product"><ProductCard /></div>
        <div className="product"><ProductCard /></div>
        <div className="product"><ProductCard /></div>
      </div>
      <div className="banner2">
        <img src="src/assets/banner02-dekstop.webp" alt="" />
      </div>
      <div className="halfbanners">
        <img src="src/assets/card01.webp" alt="" />
        <img src="src/assets/card02.webp" alt="" />
      </div>
      <div className="banner3">
        <img src="src/assets/banner03-dekstop.webp" alt="" />
      </div>
      <div className="productshow">
      <div className="product"><ProductCard /></div>
        <div className="product"><ProductCard /></div>
        <div className="product"><ProductCard /></div>
        <div className="product"><ProductCard /></div>
        <div className="product"><ProductCard /></div>
        <div className="product"><ProductCard /></div>
        <div className="product"><ProductCard /></div>
        <div className="product"><ProductCard /></div>
        <div className="product"><ProductCard /></div>
        <div className="product"><ProductCard /></div>
      </div>
      <div className="banner4">
        <img src="src/assets/banner04-dekstop.webp" alt="" />
      </div>
      <div className="homefotter">
        <Footer />
      </div>
    </div>
    </>
  )
}

export default Home