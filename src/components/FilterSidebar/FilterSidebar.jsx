import css from './FilterSidebar.module.css';
import VehicleEquipment from '../VehicleEquipment/VehicleEquipment.jsx';
import Button from '../Button/Button.jsx';
import { fetchCampers } from '../../redux/campersApi.js';
import VehicleType from '../VehicleType/VehicleType.jsx';
import { resetFilters } from '../../redux/slices/filterSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/slices/filterSlice.js';
import LocationSelect from '../LocationSelect/LocationSelect.jsx';
import { useState } from 'react';
import Loader from '../Loader/Loader.jsx';

const FilterSidebar = ({ className }) => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const filters = useSelector(state => state.filters.filters);

  const selectedLocation = useSelector(
    state => state.filters.filters.find(f => f.location)?.location || ''
  );
  const handleSubmit = async e => {
    e.preventDefault();

    setIsLoading(true);

    dispatch(resetFilters());

    const searchParams = new URLSearchParams();

    filters.forEach(item => {
      const key = Object.keys(item)[0];
      const value = item[key];

      if (key === 'location' && value) {
        const formattedLocation = value.replace(/\+/g, '%20');
        searchParams.append(key, formattedLocation);
      } else if (key === 'transmission' && value) {
        searchParams.append(key, 'automatic');
      } else if (key === 'form' && value) {
        searchParams.append(key, value);
      } else if (value) {
        searchParams.append(key, value.toString());
      }
    });

    const queryString = searchParams.toString();
    await dispatch(fetchCampers(queryString));
    setIsLoading(false);
  };

  const handleFilterChange = (key, value) => {
    dispatch(setFilter({ key, value }));
  };

  return (
    <div className={`${css.filter_sidebar} ${className}`}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <LocationSelect selectedLocation={selectedLocation} />
          <VehicleEquipment
            handleFilterChange={handleFilterChange}
            queryArr={filters}
          />
          <VehicleType
            handleFilterChange={handleFilterChange}
            queryArr={filters}
          />
          <div className={css.search_btn}>
            <Button className={css.buttonFilter} onClick={handleSubmit}>
              Search
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
export default FilterSidebar;
