import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsHeartFill } from 'react-icons/bs';

export default function Item({ item, handleFavourite }) {
  
  return (

    <Card style={{ width: '18rem' }} className="m-2">
      <Card.Img variant="top" src={item.image} style={{ backgroundSize: 'cover', width: 286, height:190}} />
      <Card.Body>
        
      <section className="about-section">
        <h2 className="itemTitle pb-4 pr-4">
          { item.name } 
          {'  '}
          <BsHeartFill pl-4 size={20} color={item.fav === 'Yes' ? 'red' : 'gray'} title="Add to Favourite" onClick={handleFavourite} />
        </h2>
        <h4 className="about-_info">
          <span className="badge badge-price">{ item.price + " грн/год" }</span>
          {' '}
          {' '}
        </h4>
        </section>
    
        <Link to={`items/${item.id}`} className="btn-oval-item p-2">Детальніше</Link>
      </Card.Body>
    </Card>

  );
}

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    item: PropTypes.instanceOf(Object).isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    transmission: PropTypes.string.isRequired,
    odometer: PropTypes.string.isRequired,
    battery: PropTypes.number.isRequired,
    ac: PropTypes.bool.isRequired,
  
    fav: PropTypes.string.isRequired,
    date_added: PropTypes.string.isRequired,
  }).isRequired,
  handleFavourite: PropTypes.func.isRequired,
};
