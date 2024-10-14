import SvgIcon from '../SvgIcon/SvgIcon.jsx';
import css from './FilterBtn.module.css';
import clsx from 'clsx';

const FilterBtn = ({ item, onClick, label }) => {
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
      {label}
    </button>
  );
};

export default FilterBtn;
