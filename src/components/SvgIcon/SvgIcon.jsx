import css from './SvgIcon.module.css';

const SvgIcon = ({ id, width = 32, height = 32, className = '' }) => {
  return (
    <svg className={`${css.icon} ${className}`} width={width} height={height}>
      <use href={`/icons.svg#${id}`} />
    </svg>
  );
};

export default SvgIcon;
