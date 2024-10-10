import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/slices/campersSlice.js';
import CatalogList from '../../components/CatalogList/CatalogList.jsx';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(state => state.campers.items);
  const status = useSelector(state => state.campers.status);

  // Виводимо campers в консоль для перевірки структури
  console.log('Campers state:', campers);

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
    <div className={css.catalogPage}>
      <CatalogList campers={campers.items} />
    </div>
  );
};

export default CatalogPage;
