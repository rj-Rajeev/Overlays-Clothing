import "./Cart.css";
import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { useCart } from "../../contexts/cartContext";
import CartItem from "./CartItem";

const Cart = ({ setPopupActive, popupActive }) => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <>
      <div className={`cart-popupBox ${popupActive ? "popupAppear" : ""}`}>
        <div className="cart-header">
          <div className="cart-logo">
            <FiShoppingBag />
            <h4>{cartItems.length} items</h4>
          </div>
          <div className="cross" onClick={() => setPopupActive(false)}>
            <RxCross2 />
          </div>
        </div>
        <div className="cart-item-field">
        {cartItems.length === 0 ? (
          <div className="empty-cart-popup">
            Your cart is empty.
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
            />
          ))
        )}
        </div>

        <div className="cart-footer">
          <div className="firstLine">
              <button>Add order note</button>
              <span>Shipping & taxes calculated at checkout</span>
          </div>
          <div className="gift">
            <input type="checkbox" name="gift" id="" />
            <label htmlFor="gift">Gift Wrapper</label> <span>₹ 25.00</span>
          </div>
          <button className="proceed">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
