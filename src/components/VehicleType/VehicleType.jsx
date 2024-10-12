import css from './VehicleType.module.css';
import FeatureBadge from '../FeatureBadge/FeatureBadge.jsx';
import VanIcon from '../../assets/icons/icon-be_greed.svg'; // Імпортуйте вашу іконку
import FullyIntegratedIcon from '../../assets/icons/icon_4_grid.svg'; // Імпортуйте іконку
import AlcoveIcon from '../../assets/icons/icon_9_grid.svg'; // Імпортуйте іконку

const VehicleType = ({ selectedFilters, handleFilterChange }) => {
  const vehicleTypesOptions = [
    { name: 'Van', icon: VanIcon },
    { name: 'Fully Integrated', icon: FullyIntegratedIcon },
    { name: 'Alcove', icon: AlcoveIcon },
  ];

  return (
    <div className={css.filters}>
      <h3>Vehicle type</h3>
      <hr className={css.divider} />
      <div className={css.filter_buttons}>
        {vehicleTypesOptions.map(({ name, icon }) => (
          <FeatureBadge
            key={name}
            icon={() => (
              <img src={icon} alt={`${name} Icon`} className={css.iconsElem} />
            )} // Використання img для іконки
            text={<span className={css.featureText}>{name}</span>}
            isActive={selectedFilters.vehicleType.includes(name)}
            onClick={() => handleFilterChange('vehicleType', name)}
            isClickable={true}
          />
        ))}
      </div>
    </div>
  );
};

export default VehicleType;
