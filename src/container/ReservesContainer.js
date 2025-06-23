import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ReserveForm = ({ memberId, itemId, onSubmitSuccess, onSubmitError }) => {
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!phone || !date) {
      setError('Please fill in all required fields (Phone and Date)');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('/reserve', {
        member_id: memberId,
        item_id: itemId,
        phone,
        date,
      });

      if (response.data.success) {
        onSubmitSuccess(); // Call callback function for successful submission
        setPhone('');
        setDate(''); // Clear form data after success
      } else {
        setError(response.data.error || 'An error occurred.'); // Handle API error messages
      }
    } catch (error) {
      console.error('Error submitting test drive request:', error);
      setError('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="driveTitle">Орендувати</h2>
      <p className="driveDesc">Вкажіть будь ласка номер телефону та бажану дату для оренди</p>
      <div className="form-group">
        <label className="phone-label" htmlFor="phone">Номер телефону</label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          name="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label className="date-label" htmlFor="date">Бажана дата оренди</label>
        <input
          type="date"
          className="form-control"
          id="date"
          name="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          required
        />
      </div>
      <div className="drive-flex justify-content-between align-items-center mb-3 ml-8">
  <Link className="back_link" to="/items">
    &larr; До товарів
  </Link>
  <button type="submit" className="submit" disabled={isLoading}>
    {isLoading ? 'Опрацювання...' : 'Замовити'}
  </button>
</div>
      
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
    </form>
  );
};

ReserveForm.propTypes = {
  memberId: PropTypes.number.isRequired,
  itemId: PropTypes.number.isRequired,
  onSubmitSuccess: PropTypes.func.isRequired,
  onSubmitError: PropTypes.func,
};

ReserveForm.defaultProps = {
  onSubmitError: () => {},
};

export default ReserveForm;
