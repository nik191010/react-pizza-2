import React from 'react';

const CartEmpty = () => {
  return (
    <div className="cart-empty">
      <b className="cart-empty__title">Your cart is empty 😕</b>
      <p className="cart-empty__text">Please make an order</p>
    </div>
  );
};

export default CartEmpty;
