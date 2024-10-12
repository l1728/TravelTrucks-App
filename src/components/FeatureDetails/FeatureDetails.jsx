import FeatureBadge from '../FeatureBadge/FeatureBadge.jsx';
import css from './FeatureDetails.module.css';
import TransmissionIcon from '../../assets/icons/icon_transm.svg';
import Fuel from '../../assets/icons/icon_fuel-pump.svg';
import Kitchen from '../../assets/icons/icon-kitchen.svg';
import AC from '../../assets/icons/icon-AC.svg';

const FeatureDetails = ({ camper, className }) => {
  const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);
  return (
    <div className={`${css.allCarDetailsCont} ${className}`}>
      <div className={css.allCarDetails}>
        <FeatureBadge
          icon={() => (
            <img
              src={TransmissionIcon}
              alt="Transmission Icon"
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
            <img src={Fuel} alt="Fuel-Pump Icon" className={css.iconsElem} />
          )}
          text={
            <span className={css.featureText}>{capitalize(camper.engine)}</span>
          }
        />
        {camper.kitchen && (
          <FeatureBadge
            icon={() => (
              <img
                src={Kitchen}
                alt="Cup_of_hot_tea Icon"
                className={css.iconsElem}
              />
            )}
            text={<span className={css.featureText}>Kitchen</span>}
          />
        )}
        {camper.AC && (
          <FeatureBadge
            icon={() => (
              <img src={AC} alt="Blow-wind Icon" className={css.iconsElem} />
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
