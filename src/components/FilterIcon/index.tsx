import React from 'react';
import styles from './FilterIcon.module.scss';

import filter from '../../assets/img/vector/icon-filter.svg';

type FilterIconProps = {
  onClickFilters: (e: React.SyntheticEvent) => void;
};

const FilterIcon: React.FC<FilterIconProps> = ({ onClickFilters }) => {
  return (
    <>
      <a href="#" onClick={onClickFilters} className={styles.filter}>
        <img src={filter} alt="alt" className={styles.filterPic} />
        <p className={styles.filterDesc}>Filters</p>
      </a>
    </>
  );
};

export default FilterIcon;
