import React, { useState } from 'react';
import './PriceRangeSelector.css'
import { IoMdArrowDropdown } from "react-icons/io";

const PriceRangeSelector = () => {
  const [showSelector, setShowSelector] = useState(false);
  const [minPriceRange, setMinPriceRange] = useState(0);
  const [maxPriceRange, setMaxPriceRange] = useState(5000);


  const handleShowSelector = () => {
    setShowSelector(!showSelector);
  };


  return (
    <>
      <span>Price</span>
      <span style={{marginLeft: '150px',cursor: 'pointer',}} onClick={handleShowSelector}>
        {<IoMdArrowDropdown size={25} style={{ transform: showSelector ? 'rotate(180deg)' : 'rotate(0deg)' }} />}
      </span>

      {showSelector && (
        <>
        <div className="rangeBar">
        <input type="range" name="minRange" id="minRange" step={100} min={0} max={5000} value={minPriceRange} onChange={(e)=>{setMinPriceRange(e.target.value)}} />
        <input type="range" name="maxRange" id="maxRange" step={100} min={0} max={5000} value={maxPriceRange} onChange={(e)=>{setMaxPriceRange(e.target.value)}} />
      </div>
      <div className="rangeValues">
        <input type="number" name="minPrice" id="minPrice" value={minPriceRange} onChange={(e)=>{setMinPriceRange(e.target.value)}} />
        <input type="number" name="maxPrice" id="maxPrice" value={maxPriceRange} onChange={(e)=>{setMaxPriceRange(e.target.value)}} />
      </div>
        </>
      )}
    </>
  );
};

export default PriceRangeSelector;
