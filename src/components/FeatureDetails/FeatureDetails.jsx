import FeatureBadge from '../FeatureBadge/FeatureBadge.jsx';
import css from './FeatureDetails.module.css';
import SvgIcon from '../SvgIcon/SvgIcon.jsx';

const FeatureDetails = ({ camper, className }) => {
  const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);
  return (
    <div className={`${css.allCarDetailsCont} ${className}`}>
      <div className={css.allCarDetails}>
        <FeatureBadge
          icon={() => (
            <SvgIcon
              id="transmission"
              width={24}
              height={24}
              className={css.iconsElem}
            />
          )}
          text={
            <span className={css.featureText}>
              {capitalize(camper.transmission)}
            </span>
          }
          isActive={false}
          isClickable={false}
        />
        <FeatureBadge
          icon={() => (
            <SvgIcon
              id="pump"
              width={24}
              height={24}
              className={css.iconsElem}
            />
          )}
          text={
            <span className={css.featureText}>{capitalize(camper.engine)}</span>
          }
        />
        {camper.kitchen && (
          <FeatureBadge
            icon={() => (
              <SvgIcon
                id="kitchen"
                width={24}
                height={24}
                className={css.iconsElem}
              />
            )}
            text={<span className={css.featureText}>Kitchen</span>}
          />
        )}
        {camper.AC && (
          <FeatureBadge
            icon={() => (
              <SvgIcon
                id="AC"
                width={24}
                height={24}
                className={css.iconsElem}
              />
            )}
            text={<span className={css.featureText}>AC</span>}
          />
        )}
      </div>
      <div className={css.camperInfo}>
        <h2>Vehicle details</h2>
        <hr className={css.divider} />
        <div className={css.featuresData}>
          <p className={css.paragSpace}>
            <span>Form</span> <span>{camper.form}</span>
          </p>
          <p className={css.paragSpace}>
            <span>Length</span> <span>{camper.length}</span>
          </p>
          <p className={css.paragSpace}>
            <span>Width</span> <span>{camper.width}</span>
          </p>
          <p className={css.paragSpace}>
            <span>Height</span> <span>{camper.height}</span>
          </p>
          <p className={css.paragSpace}>
            <span>Tank</span> <span>{camper.tank}</span>
          </p>
          <p className={css.paragSpace}>
            <span>Consumption</span> <span>{camper.consumption}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetails;
