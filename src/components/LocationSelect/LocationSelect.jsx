import { useState } from 'react';
import LocationIcon from '../../assets/icons/icon_location.svg';
import css from './LocationSelect.module.css';

const LocationSelect = ({ selectedLocation, onLocationChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const locations = [
    'Kyiv, Ukraine',
    'Lviv, Ukraine',
    'Odessa, Ukraine',
    'Kharkiv, Ukraine',
    'Poltava, Ukraine',
    'Dnipro, Ukraine',
    'Sumy, Ukraine',
  ];

  const handleLocationChange = location => {
    onLocationChange(location);
    setIsOpen(false);
  };

  return (
    <div className={css.location}>
      <p className={css.locationTitle}>Location</p>
      <div className={css.locationContainer}>
        <div className={css.customSelect} onClick={() => setIsOpen(!isOpen)}>
          <img
            src={LocationIcon}
            alt="Paper-map Icon"
            className={css.locationIcon}
          />
          {selectedLocation}
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
