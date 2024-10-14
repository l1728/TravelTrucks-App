import { useState } from 'react';
import css from './FilterSidebar.module.css';
import VehicleEquipment from '../VehicleEquipment/VehicleEquipment.jsx';
import Button from '../Button/Button.jsx';
import { useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/campersApi.js';
import VehicleType from '../VehicleType/VehicleType.jsx';

const FilterSidebar = ({ className }) => {
  const dispatch = useDispatch();

  const [queryArr, setQueryArr] = useState([
    { AC: false },
    { transmission: '' },
    { kitchen: false },
    { TV: false },
    { bathroom: false },
  ]);

  // Функція для формування та відправки запиту
  const handleSubmit = e => {
    e.preventDefault();
    const searchParams = new URLSearchParams();

    // Перебір масиву з фільтрами та додавання ключів до URLSearchParams
    queryArr.forEach(item => {
      const key = Object.keys(item)[0];
      const value = item[key];

      // Додаємо до запиту лише правдиві значення
      if (key === 'transmission' && value) {
        // Якщо значення transmission правдиве, додаємо 'automatic'
        searchParams.append(key, 'automatic'); // або 'manual', залежно від вашого випадку
      } else if (value) {
        searchParams.append(key, value.toString());
      }
    });
    const queryString = searchParams.toString();
    dispatch(fetchCampers(queryString)); // Відправляємо запит до Redux для отримання даних
    console.log(queryString); // Виводимо рядок запиту для перевірки
  };

  // Оновлення значень фільтрів при їх виборі
  const handleFilterChange = key => {
    const updatedFilters = queryArr.map(item => {
      if (key in item) {
        return { [key]: !item[key] };
      }
      return item;
    });

    setQueryArr(updatedFilters);
  };

  return (
    <div className={`${css.filter_sidebar} ${className}`}>
      <VehicleEquipment
        handleFilterChange={handleFilterChange}
        queryArr={queryArr}
      />

      {/* <VehicleType
        handleFilterChange={handleFilterChange}
        queryArr={queryArr}
      /> */}

      <div className={css.search_btn}>
        <Button className={css.buttonFilter} onClick={handleSubmit}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default FilterSidebar;
