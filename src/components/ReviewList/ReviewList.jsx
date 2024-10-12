const ReviewList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((review, index) => (
        <li key={index}>
          <strong>{review.reviewer_name}</strong>: {review.content} -{' '}
          {review.reviewer_rating} ★
        </li>
      ))}
    </ul>
  );
};

export default ReviewList;
