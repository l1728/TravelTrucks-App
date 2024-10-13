import PropTypes from 'prop-types';
import css from './SvgIcon.module.css';

const SvgIcon = ({ id, width = 32, height = 32, className = '' }) => {
  return (
    <svg className={`${css.icon} ${className}`} width={width} height={height}>
      <use href={`/public/icons.svg#${id}`} />
    </svg>
  );
};

SvgIcon.propTypes = {
  id: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

export default SvgIcon;
