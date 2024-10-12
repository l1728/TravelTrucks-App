import css from './ReviewList.module.css';

const ReviewList = ({ reviews, className }) => {
  return (
    <div className={`${css.reviewListCont} ${className}`}>
      <ul className={css.reviewList}>
        {reviews.map((review, index) => (
          <li key={index} className={css.reviewItem}>
            <div className={css.reviewerInfo}>
              <div className={css.reviewerCircle}>
                {review.reviewer_name.charAt(0).toUpperCase()}{' '}
              </div>
              <div className={css.nameAndStars}>
                <strong className={css.rewName}>{review.reviewer_name}</strong>
                <div className={css.stars}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={css.star}
                      style={{
                        color:
                          i < review.reviewer_rating ? '#FFC531' : '#DADDE1',
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
