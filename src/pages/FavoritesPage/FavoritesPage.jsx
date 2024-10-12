import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/slices/campersSlice.js';
import CatalogList from '../../components/CatalogList/CatalogList.jsx';
import css from './FavoritesPage.module.css';
import FilterSidebar from '../../components/FilterSidebar/FilterSidebar.jsx';
import Header from '../../components/Header/Header.jsx';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites); // Отримуємо обрані кемпери
  const status = useSelector(state => state.campers.status);

  // Витягування кемперів може бути необов'язковим
  useEffect(() => {
    // Визначте, чи потрібно завантажувати кемпери, якщо ви їх вже маєте
    if (favorites.length === 0) {
      dispatch(fetchCampers());
    }
  }, [dispatch, favorites.length]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (!favorites || favorites.length === 0) {
    return <p>No favorite campers available</p>;
  }
  console.log('favorites elements:', favorites);
  return (
    <div className={css.catalogPageCont}>
      <Header className={css.header} />
      <div className={css.catalogPage}>
        <FilterSidebar className={css.filterSidebar} />
        <CatalogList campers={favorites} />
      </div>
    </div>
  );
};

export default FavoritesPage;
