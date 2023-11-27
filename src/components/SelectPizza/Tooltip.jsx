import React from 'react';
import styles from './SelectPizza.module.scss';
import { useSelector } from 'react-redux';

const Tooltip = ({ content }) => {
  const { values, toolTip, size } = useSelector((state) => state.select);

  return (
    <div className={styles.toolTipTrigger}>
      <div className={`${styles.toolTip} ${toolTip ? `${styles.toolTipActive}` : ''}`}>
        <div className={styles.toolTipHead}>Nutrition facts (per 100 g)</div>
        <div className={styles.toolTipDesc}>
          <p className={styles.toolTipText}>Calories</p>
          <p className={styles.toolTipText}>{content[0]?.nutritionFacts?.calories} cal</p>
        </div>
        <div className={styles.toolTipDesc}>
          <p className={styles.toolTipText}>Protein</p>
          <p className={styles.toolTipText}>{content[0]?.nutritionFacts?.protein} g</p>
        </div>
        <div className={styles.toolTipDesc}>
          <p className={styles.toolTipText}>Fat</p>
          <p className={styles.toolTipText}>{content[0]?.nutritionFacts?.fat} g</p>
        </div>
        <div className={styles.toolTipDesc}>
          <p className={styles.toolTipText}>Carbohydrates</p>
          <p className={styles.toolTipText}>{content[0]?.nutritionFacts?.carbohydrates} g</p>
        </div>
        <div className={styles.toolTipDesc}>
          <p className={styles.toolTipText}>Pizza size</p>
          <p className={styles.toolTipText}>{values[0]?.sizes[size]} cm</p>
        </div>
        <div className={styles.toolTipDesc}>
          <p className={styles.toolTipText}>Contains:</p>
          <p className={styles.toolTipText}>{content[0]?.nutritionFacts?.contains}</p>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
