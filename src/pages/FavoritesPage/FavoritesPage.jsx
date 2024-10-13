// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCampers } from '../../redux/slices/campersSlice.js';
// import CatalogList from '../../components/CatalogList/CatalogList.jsx';
// import css from './FavoritesPage.module.css';
// import FilterSidebar from '../../components/FilterSidebar/FilterSidebar.jsx';
// import Header from '../../components/Header/Header.jsx';

// const FavoritesPage = () => {
//   const dispatch = useDispatch();
//   const favorites = useSelector(state => state.campers.favorites); // Отримуємо обрані кемпери
//   const status = useSelector(state => state.campers.status);

//   const pageSize = 4; // Кількість елементів на сторінку
//   const [page, setPage] = useState(1);

//   // Витягуємо кемпери, якщо favorites порожній
//   useEffect(() => {
//     if (favorites.length === 0) {
//       dispatch(fetchCampers());
//     }
//   }, [dispatch, favorites.length]);

//   const handleLoadMore = () => {
//     setPage(prevPage => prevPage + 1); // Збільшуємо кількість відображуваних сторінок
//   };

//   const visibleFavorites = favorites.slice(0, page * pageSize); // Відображаємо лише кемпери, відповідні поточній сторінці

//   if (status === 'loading') {
//     return <p>Loading...</p>;
//   }

//   if (!favorites || favorites.length === 0) {
//     return <p>No favorite campers available</p>;
//   }

//   return (
//     <div className={css.catalogPageCont}>
//       <Header className={css.header} />
//       <div className={css.catalogPage}>
//         <FilterSidebar className={css.filterSidebar} />
//         <CatalogList campers={visibleFavorites} />
//         {favorites.length > visibleFavorites.length && (
//           <button className={css.loadMoreButton} onClick={handleLoadMore}>
//             Load more
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FavoritesPage;
// FavoritesPage.jsx
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/slices/campersSlice.js';
import CatalogListItem from '../../components/CatalogListItem/CatalogListItem.jsx';
import css from './FavoritesPage.module.css';
import FilterSidebar from '../../components/FilterSidebar/FilterSidebar.jsx';
import Header from '../../components/Header/Header.jsx';
import Button from '../../components/Button/Button.jsx';

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
    return <p>Loading...</p>;
  }

  if (!favorites || favorites.length === 0) {
    return <p>No favorite campers available</p>;
  }

  return (
    <div className={css.catalogPageCont}>
      <Header className={css.header} />
      <div className={css.catalogPage}>
        <FilterSidebar className={css.filterSidebar} />
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
