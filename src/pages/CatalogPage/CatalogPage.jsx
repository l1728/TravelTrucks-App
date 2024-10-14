import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CatalogList from '../../components/CatalogList/CatalogList.jsx';
import css from './CatalogPage.module.css';
import FilterSidebar from '../../components/FilterSidebar/FilterSidebar.jsx';
import Header from '../../components/Header/Header.jsx';
import { fetchCampers } from '../../redux/campersApi.js';
import { selectorCampers } from '../../redux/selectors.js';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectorCampers);
  const status = useSelector(state => state.campers.status);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (!campers || campers.length === 0) {
    return <p>No campers available</p>;
  }

  return (
    <div className={css.catalogPageCont}>
      <Header className={css.header} />
      <div className={css.catalogPage}>
        <FilterSidebar className={css.filterSidebar} />
        <CatalogList campers={campers} />
      </div>
    </div>
  );
};

export default CatalogPage;
