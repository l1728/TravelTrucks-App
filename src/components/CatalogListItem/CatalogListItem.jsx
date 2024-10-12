import Button from '../Button/Button.jsx';
import FeatureBadge from '../FeatureBadge/FeatureBadge.jsx';
import css from './CatalogListItem.module.css';
import { FaHeart } from 'react-icons/fa';
import TransmissionIcon from '../../assets/icons/icon_transm.svg';
import Fuel from '../../assets/icons/icon_fuel-pump.svg';
import Kitchen from '../../assets/icons/icon-kitchen.svg';
import AC from '../../assets/icons/icon-AC.svg';
import YellowStar from '../../assets/icons/icon_yellowStar.svg';
import LocationIcon from '../../assets/icons/icon_location.svg';
import { useState } from 'react';

const CatalogListItem = ({ camper }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorite(prevState => !prevState);
  };
  console.log('Camper details:', camper);

  const handleShowMore = () => {
    // Відкриваємо нову вкладку з URL деталей транспортного засобу
    window.open(`/camper/${camper.id}`, '_blank');
  };
  const firstImage = camper.gallery && camper.gallery[0]?.thumb;

  const totalReviews = camper.reviews?.length || 0;

  const averageRating =
    totalReviews > 0
      ? camper.reviews.reduce(
          (sum, review) => sum + review.reviewer_rating,
          0
        ) / totalReviews
      : 0;

  const formattedPrice = camper.price.toFixed(2);

  const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <div className={css.container}>
      <div className={css.imageContainer}>
        <img src={firstImage} alt={camper.name} className={css.carImage} />
      </div>
      <div className={css.infoContainer}>
        <div className={css.nameAndPriceContainer}>
          <h2 className={css.carName}>{camper.name}</h2>
          <div className={css.priceAndHeart}>
            <p className={css.carPrice}>€ {formattedPrice}</p>
            <div
              className={`${css.heartIcon} ${isFavorite ? css.favorite : ''}`}
              onClick={handleFavoriteToggle}
            >
              <FaHeart
                style={{
                  fill: isFavorite ? 'red' : 'transparent',
                  stroke: isFavorite ? 'red' : 'black',
                  strokeWidth: 6,
                }}
              />
            </div>
          </div>
        </div>
        <div className={css.ratingAndLocation}>
          <div className={css.rating}>
            <img src={YellowStar} alt="Star Icon" className={css.iconsElem} />
            {totalReviews > 0
              ? `${averageRating.toFixed(1)} (${totalReviews} Reviews)`
              : 'No reviews yet'}
          </div>
          <div className={css.locationAndIcon}>
            <img src={LocationIcon} alt="Paper-map Icon" />
            <p className={css.carLocation}>{camper.location}</p>
          </div>
        </div>
        <p className={css.carDescript}>{camper.description}</p>
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
              <span className={css.featureText}>
                {capitalize(camper.engine)}
              </span>
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
        <Button className={css.showMoreBtn} onClick={handleShowMore}>
          Show more
        </Button>
      </div>
    </div>
  );
};

export default CatalogListItem;
