import React from 'react';
import styles from './Order.module.scss';

import { useDispatch, useSelector } from 'react-redux';
// import { ReactComponent as CloseSvg } from '../../assets/img/vector/icon-close.svg';

// import CloseSvg from '../../assets/img/vector/icon-close.svg';
import { Link } from 'react-router-dom';
import OrderItem from './OrderItem';
import OrderEmpty from './OrderEmpty';
import type { RootState } from '../../redux/store';
import { CloseSvg } from '../IconComponent';

type OrderProps = {
  onClose: (e: React.SyntheticEvent) => void;
  opened: boolean;
};

const Order: React.FC<OrderProps> = ({ onClose, opened }) => {
  const cartRef = React.useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const { heightTop, activateHeightTop } = useSelector((state: RootState) => state.select);

  const { totalPrice, items } = useSelector((state: RootState) => state.cart);

  // React.useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (!event.composedPath().includes(cartRef.current)) {
  //       onClose();
  //     }
  //   };

  //   document.body.addEventListener('click', handleClickOutside);
  //   return () => document.body.removeEventListener('click', handleClickOutside);
  // }, []);

  return (
    <div
      style={{ top: `${!activateHeightTop ? 0 : `${heightTop}px`}` }}
      className={`${styles.orderOverlay} ${opened ? styles.orderOverlayVisible : ''}`}>
      <div ref={cartRef} className={styles.orderDrawer}>
        <div className={styles.orderDrawerHeader}>
          <h2 className={styles.orderDrawerTitle}>Your order</h2>
          <div className={styles.orderDrawerCloseWrap} onClick={onClose}>
            <CloseSvg className={styles.orderDrawerClose} />
          </div>
        </div>
        <div className={`${styles.orderDrawerMain} ${styles.order}`}>
          {items.length === 0 ? (
            <OrderEmpty />
          ) : (
            items.map((item: any) => <OrderItem key={item.id} {...item} />)
          )}
        </div>
        <div className={styles.orderDrawerBottom}>
          <p className={styles.orderDrawerTotal}>Total: £{totalPrice}</p>
          <Link onClick={onClose} to="/cart" className={styles.orderDrawerButton}>
            Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Order;
