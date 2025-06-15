import React, { useState, useRef, FormElement } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addItem } from '../redux/actions';
import { connect } from 'react-redux';

function AddItemContainer({ addItem, itemData }) {
    const make = useRef('');
    const model = useRef('');
    const price = useRef('');
    const desc = useRef('');
    const image_url = useRef('');
    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            make: make.current.value,
            model: model.current.value,
            price: parseFloat(price.current.value), // Convert price to number
            desc: desc.current.value,
            image_url: image_url.current.value,
        };
        addItem(newItem);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="add-item-form">
                <h2 className="add-item-title">Додати автомобіль</h2>
                <p className="add-item-subtitle">Заповніть форму, щоб додати новий автомобіль.</p>
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
                        Ціна (грн/год):
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
                        ref={image_url}
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


const mapStateToProps = state => ({
    userData: state.user,
});

const mapDispatchToProps = dispatch => ({
    addItem: info => dispatch(addItem(info)),
});


AddItemContainer.propTypes = {
    addItem: PropTypes.func,
};

AddItemContainer.defaultProps = {
    onSubmitError: () => {},
};
export default connect(mapStateToProps, mapDispatchToProps) (AddItemContainer);