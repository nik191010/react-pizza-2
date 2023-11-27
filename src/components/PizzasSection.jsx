import React from 'react';
import PizzaBlock from './PizzaBlock';
import Search from './Search';
import FilterIcon from './FilterIcon';
import Skeleton from './PizzaBlock/Skeleton';
import Pagination from './Pagination';
import { useSelector } from 'react-redux';

const PizzasSection = ({ items, onClickFilters }) => {
  // Status pending,fulfilled,rejected
  const status = useSelector((state) => state.pizza.status);

  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
  const pizzas = items.map((obj, index) => <PizzaBlock key={index} {...obj} />);

  return (
    <section className="pizzas">
      <div className="container">
        <div className="pizzas__header">
          <h2 className="pizzas__title">Pizzas</h2>
          <div className="pizzas__search">
            <Search />
            <FilterIcon onClickFilters={onClickFilters} />
          </div>
        </div>
        <div className="pizzas__wrap">
          {status === 'error' ? (
            <div className="pizzas__error">
              <b className="pizzas__error-title">An error occurred 😕</b>
              <p className="pizzas__error-text">It's not possible to receive pizzas</p>
            </div>
          ) : (
            <>
              {status === 'loading' ? skeletons : pizzas}
              <Pagination />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default PizzasSection;
