import React from 'react';
import { useCart } from '../../contexts/cartContext';
import './Cart.css';
import QuantitySelector from '../QuantitySelector/QuantitySelector';

const CartItem = ({ item, removeFromCart }) => {
  const { id, image1, name, new_price, old_price } = item;
  
  return (
    <div className="cart-itemBox" key={id}>
      <img src={image1} alt={name} />
      <div className="productDets">
        <h5>{name}</h5>
        <h6>Size</h6>
        <div className="item-quantity">
          <QuantitySelector />
          <h6 onClick={() => removeFromCart(id)}>Remove</h6>
        </div>
      </div>
      <div className="item-price">
        <h6 className='newPrice'>₹ {old_price}</h6>
        <h6 className='oldPrice'>₹ {new_price}</h6>
      </div>
    </div>
  );
};

export default CartItem;
