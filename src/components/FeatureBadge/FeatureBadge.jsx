import css from './FeatureBadge.module.css';

const FeatureBadge = ({ icon: Icon, text }) => {
  return (
    <div className={css.badgeContainer}>
      <Icon className={css.icon} />
      <span className={css.text}>{text}</span>
    </div>
  );
};

export default FeatureBadge;
