import Button from '../Button/Button.jsx';
import FeatureBadge from '../FeatureBadge/FeatureBadge.jsx';
import css from './CatalogListItem.module.css';
// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../redux/slices/campersSlice.js';
import SvgIcon from '../SvgIcon/SvgIcon.jsx';

const CatalogListItem = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites);

  const isFavorite = favorites.some(favorite => favorite.id === camper.id);

  const handleFavoriteToggle = () => {
    dispatch(toggleFavorite(camper.id)); // Викликаємо функцію для управління обраними
  };

  const handleShowMore = () => {
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
              <SvgIcon
                id="heart"
                width={24}
                height={24}
                className={css.iconsElemHeart}
              />
            </div>
          </div>
        </div>
        <div className={css.ratingAndLocation}>
          <div className={css.rating}>
            <SvgIcon
              id="rating"
              width={24}
              height={24}
              className={css.iconsElemStar}
            />
            {totalReviews > 0
              ? `${averageRating.toFixed(1)} (${totalReviews} Reviews)`
              : 'No reviews yet'}
          </div>
          <div className={css.locationAndIcon}>
            <SvgIcon
              id="map"
              width={28}
              height={28}
              className={css.iconsElem}
            />
            <p className={css.carLocation}>{camper.location}</p>
          </div>
        </div>
        <p className={css.carDescript}>{camper.description}</p>
        <div className={css.allCarDetails}>
          <FeatureBadge
            icon={() => (
              <SvgIcon
                id="transmission"
                width={32}
                height={32}
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
                width={30}
                height={28}
                className={css.iconsElem}
              />
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
                <SvgIcon
                  id="kitchen"
                  width={32}
                  height={32}
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
                  width={32}
                  height={32}
                  className={css.iconsElem}
                />
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
