import SvgIcon from '../SvgIcon/SvgIcon.jsx';
import css from './Gallery.module.css';

const Gallery = ({ images, camper, description, price }) => {
  const totalReviews = camper.reviews?.length || 0;

  const averageRating =
    totalReviews > 0
      ? camper.reviews.reduce(
          (sum, review) => sum + review.reviewer_rating,
          0
        ) / totalReviews
      : 0;

  return (
    <div className={css.galleryContainer}>
      <h2 className={css.camperName}>{camper.name}</h2>
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
          <SvgIcon id="map" width={28} height={28} className={css.iconsElem} />
          <p className={css.carLocation}>{camper.location}</p>
        </div>
      </div>
      <p className={css.camperPrice}>€ {price.toFixed(2)}</p>
      <div className={css.imageGallery}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img.thumb}
            alt={`Camper image ${index + 1}`}
            className={css.galleryImage}
          />
        ))}
      </div>

      <p className={css.camperDescription}>{description}</p>
    </div>
  );
};

export default Gallery;
