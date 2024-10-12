import { useState } from 'react';
import css from './BookingForm.module.css';
import Button from '../Button/Button.jsx';

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

    const name = formData.name.trim();
    const email = formData.email.trim();
    const date = formData.bookingDate;

    const nameRegex = /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s]+$/;
    if (name.length < 3) {
      alert('The name must contain at least 3 letters.');
      return;
    }
    if (!nameRegex.test(name)) {
      alert('The name must contain only letters and cannot contain numbers.');
      return;
    }

    if (!name || !email || !date) {
      alert('Please fill out all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      alert('The reservation date cannot be in the past.');
      return;
    }

    setIsBooked(true);
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
          <Button type="submit" className={css.submitButton}>
            Send
          </Button>
        </form>
      ) : (
        <div className={css.successMessage}>
          <p>
            Thank you for your booking! We are excited to help you with your
            campervan adventure. Our team will reach out to you shortly to
            confirm the details and assist with any further questions you might
            have. We look forward to making your trip unforgettable!
          </p>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
