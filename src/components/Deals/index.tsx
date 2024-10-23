import React from 'react';
import styles from './Deals.module.scss';

import deals1 from '../../assets/img/deals-1.png';
import deals2 from '../../assets/img/deals-2.png';
import deals3 from '../../assets/img/deals-3.png';
import deals4 from '../../assets/img/deals-4.png';

const Deals: React.FC = () => {
  return (
    <section className={styles.deals}>
      <div className="container">
        <div className={styles.dealsWrap}>
          <a href="#" className={styles.dealsItemWrap}>
            <div
              className={styles.dealsItem}
              style={{
                backgroundImage: `url(${deals1})`,
              }}>
              <p className={styles.dealsItemDesc}>
                One small pizza,
                <br /> one side and a small drink
              </p>
            </div>
          </a>
          <a href="#" className={styles.dealsItemWrap}>
            <div
              className={styles.dealsItem}
              style={{
                backgroundImage: `url(${deals2})`,
              }}>
              <p className={styles.dealsItemDesc}>
                One large pizza,
                <br /> side and large drink
              </p>
            </div>
          </a>
          <a href="#" className={styles.dealsItemWrap}>
            <div
              className={styles.dealsItem}
              style={{
                backgroundImage: `url(${deals3})`,
              }}>
              <p className={styles.dealsItemDesc}>
                Two medium pizzas and
                <br /> two sides
              </p>
            </div>
          </a>
          <a href="#" className={styles.dealsItemWrap}>
            <div
              className={styles.dealsItem}
              style={{
                backgroundImage: `url(${deals4})`,
              }}>
              <p className={styles.dealsItemDesc}>
                Two large pizzas
                <br /> and two sides
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Deals;
