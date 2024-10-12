import { useState } from 'react';

const BookingForm = () => {
  const [dates, setDates] = useState({ startDate: '', endDate: '' });

  const handleSubmit = e => {
    e.preventDefault();
    // Додати логіку для обробки бронювання
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Booking Form</h3>
      <label>
        Start Date:
        <input
          type="date"
          value={dates.startDate}
          onChange={e => setDates({ ...dates, startDate: e.target.value })}
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          value={dates.endDate}
          onChange={e => setDates({ ...dates, endDate: e.target.value })}
        />
      </label>
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
