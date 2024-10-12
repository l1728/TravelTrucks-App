import { useEffect, useState } from 'react';
import css from './VehicleEquipment.module.css';
import FeatureBadge from '../FeatureBadge/FeatureBadge.jsx';
import ACIcon from '../../assets/icons/icon-AC.svg';
import AutomaticIcon from '../../assets/icons/icon_transm.svg';
import KitchenIcon from '../../assets/icons/icon-kitchen.svg';
import TVIcon from '../../assets/icons/icon_tv.svg';
import BathroomIcon from '../../assets/icons/icon_drop.svg';

const VehicleEquipment = ({ campers }) => {
  console.log('campers:', campers);

  const equipmentOptions = [
    { name: 'AC', icon: ACIcon, propertyPath: 'AC' },
    {
      name: 'Automatic',
      icon: AutomaticIcon,
      propertyPath: 'transmission.automatic',
    },
    { name: 'Kitchen', icon: KitchenIcon, propertyPath: 'kitchen' },
    { name: 'TV', icon: TVIcon, propertyPath: 'TV' },
    { name: 'Bathroom', icon: BathroomIcon, propertyPath: 'bathroom' },
  ];

  const [selectedFilters, setSelectedFilters] = useState({
    vehicleEquipment: [],
    filteredCampers: Array.isArray(campers) ? campers : [],
  });

  useEffect(() => {
    if (Array.isArray(campers)) {
      setSelectedFilters(prevFilters => ({
        ...prevFilters,
        filteredCampers: campers,
      }));
    }
  }, [campers]);

  const handleFilterChange = filterName => {
    const filterOption = equipmentOptions.find(
      option => option.name === filterName
    );

    setSelectedFilters(prevFilters => {
      const vehicleEquipment = prevFilters.vehicleEquipment.includes(
        filterOption.propertyPath
      )
        ? prevFilters.vehicleEquipment.filter(
            item => item !== filterOption.propertyPath
          )
        : [...prevFilters.vehicleEquipment, filterOption.propertyPath];

      const filteredCampers = Array.isArray(campers)
        ? campers.filter(camper => {
            return vehicleEquipment.every(option => {
              const keys = option.split('.');
              return (
                keys.reduce(
                  (obj, key) =>
                    obj && obj[key] !== undefined ? obj[key] : null,
                  camper
                ) === true
              );
            });
          })
        : [];

      console.log('campers:', campers);

      console.log('filteredCampers:', filteredCampers);
      console.log('vehicleEquipment', vehicleEquipment);

      return { vehicleEquipment, filteredCampers };
    });
  };

  return (
    <div className={css.filters}>
      <h3>Vehicle equipment</h3>
      <hr className={css.divider} />
      <div className={css.filter_buttons}>
        {equipmentOptions.map(item => (
          <FeatureBadge
            key={item.name}
            icon={() => (
              <img
                src={item.icon}
                alt={`${item.name} Icon`}
                className={css.iconsElem}
              />
            )}
            text={<span className={css.featureText}>{item.name}</span>}
            isActive={selectedFilters.vehicleEquipment.includes(item.name)}
            onClick={() => handleFilterChange(item.name)}
            isClickable={true}
          />
        ))}
      </div>
    </div>
  );
};

export default VehicleEquipment;
