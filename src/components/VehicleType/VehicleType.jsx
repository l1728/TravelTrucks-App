import css from './VehicleType.module.css';
import FeatureBadge from '../FeatureBadge/FeatureBadge.jsx';
import SvgIcon from '../SvgIcon/SvgIcon.jsx';

const VehicleType = ({ selectedFilters, handleFilterChange }) => {
  const vehicleTypesOptions = [
    { name: 'Van', icon: 'van', propertyPath: 'form' },
    {
      name: 'Fully Integrated',
      icon: 'fully-integrated',
      propertyPath: 'form',
    },
    { name: 'Alcove', icon: 'alcove', propertyPath: 'form' },
  ];

  return (
    <div className={css.filters}>
      <h3>Vehicle type</h3>
      <hr className={css.divider} />
      <div className={css.filter_buttons}>
        {vehicleTypesOptions.map(item => (
          <FeatureBadge
            key={item.name}
            icon={() => (
              <SvgIcon
                id={item.icon}
                width={32}
                height={32}
                className={css.iconsElem}
              />
            )}
            text={<span className={css.featureText}>{item.name}</span>}
            isActive={selectedFilters.vehicleType.includes(item.name)}
            onClick={() => handleFilterChange('vehicleType', item.name)}
            isClickable={true}
          />
        ))}
      </div>
    </div>
  );
};

export default VehicleType;
