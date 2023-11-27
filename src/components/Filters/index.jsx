import React from 'react';
import styles from './Filters.module.scss';

import { ReactComponent as CloseSvg } from '../../assets/img/vector/icon-close.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setSort } from '../../redux/slices/filterSlice';

// Parameters which let users choosing types of the pizzas
// and sort them
export const categoriesGeneral = ['All', 'Meat', 'Vegeterian', 'Grill', 'Spicy'];
export const categoriesSort = [
  { name: 'Popular(DESC)', sortProperty: 'rating' },
  { name: 'Popular(ASC)', sortProperty: '-rating' },
  { name: 'Price(DESC)', sortProperty: 'price' },
  { name: 'Price(ASC)', sortProperty: '-price' },
  { name: 'Alphabetically(DESC)', sortProperty: 'title' },
  { name: 'Alphabetically(ASC)', sortProperty: '-title' },
];

const Filters = ({ setFilterApply, filterApply, onClose, opened }) => {
  const { categoryId, sort } = useSelector((state) => state.filter);
  const { heightTop, activateHeightTop } = useSelector((state) => state.select);

  const dispatch = useDispatch();
  const sortRef = React.useRef();

  // Passes the category id value to the redux storage
  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  // Pass the sort object( e.g. { name: 'Popular', sortProperty: 'rating' })
  // to the redux storage
  const onChangeSort = (obj) => {
    dispatch(setSort(obj));
  };

  // Closes the filter block, sets the category to 0(all categories)
  // also sets the sort parameter to an initial state and
  // refreshes the pizzas data(filterApply)
  const resetFunction = (e) => {
    onClose(e);
    onChangeCategory(0);
    onChangeSort({ name: 'Popular', sortProperty: 'rating' });
    setFilterApply(filterApply);
  };

  // Closes the filter block and
  // refreshes the pizzas data
  const applyFunction = (e) => {
    onClose(e);
    setFilterApply(filterApply);
  };

  // React.useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (!event.composedPath().includes(sortRef.current)) {
  //       onClose();
  //     }
  //   };

  //   document.body.addEventListener('click', handleClickOutside);
  //   return () => document.body.removeEventListener('click', handleClickOutside);
  // }, []);

  return (
    <div
      style={{ top: `${!activateHeightTop ? 0 : `${heightTop}px`}` }}
      className={`${styles.filtersOverlay} ${opened ? styles.filtersOverlayVisible : ''}`}>
      <div ref={sortRef} className={styles.filters}>
        <div className={styles.filtersHeader}>
          <h2 className={styles.filtersTitle}>Filters</h2>
          <CloseSvg onClick={onClose} className={styles.filtersClose} />
        </div>
        <div className={styles.filtersMain}>
          <div className={styles.filtersGeneral}>
            <h3 className={styles.filtersMainTitle}>General</h3>
            <ul className={styles.filtersMainWrap}>
              {categoriesGeneral.map((value, index) => (
                <li
                  key={index}
                  onClick={() => onChangeCategory(index)}
                  className={`${styles.filtersMainItem} ${
                    categoryId === index ? styles.filtersMainItemActive : ''
                  }`}>
                  {value}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.filtersSort}>
            <h3 className={styles.filtersMainTitle}>Sort</h3>
            <ul className={styles.filtersMainWrap}>
              {categoriesSort.map((value, index) => (
                <li
                  key={index}
                  onClick={() => onChangeSort(value)}
                  className={`${styles.filtersMainItem} ${
                    sort.sortProperty === value.sortProperty ? styles.filtersMainItemActive : ''
                  }`}>
                  {value.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.filtersButtons}>
          <a href="#" onClick={resetFunction} className={styles.filtersButton}>
            Reset
          </a>
          <a href="#" onClick={applyFunction} className={styles.filtersButton}>
            Apply
          </a>
        </div>
      </div>
    </div>
  );
};

export default Filters;
