import React from 'react';
import styles from './Search.module.scss';

import { SlMagnifier } from 'react-icons/sl';
import { RxCross1 } from 'react-icons/rx';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';

const Search = () => {
  const dispatch = useDispatch();

  const [value, setValue] = React.useState('');
  const inputRef = React.useRef();

  // Clears the search bar and the url search value
  // and lets the user type in another search value
  // without the need to click on the search bar again
  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current.focus();
  };

  // const testDebounce = debounce(() => {
  //   console.log('Hello');
  // }, 1000);

  // When we change the state("value"), the "Search" function is reacreated for ... times,
  // because of that all other functions inside "Search" are recreated too,
  // in order to prevent such situations, the hook useCallback is used
  // it saves the function and invokes it
  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
      setValue(str);
    }, 1000),
    [],
  );

  // Passes the value the user types in to the search bar and to the url
  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <form className={styles.searchForm}>
      <div className={styles.searchWrap}>
        <SlMagnifier className={styles.searchMagnifier} />
        <input
          ref={inputRef}
          value={value}
          onChange={onChangeInput}
          className={styles.searchInput}
          type="text"
          placeholder="Search pizzas"
          name="pizzas"
          autoComplete="off"
        />
        <RxCross1
          onClick={onClickClear}
          className={`${styles.searchClose} ${value ? styles.searchCloseActive : ''}`}
        />
      </div>
    </form>
  );
};

export default Search;
