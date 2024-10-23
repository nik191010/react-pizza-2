import React from 'react';
import '../scss/app.scss';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillCartXFill } from 'react-icons/bs';
import CartItem from '../components/CartItem';
import { clearItems, selectCart } from '../redux/slices/cartSlice';
import CartEmpty from '../components/CartEmpty';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector(selectCart);

  // Clears the cart
  const onClickClear = () => {
    if (window.confirm('Are you sure you want to clear the cart?')) {
      dispatch(clearItems());
    }
  };

  return (
    <div className="container-cart">
      <div className="cart">
        <div className="cart__wrap-title">
          <h2 className="cart__title">Your order</h2>
          {items.length !== 0 && (
            <a onClick={onClickClear} href="#" className="cart__link">
              {<BsFillCartXFill className="cart__icon" />} <span>Clear cart</span>
            </a>
          )}
        </div>
        <div className="cart__wrap">
          {items.length === 0 ? (
            <CartEmpty />
          ) : (
            items.map((item: any) => <CartItem key={item.id} {...item} />)
          )}
        </div>
        {items.length !== 0 && (
          <div className="cart__total">
            <p className="cart__total-price">Total: £{totalPrice}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
