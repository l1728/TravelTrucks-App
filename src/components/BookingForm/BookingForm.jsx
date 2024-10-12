import { useState } from 'react';
import css from './BookingForm.module.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  });

  const [isBooked, setIsBooked] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Booking details submitted:', formData);
    setIsBooked(true); // Імітація успішної відправки
  };

  return (
    <div className={css.bookingFormContainer}>
      <h2>Book your campervan now</h2>
      <p>Stay connected! We are always ready to help you.</p>

      {!isBooked ? (
        <form onSubmit={handleSubmit} className={css.bookingForm}>
          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="bookingDate"
            placeholder="Booking date*"
            value={formData.bookingDate}
            onChange={handleChange}
            required
          />
          <textarea
            name="comment"
            placeholder="Comment"
            value={formData.comment}
            onChange={handleChange}
          />
          <button type="submit" className={css.submitButton}>
            Send
          </button>
        </form>
      ) : (
        <div className={css.successMessage}>
          <p>Your booking has been successfully submitted!</p>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
