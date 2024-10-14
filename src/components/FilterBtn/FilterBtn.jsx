// import SvgIcon from '../SvgIcon/SvgIcon.jsx';
// import css from './FilterBtn.module.css';
// import clsx from 'clsx';

// const FilterBtn = ({ item, onClick }) => {
//   const keyCamper = Object.keys(item)[0];

//   console.log('itemFture', keyCamper);

//   return (
//     <button
//       className={clsx(css.clickableBadge, item[keyCamper] && css.active)}
//       onClick={() => onClick(keyCamper)}
//     >
//       <SvgIcon
//         id={keyCamper}
//         width={32}
//         height={22}
//         className={css.iconsElem}
//       />

//       {keyCamper}
//     </button>
//   );
// };

// export default FilterBtn;

import SvgIcon from '../SvgIcon/SvgIcon.jsx';
import css from './FilterBtn.module.css';
import clsx from 'clsx';

const FilterBtn = ({ item, onClick, label }) => {
  // Додаємо label
  const keyCamper = Object.keys(item)[0];

  return (
    <button
      className={clsx(css.clickableBadge, item[keyCamper] && css.active)}
      onClick={() => onClick(keyCamper)}
    >
      <SvgIcon
        id={keyCamper}
        width={40}
        height={40}
        className={css.iconsElem}
      />
      {label} {/* Використовуємо label замість ключа */}
    </button>
  );
};

export default FilterBtn;
