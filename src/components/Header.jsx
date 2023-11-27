import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from '../assets/img/vector/icon-logo.svg';
import cart from '../assets/img/vector/icon-cart.svg';
import { selectCart } from '../redux/slices/cartSlice';

const Header = ({ onClickCart }) => {
  const { items, totalPrice } = useSelector(selectCart);
  const location = useLocation();
  const isMounted = React.useRef(false);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  // First we need to prevent saving during the first render
  // that's why the hook useRef(isMounted===false) is used
  // but after the first render isMounted changes its value to true
  // and when "items" is changed all data is saved to the localStorage
  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap">
          <Link to="/" className="header__logo">
            <img className="header__logo-pic" src={logo} alt="Best Pizza" />
            <p className="header__logo-text">Best Pizza</p>
          </Link>
          {location.pathname !== '/cart' && (
            <a href="#" onClick={onClickCart} className="header__cart">
              <div className="header__cart-left">
                <p className="header__cart-price">{totalPrice} £</p>
              </div>
              <div className="header__cart-delimeter"></div>
              <div className="header__cart-right">
                <img src={cart} className="header__cart-img" />
                <p className="header__cart-quantity">{totalCount}</p>
              </div>
            </a>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
