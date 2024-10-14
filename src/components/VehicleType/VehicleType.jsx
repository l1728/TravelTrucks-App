import css from './VehicleType.module.css';
import CampTypeBtn from '../CampTypeBtn/CampTypeBtn.jsx';

const VehicleType = ({ handleFilterChange }) => {
  const vehicleTypes = [
    { form: 'alcove', icon: 'alcove' },
    { form: 'fullyIntegrated', icon: 'fully-integrated' },
    { form: 'panelTruck', icon: 'van' },
  ];

  const handleTypeClick = keyCamper => {
    const isActive = vehicleTypes.some(
      item => item.form === keyCamper && item.isActive
    );
    const newType = isActive ? '' : keyCamper;

    handleFilterChange('form', newType);
  };

  return (
    <div className={css.filters}>
      <h3>Vehicle Type</h3>
      <hr className={css.divider} />
      <div className={css.filter_buttons}>
        {vehicleTypes.map(item => (
          <CampTypeBtn
            key={item.form}
            item={item}
            onClick={() => handleTypeClick(item.form)}
            label={item.form.charAt(0).toUpperCase() + item.form.slice(1)}
            iconId={item.icon}
            isActive={item.isActive}
          />
        ))}
      </div>
    </div>
  );
};

export default VehicleType;
