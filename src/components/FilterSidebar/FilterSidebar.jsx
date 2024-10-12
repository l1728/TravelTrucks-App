import { useState } from 'react';
import css from './FilterSidebar.module.css';
import LocationSelect from '../LocationSelect/LocationSelect.jsx';
import VehicleEquipment from '../VehicleEquipment/VehicleEquipment.jsx';
import VehicleType from '../VehicleType/VehicleType.jsx';
import Button from '../Button/Button.jsx';

const FilterSidebar = ({ className }) => {
  const [selectedLocation, setSelectedLocation] = useState('Kyiv, Ukraine');
  const [selectedFilters, setSelectedFilters] = useState({
    vehicleEquipment: [],
    vehicleType: [],
  });

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prevFilters => {
      const newFilters = { ...prevFilters };
      if (newFilters[filterType].includes(value)) {
        newFilters[filterType] = newFilters[filterType].filter(
          item => item !== value
        );
      } else {
        newFilters[filterType].push(value);
      }
      return newFilters;
    });
  };

  return (
    <div className={`${css.filter_sidebar} ${className}`}>
      <LocationSelect
        selectedLocation={selectedLocation}
        onLocationChange={setSelectedLocation}
      />
      <p className={css.locationTitle}>Filters</p>

      <VehicleEquipment
        selectedFilters={selectedFilters}
        handleFilterChange={handleFilterChange}
      />

      <VehicleType
        selectedFilters={selectedFilters}
        handleFilterChange={handleFilterChange}
      />

      <div className={css.search_btn}>
        <Button className={css.buttonFilter}>Search</Button>
      </div>
    </div>
  );
};

export default FilterSidebar;
