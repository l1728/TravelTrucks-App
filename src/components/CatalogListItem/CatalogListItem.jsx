import Button from '../Button/Button.jsx';
import css from './CatalogListItem.module.css';
import { FaHeart } from 'react-icons/fa';

const CatalogListItem = ({ camper }) => {
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

  return (
    <div className={css.container}>
      <div className={css.imageContainer}>
        <img src={firstImage} alt={camper.name} className={css.carImage} />
      </div>
      <div className={css.infoContainer}>
        <div className={css.priceAndHeart}>
          <p className={css.carPrice}>€ {formattedPrice}</p>
          <div className={css.heartIcon}>
            <FaHeart
              style={{ fill: 'transparent', stroke: 'white', strokeWidth: 6 }}
            />
          </div>
        </div>

        <h2 className={css.carName}>{camper.name}</h2>
        <p className={css.carLocation}>{camper.location}</p>
        <p className={css.carDescript}>{camper.description}</p>
        <p className={css.carDetails}>{camper.transmission}</p>
        <p className={css.carDetails}>{camper.engine}</p>
        <p className={css.carAmenities}>
          Kitchen: {camper.kitchen ? 'Yes' : 'No'}, AC:{' '}
          {camper.AC ? 'Yes' : 'No'}
        </p>
        <p className={css.carRating}>
          {totalReviews > 0
            ? `Reviews: ${totalReviews}, Average Rating: ${averageRating.toFixed(
                1
              )}`
            : 'No reviews yet'}
        </p>
        <Button className={css.showMoreBtn}>Show more</Button>
      </div>
    </div>
  );
};

export default CatalogListItem;
