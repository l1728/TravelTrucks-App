import SvgIcon from '../SvgIcon/SvgIcon.jsx';
import css from './CampTypeBtn.module.css';
import clsx from 'clsx';

const CampTypeBtn = ({ item, onClick, label, iconId, isActive }) => {
  const keyCamper = Object.keys(item)[0];

  return (
    <button
      className={clsx(css.clickableBadge, isActive && css.active)}
      onClick={() => onClick(keyCamper)}
    >
      <SvgIcon id={iconId} width={40} height={40} className={css.iconsElem} />
      {label}
    </button>
  );
};

export default CampTypeBtn;
