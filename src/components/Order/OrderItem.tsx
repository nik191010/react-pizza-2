import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, minusItem, removeItem } from '../../redux/slices/cartSlice';
import clsx from 'clsx';
import styles from './Order.module.scss';
import { RxCross1 } from 'react-icons/rx';

type OrderItemProps = {
  id: string;
  title: string;
  type: string;
  price: number;
  count: number;
  imageUrl: string;
  size: number;
};

const OrderItem: React.FC<OrderItemProps> = ({ id, title, type, price, count, imageUrl, size }) => {
  const dispatch = useDispatch();

  // Adds particular pizzas(id) to the cart
  const onClickPlus = () => {
    dispatch(addItem({ id }));
  };

  // Removes particular pizzas(id) from the cart
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  // Asks the user before he/she deletes a pizza from the cart
  // and deletes it if the user confirms
  const onClickRemove = () => {
    if (window.confirm('Are you sure you want to remove item?')) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className={styles.orderItem}>
      <div className={styles.orderThumb}>
        <img src={imageUrl} alt={title} className={styles.orderPic} />
      </div>
      <RxCross1 onClick={onClickRemove} className={styles.orderClose} />
      <div className={styles.orderDesc}>
        <h3 className={styles.orderTitle}>{title}</h3>
        <p className={styles.orderText}>
          {type} crust, {size} cm
        </p>
        <div className={styles.orderTotal}>
          <div className={styles.orderCount}>
            <button
              disabled={count === 1}
              onClick={onClickMinus}
              className={clsx(styles.orderMinus, count === 1 && styles.orderMinusDisabled)}>
              -
            </button>
            <span className={styles.orderAmount}>{count}</span>
            <button onClick={onClickPlus} className={styles.orderPlus}>
              +
            </button>
          </div>
          <div className={styles.orderPrice}>£{count * price}</div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
