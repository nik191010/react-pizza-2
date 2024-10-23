import React from 'react';
import styles from './PizzaBlock.module.scss';

import { useDispatch } from 'react-redux';
import {
  addProduct,
  openModal,
  clearProducts,
  getTopHeight,
  switcherTopHeight,
} from '../../redux/slices/selectSlice';

type PizzaBlockProps = {
  id: string;
  imageUrl: string;
  title: string;
  desc: string;
  price: number;
  sizes: number[];
  nutritionFacts: string;
};

type ItemProps = {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  sizes: number[];
  nutritionFacts: string;
};

const PizzaBlock: React.FC<PizzaBlockProps> = ({
  id,
  imageUrl,
  title,
  desc,
  price,
  sizes,
  nutritionFacts,
}) => {
  const dispatch = useDispatch();
  // All pizzas have its own data(id,title etc), when a user clicks on the select button
  // clears the array for the next pizzas that the user will select
  // adds all the data(item)
  // calculates height from the top for the popup-window
  // opens the modal window
  const onClickAdd = () => {
    const item: ItemProps = { id, imageUrl, title, price, sizes, nutritionFacts };
    const body = document.querySelector('body');
    // Checking for TS
    if (body) {
      body.style.overflow = 'hidden';
    }
    dispatch(clearProducts());
    dispatch(addProduct(item));
    dispatch(switcherTopHeight(true));
    openModalWindow();
  };

  const openModalWindow = () => {
    dispatch(openModal(true));
  };

  // Calculates the height from the top of the page
  const logit = () => {
    dispatch(getTopHeight(window.pageYOffset));
  };

  React.useEffect(() => {
    const watchScroll = () => {
      window.addEventListener('scroll', logit);
    };

    watchScroll();

    return () => {
      window.removeEventListener('scroll', logit);
    };
  }, []);

  return (
    <div className={styles.pizza}>
      <div className={styles.pizzaPic}>
        <img src={imageUrl} alt={title} className={styles.pizzaThumb} />
      </div>
      <h2 className={styles.pizzaTitle}>{title}</h2>
      <p className={styles.pizzaText}>{desc.slice(0, 50) + '...'}</p>
      <div className={styles.pizzaSelect}>
        <button onClick={onClickAdd} className={styles.pizzaButton}>
          Select
        </button>
        <p className={styles.pizzaPrice}>from £{price}.00</p>
      </div>
    </div>
  );
};

export default PizzaBlock;
