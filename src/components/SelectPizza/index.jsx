import React from 'react';
import styles from './SelectPizza.module.scss';

import { ReactComponent as CloseSvg } from '../../assets/img/vector/icon-close.svg';
import { ReactComponent as InfoSvg } from '../../assets/img/vector/icon-info.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';
import {
  openModal,
  openToolTip,
  switcherTopHeight,
  setSize,
  setType,
} from '../../redux/slices/selectSlice';
import Tooltip from './Tooltip';

const SelectPizza = () => {
  const typeNames = ['Original', 'Thin'];

  const dispatch = useDispatch();
  const { values, modal, toolTip, heightTop, activateHeightTop, size, type } = useSelector(
    (state) => state.select,
  );
  const newId = values[0]?.id + values[0]?.sizes[size];
  const cartItem = useSelector((state) => state.cart.items.find((obj) => obj?.id === newId));
  const addedCount = cartItem ? cartItem.count : '';

  // Adds pizzas data(id,title,etc.) to the "cart" slice(redux)
  const onClickAdd = (e) => {
    e.preventDefault();

    const item = {
      id: newId,
      title: values[0].title,
      price: values[0].price,
      imageUrl: values[0].imageUrl,
      type: typeNames[type],
      size: values[0].sizes[size],
      nutritionFacts: values[0].nutritionFacts,
    };

    dispatch(addItem(item));
  };

  // Closes the modal window and resets the height, the size
  // and the type parameters to the initial state
  const closeModalWindow = () => {
    dispatch(openModal(false));
    dispatch(switcherTopHeight(false));
    onChangeSize(0);
    onChangeType(0);
    document.querySelector('body').style.overflow = 'auto';
  };

  const toolTipSwitcher = () => {
    dispatch(openToolTip(!toolTip));
  };

  const onChangeSize = (value) => {
    dispatch(setSize(value));
  };

  const onChangeType = (value) => {
    dispatch(setType(value));
  };

  return (
    <div
      style={{ top: `${!activateHeightTop ? 0 : `${heightTop}px`}` }}
      className={`${styles.selectOverlay} ${modal ? styles.selectOverlayVisible : ''}`}>
      <div className={styles.select}>
        <CloseSvg
          onClick={closeModalWindow}
          className={`${styles.selectClose} ${modal ? styles.svgTransition : ''}`}
        />
        <div className={styles.selectPic}>
          <img src={values[0]?.imageUrl} alt="alt" className={styles.selectThumb} />
        </div>
        <div className={styles.selectDesc}>
          <div className={styles.selectTitleWrap}>
            <h2 className={styles.selectTitle}>{values[0]?.title}</h2>
            <InfoSvg
              onClick={toolTipSwitcher}
              className={`${styles.selectInfo} ${modal ? styles.svgTransition : ''}`}
            />
          </div>
          <Tooltip content={values} />
          <ul className={styles.selectCrust}>
            {typeNames.map((value, index) => (
              <li
                key={index}
                onClick={() => onChangeType(index)}
                className={`${styles.selectCrustItem} ${
                  type === index ? styles.selectCrustItemActive : ''
                } ${modal ? styles.transition : ''}`}>
                {value}
              </li>
            ))}
          </ul>
          <ul className={styles.selectSize}>
            {values[0]?.sizes.map((value, index) => (
              <li
                key={index}
                onClick={() => onChangeSize(index)}
                className={`${styles.selectCrustItem} ${
                  values[0]?.sizes.length > 2 && index === 1 && styles.removeRightBorder
                } ${size === index ? styles.selectCrustItemActive : ''} ${
                  modal ? styles.transition : ''
                }`}>
                {value + ' cm'}
              </li>
            ))}
          </ul>
          <div className={styles.selectTotal}>
            <div className={styles.selectTotalWrap}>
              <p className={styles.selectTotalPrice}>
                Total: £{addedCount > 0 ? values[0]?.price * addedCount : 0}
              </p>
              <p className={styles.selectTotalWeight}>400 g</p>
            </div>
            <a
              onClick={onClickAdd}
              href="#"
              className={`${styles.selectTotalAdd} ${modal ? styles.transition : ''}`}>
              Add
              {addedCount > 0 && <i>{addedCount}</i>}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPizza;
