import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ closeModal }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handleBookNow = () => {
    console.log('Booking...');
   
    closeModal();
  };

  return (
    <div className="booking-form">
      <h2>Enter Card Information</h2>
      <label>
        Card Number:
        <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
      </label>
      <label>
        Expiry Date:
        <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
      </label>
      <label>
        CVV:
        <input type="text" value={cvv} onChange={(e) => setCVV(e.target.value)} />
      </label>
      <button onClick={handleBookNow}>Book Now</button>
    </div>
  );
};

export default BookingForm;
