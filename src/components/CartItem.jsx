import React from 'react';

import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, minusItem, removeItem } from '../redux/slices/cartSlice';
import clsx from 'clsx';

const CartItem = ({ id, title, type, price, count, imageUrl, size }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItem({ id }));
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    if (window.confirm('Are you sure you want to remove item?')) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className="cart__item item-cart">
      <a href="#" onClick={onClickRemove} className="item-cart__close">
        {<AiOutlineClose className="item-cart__close-icon" />}
      </a>
      <div className="item-cart__left">
        <div className="item-cart__pic">
          <img src={imageUrl} alt="alt" className="item-cart__thumb" />
        </div>
        <div className="item-cart__desc">
          <h3 className="item-cart__title">{title}</h3>
          <p className="item-cart__text">
            {type} crust, {size} cm
          </p>
        </div>
      </div>
      <div className="item-cart__right">
        <div className="item-cart__total">
          <div className="item-cart__count">
            <button
              disabled={count === 1}
              onClick={onClickMinus}
              className={clsx('item-cart__minus', { 'item-cart__minus_disabled': count === 1 })}>
              -
            </button>
            <span className="item-cart__amount">{count}</span>
            <button onClick={onClickPlus} className="item-cart__plus">
              +
            </button>
          </div>
          <div className="item-cart__price">£{count * price}</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
