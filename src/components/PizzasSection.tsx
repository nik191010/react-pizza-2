import React from 'react';
import PizzaBlock from './PizzaBlock';
import Search from './Search';
import FilterIcon from './FilterIcon';
import Skeleton from './PizzaBlock/Skeleton';
import Pagination from './Pagination';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';

type PizzasSection = {
  onClickFilters: (e: React.SyntheticEvent) => void;
  items: any;
};

const PizzasSection: React.FC<PizzasSection> = ({ items, onClickFilters }) => {
  // Status pending,fulfilled,rejected
  const status = useSelector((state: RootState) => state.pizza.status);

  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
  const pizzas = items.map((obj: any, index: number) => <PizzaBlock key={index} {...obj} />);
  // console.log(pizzas);
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
