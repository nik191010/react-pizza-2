import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/app.scss';

import './assets/fonts/Inter-Regular.ttf';
import './assets/fonts/Inter-SemiBold.ttf';
import './assets/fonts/SF-Pro-Text-Regular.ttf';
import './assets/fonts/SF-Pro-Text-Semibold.ttf';

import Filters from './components/Filters';
import Order from './components/Order';
import SelectPizza from './components/SelectPizza';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import { switcherTopHeight } from './redux/slices/selectSlice';
import { useDispatch, useSelector } from 'react-redux';
import FullPizza from './pages/FullPizza';

function App() {
  const dispatch = useDispatch();
  const { activateHeightTop } = useSelector((state) => state.select);

  const [cartOpened, setCartOpened] = React.useState(false);
  const [filtersOpened, setFiltersOpened] = React.useState(false);
  const [filterApply, setFilterApply] = React.useState(0);

  // Opens and closes the cart
  const cartVisible = () => {
    setCartOpened(!cartOpened);
    dispatch(switcherTopHeight(!activateHeightTop));

    return !cartOpened
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  };

  // Opens and closes the filters section
  const filtersVisible = (e) => {
    e.preventDefault();
    dispatch(switcherTopHeight(!activateHeightTop));
    setFiltersOpened(!filtersOpened);

    return !filtersOpened
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  };

  return (
    <div className="wrapper">
      <Filters
        onClose={filtersVisible}
        opened={filtersOpened}
        filterApply={filterApply}
        setFilterApply={(i) => setFilterApply(i + 1)}
      />
      <Order onClose={cartVisible} opened={cartOpened} />
      <SelectPizza />
      <Header onClickCart={cartVisible} />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={<Home filterApply={filterApply} filtersVisible={filtersVisible} />}
          />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/pizza/:id" element={<FullPizza />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
