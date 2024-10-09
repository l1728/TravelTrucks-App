import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/slices/campersSlice.js';
import css from './CatalogPage.module.css';

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

  return (
    <div className={css.catalog_card}>
      {campers.items.length === 0 ? (
        <p>No campers available</p>
      ) : (
        campers.items.map(camper => (
          <div key={camper.id}>
            <h2>{camper.name}</h2>
            <p>{camper.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CatalogPage;
