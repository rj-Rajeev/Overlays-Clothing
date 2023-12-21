import Header from '../../components/Header/Header'
import './Home.css'
import ProductCard from '../../components/ProductCard/ProductCard';
import Footer from '../../components/Footer/Footer';
import { useState, useEffect } from 'react';
import all_product from "../../assets/Overlays Products/all_product";

const Home = () => {

  const [scrolled, setScrolled] = useState(true);

    const handleScroll = () => {
      if (window.scrollY > 30) {
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
    // console.log(all_product);

  return (
    <> 
    <div className="home">
      <div className="homeheader">
      <Header scrolled = {scrolled} />
      </div>
      <div className="bgi">
      </div>
      <div className="productshow">
      <div className="product"><ProductCard />
      
      </div>
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
        <div className="product"><ProductCard />
        
        </div>
      </div>
      <div className="banner4">
        <img src="src/assets/banner04-dekstop.webp" alt="" />
      </div>
      <div className="homefotter">
        {<Footer />}
      </div>
    </div>
    </>
  )
}

export default Home