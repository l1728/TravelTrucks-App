import { useEffect, useState } from 'react';
import css from './VehicleEquipment.module.css';
import FeatureBadge from '../FeatureBadge/FeatureBadge.jsx';
import SvgIcon from '../../components/SvgIcon/SvgIcon';

const VehicleEquipment = campers => {
  console.log('campers - incoming hereVehicleEquipment:', campers);

  const equipmentOptions = [
    { name: 'AC', icon: 'AC', propertyPath: 'AC' },
    {
      name: 'Automatic',
      icon: 'transmission',
      propertyPath: 'transmission',
    },
    { name: 'Kitchen', icon: 'kitchen', propertyPath: 'kitchen' },
    { name: 'TV', icon: 'TV', propertyPath: 'TV' },
    { name: 'Bathroom', icon: 'bathroom', propertyPath: 'bathroom' },
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

      console.log('campersVehicleEquipment:', campers);

      console.log('filteredCampersVehicleEquipment:', filteredCampers);
      console.log('vehicleEquipmentVehicleEquipment', vehicleEquipment);

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
              <SvgIcon
                id={item.icon}
                width={32}
                height={22}
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
