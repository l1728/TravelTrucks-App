import css from './FeatureBadge.module.css';

const FeatureBadge = ({ icon, text, isActive, onClick, isClickable }) => {
  const badgeClass = isClickable ? css.clickableBadge : css.nonClickableBadge;

  return (
    <div
      className={`${badgeClass} ${isActive ? css.active : ''}`}
      onClick={isClickable ? onClick : null}
    >
      {icon()}
      {text}
    </div>
  );
};

export default FeatureBadge;
