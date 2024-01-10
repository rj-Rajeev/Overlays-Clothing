import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};



export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item,quantity) => {
    const itemIndex = cartItems.findIndex((product)=> product.id === item.id);
    if (itemIndex !==-1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].quantity = quantity;
      setCartItems(updatedCartItems);
    }
    else{
      const itemWithQuantity = { ...item, quantity: quantity };
    setCartItems((prev) => [...prev, itemWithQuantity]);
    }
  };
 
  const removeFromCart = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};