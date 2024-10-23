import React from 'react';
import styles from './Order.module.scss';

const OrderEmpty: React.FC = () => {
  return (
    <div className={styles.orderEmpty}>
      <b className={styles.orderEmptyTitle}>Your cart is empty 😕</b>
      <p className={styles.orderEmptyText}>Please make an order</p>
    </div>
  );
};

export default OrderEmpty;
