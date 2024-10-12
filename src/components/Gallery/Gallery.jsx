import css from './Gallery.module.css';
import LocationIcon from '../../assets/icons/icon_location.svg'; // Імпорт іконки локації
import YellowStar from '../../assets/icons/icon_yellowStar.svg';

const Gallery = ({ images, camper, name, description, price, location }) => {
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

      {/* Опис кемпера */}
      <div className={css.camperInfo}>
        <h2 className={css.camperName}>{name}</h2>
        <p className={css.camperDescription}>{description}</p>

        <div className={css.rating}>
          <img src={YellowStar} alt="Star Icon" className={css.iconsElem} />
          {totalReviews > 0
            ? `${averageRating.toFixed(1)} (${totalReviews} Reviews)`
            : 'No reviews yet'}
        </div>

        {/* Ціна та локація */}
        <div className={css.priceAndLocation}>
          <p className={css.camperPrice}>€ {price.toFixed(2)}</p>
          <div className={css.camperLocation}>
            <img
              src={LocationIcon}
              alt="Location Icon"
              className={css.locationIcon}
            />
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
