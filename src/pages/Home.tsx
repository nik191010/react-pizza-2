import React from 'react';
import { useSelector } from 'react-redux';

import AboutSection from '../components/AboutSection';
import Deals from '../components/Deals';
import PizzasSection from '../components/PizzasSection';
import { fetchPizzas } from '../redux/slices/pizzaSlice';
import { useAppDispatch } from '../redux/store';
import type { RootState } from '../redux/store';

type HomeProps = {
  filtersVisible: (e: React.SyntheticEvent) => void;
  filterApply: number;
};

const Home: React.FC<HomeProps> = ({ filterApply, filtersVisible }) => {
  const dispatch = useAppDispatch();

  const { categoryId, sort, currentPage, searchValue } = useSelector(
    (state: RootState) => state.filter,
  );
  const items = useSelector((state: RootState) => state.pizza.items);

  // sortBy removes "-" in order to pass the value correctly to the url
  // order checks if there's "-" or not, if yes, then adds "asc" to the link, if no, then desc
  // 0 is the number for all pizzas, if it's not 0, then ше sets a particular category e.g. "Vegetarian"
  // searchValue checks if there's something in the search bar, if yes, it passes the data to the url
  // fetchPizzas get all the values and makes a request to the server
  const getPizzas = async () => {
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(fetchPizzas({ currentPage: String(currentPage), sortBy, order, category, search }));
  };

  // getPizzas is executed only if a user changes categories, the way of sorting(asc,desc)
  // or the number of page

  React.useEffect(() => {
    getPizzas();
  }, [filterApply, searchValue, currentPage]);

  return (
    <>
      <Deals />
      <PizzasSection items={items} onClickFilters={filtersVisible} />
      <AboutSection />
    </>
  );
};

export default Home;
