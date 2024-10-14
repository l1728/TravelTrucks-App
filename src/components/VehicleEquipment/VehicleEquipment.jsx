// import css from './VehicleEquipment.module.css';

// import FilterBtn from '../FilterBtn/FilterBtn.jsx';

// const VehicleEquipment = ({ handleFilterChange, queryArr }) => {
//   return (
//     <div className={css.filters}>
//       <h3>Vehicle equipment</h3>
//       <hr className={css.divider} />
//       <div className={css.filter_buttons}>
//         {queryArr &&
//           queryArr.map((item, index) => (
//             <FilterBtn item={item} key={index} onClick={handleFilterChange} />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default VehicleEquipment;

import css from './VehicleEquipment.module.css';
import FilterBtn from '../FilterBtn/FilterBtn.jsx';

const VehicleEquipment = ({ handleFilterChange, queryArr }) => {
  return (
    <div className={css.filters}>
      <h3>Vehicle Equipment</h3>
      <hr className={css.divider} />
      <div className={css.filter_buttons}>
        {queryArr.map((item, index) => {
          const key = Object.keys(item)[0]; // Отримуємо ключ фільтра
          const value = item[key]; // Отримуємо значення фільтра

          // Логіка для трансмісії
          // const label = key === 'transmission' && value ? 'Automatic' : key;
          const label = key === 'transmission' ? 'Automatic' : key; // Якщо трансмісія, використовуємо 'Automatic'

          return (
            <FilterBtn
              item={{ [key]: value }} // Передаємо лише ключ і значення
              key={index}
              onClick={handleFilterChange}
              label={label} // Передаємо відформатовану назву кнопки
            />
          );
        })}
      </div>
    </div>
  );
};

export default VehicleEquipment;
