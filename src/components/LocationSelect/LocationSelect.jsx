import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/slices/filterSlice.js';
import css from './LocationSelect.module.css';
import SvgIcon from '../SvgIcon/SvgIcon.jsx';

const LocationSelect = ({ selectedLocation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const locations = [
    'Ukraine, Kyiv',
    'Ukraine, Lviv',
    'Ukraine, Odesa',
    'Ukraine, Kharkiv',
    'Ukraine, Poltava',
    'Ukraine, Dnipro',
    'Ukraine, Sumy',
  ];

  const handleLocationChange = location => {
    dispatch(setFilter({ key: 'location', value: location }));
    setIsOpen(false);
  };

  return (
    <div className={css.location}>
      <p className={css.locationTitle}>Location</p>
      <div className={css.locationContainer}>
        <div className={css.customSelect} onClick={() => setIsOpen(!isOpen)}>
          <SvgIcon id="map" width={22} height={22} className={css.iconsElem} />
          {selectedLocation || 'Choose a location'}
          <span className={css.arrow}></span>
        </div>
        {isOpen && (
          <div className={css.dropdown}>
            {locations.map(location => (
              <div
                key={location}
                onClick={() => handleLocationChange(location)}
                className={css.dropdownItem}
              >
                {location}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationSelect;
