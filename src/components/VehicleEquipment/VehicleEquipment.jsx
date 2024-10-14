import css from './VehicleEquipment.module.css';
import FilterBtn from '../FilterBtn/FilterBtn.jsx';

const VehicleEquipment = ({ handleFilterChange, queryArr }) => {
  return (
    <div className={css.filters}>
      <h3>Vehicle Equipment</h3>
      <hr className={css.divider} />
      <div className={css.filter_buttons}>
        {queryArr.map((item, index) => {
          const key = Object.keys(item)[0];
          const value = item[key];

          const label = key === 'transmission' ? 'Automatic' : key;

          return (
            <FilterBtn
              item={{ [key]: value }}
              key={index}
              onClick={() => handleFilterChange(key, true)}
              label={label}
            />
          );
        })}
      </div>
    </div>
  );
};

export default VehicleEquipment;
