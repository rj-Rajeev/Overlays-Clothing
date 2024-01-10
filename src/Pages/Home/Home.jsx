import Header from "../../components/Header/Header";
import "./Home.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import Footer from "../../components/Footer/Footer";
import { useState, useEffect } from "react";
import all_products from "../../assets/Overlays Products/all_product";

const Home = () => {
  // console.log(all_product);
  
  const womenProducts = all_products.filter(
    (product) => product.category === "women"
  );
  const menProducts = all_products.filter(
    (product) => product.category === "men"
  );

  return (
    <>
      <div className="home">
        <div className="bgi"></div>
        <div className="productshow" >
          {menProducts.map((product) => (
            <div className="product" key={product.id}>
              <ProductCard ukey={product.id} product={product} />
            </div>
          ))}
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
          {womenProducts.map((product) => (
            <div className="product" key={product.id}>
              <ProductCard ukey={product.id} product={product} />
            </div>
          ))}
        </div>
        <div className="banner4">
          <img src="src/assets/banner04-dekstop.webp" alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
