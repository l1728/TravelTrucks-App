import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CatalogListItem from '../../components/CatalogListItem/CatalogListItem.jsx';
import css from './FavoritesPage.module.css';
import Header from '../../components/Header/Header.jsx';
import Button from '../../components/Button/Button.jsx';
import { fetchCampers } from '../../redux/campersApi.js';
import BookingForm from '../../components/BookingForm/BookingForm.jsx';
import Loader from '../../components/Loader/Loader.jsx';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.campers.favorites);
  const status = useSelector(state => state.campers.status);
  const [visibleItems, setVisibleItems] = useState(4);

  useEffect(() => {
    if (favorites.length === 0) {
      dispatch(fetchCampers());
    }
  }, [dispatch, favorites.length]);

  const handleLoadMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 4);
  };

  const visibleFavorites = favorites.slice(0, visibleItems);

  if (status === 'loading') {
    return <Loader />;
  }

  if (!favorites || favorites.length === 0) {
    return <p>No favorite campers available</p>;
  }

  return (
    <div className={css.favorPageCont}>
      <Header className={css.header} />
      <div className={css.favorPage}>
        <BookingForm className={css.filterSidebar} />
        <div className={css.catalogBtn}>
          <div className={css.catalogList}>
            {visibleFavorites.map(camper => (
              <CatalogListItem key={camper.id} camper={camper} />
            ))}
          </div>
          {favorites.length > visibleItems && (
            <Button className={css.showMoreBtn} onClick={handleLoadMore}>
              Load more
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
