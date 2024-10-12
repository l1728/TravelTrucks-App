import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/slices/campersSlice.js';
import CatalogList from '../../components/CatalogList/CatalogList.jsx';
import css from './CatalogPage.module.css';
import FilterSidebar from '../../components/FilterSidebar/FilterSidebar.jsx';
import Header from '../../components/Header/Header.jsx';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(state => state.campers.items);
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
        <CatalogList campers={campers.items} />
      </div>
    </div>
  );
};

export default CatalogPage;
