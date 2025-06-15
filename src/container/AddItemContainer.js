import React, { useState, useRef, FormElement } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function AddItem({ addItem, itemData }) {
  const make = useRef('');
  const model = useRef('');
  const year = useRef('');
  const color = useRef('');
  const odometer = useRef('');
  const price = useRef('');
  const battery = useRef('');
  const desc = useRef('');
  const maxCapacity = useRef('');
  const transmission = useRef('');
  const imageUrl = useRef('');
  const ac = useRef(false); // Initialize checkbox state to false

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      make: make.current.value,
      model: model.current.value,
      year: year.current.value,
      color: color.current.value,
      odometer: odometer.current.value,
      price: parseFloat(price.current.value), // Convert price to number
      battery: parseInt(battery.current.value), // Convert battery to integer
      desc: desc.current.value,
      maxCapacity: parseInt(maxCapacity.current.value), // Convert maxCapacity to number
      transmission: transmission.current.value,
      imageUrl: imageUrl.current.value,
      ac: ac.current.checked, // Get boolean value from checkbox
    };
  };

  // ... rest of the component (form elements & styling)

  return (
    <form onSubmit={handleSubmit}>
        <div className="add-item-form">
          <h2 className="add-item-title">Додати товар</h2>
          <p className="add-item-subtitle">Заповніть форму, щоб додати новий товар.</p>
          <div className="input"> 
          <label className="form-label" htmlFor="make">
            Виробник:
          </label>
          <input
            ref={make}
            type="text"
            id="make"
            name="make"
            placeholder="Введіть виробника"
            required
          />
          </div>
       <div className="input">
          <label className="form-label" htmlFor="model">
            Модель:
          </label>
          <input
            ref={model}
            type="text"
            id="model"
            name="model"
            placeholder="Введіть модель"
            required
          />
          </div>
      <div className="input">
          <label className="form-label" htmlFor="price">
            Ціна ($):
          </label>
          <input
            ref={price}
            type="number"
            id="price"
            name="price"
            placeholder="Введіть ціну"
            required
          />
          </div>
      <div className="input">
          <label className="form-label" htmlFor="desc">
            Опис:
          </label>
          <textarea ref={desc} id="desc" name="desc" placeholder="Введіть опис" />
          </div>
      <div className="input">
          <label className="form-label" htmlFor="imageUrl">
            URL зображення:
          </label>
          <input
            ref={imageUrl}
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Введіть URL зображення"
            required
          />
          </div>
            <div className="form-actions">
      <Link className="back_link" to="/items">
        &larr; До товарів
      </Link>
      <button type="submit" className="submit">
        Додати товар
      </button>
    </div>
  </div>
  </form>
);
}

AddItem.propTypes = {
  memberId: PropTypes.number.isRequired,
  
  onSubmitSuccess: PropTypes.func.isRequired,
  onSubmitError: PropTypes.func,
};

AddItem.defaultProps = {
  onSubmitError: () => {},
};
export default (AddItem);
