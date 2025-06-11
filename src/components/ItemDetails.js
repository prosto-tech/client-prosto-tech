import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';


export default function ItemDetails({ item }) {
  console.log(typeof(item.odometer));
  console.log(typeof(item.transmission));
  console.log(typeof(item.price));
  const Itemwrap = styled.div`
    width: 100%;
    height: 400px;
    background: url(${item.image}) bottom center no-repeat;
    background-size: cover;
    padding: 30px;
    `;

  return (
    <>
      <Itemwrap>
        <Navigation />
      </Itemwrap>
      <section className="about-section">
        <h2 className="about-section__primary pb-4">
          { item.name }
        </h2>
        <h4 className="about-section__sub">
        <span className="badge badge-price">{ item.price }</span>
          <span className="badge badge-secondary">{ item.transmission }</span>
          {' '}
          {' '}
          <span className="badge badge-pill badge-success">
            AC -
            { item.ac }
          </span>
          {' '}  
          <span className="badge badge-odometer">{ item.odometer + " км"}</span>
          {' '}
          <span className="badge badge-color">{ item.color}</span>
          {' '}
          <span className="badge badge-battery">{ item.battery + " кВт" }</span>
          {' '}
        </h4>
        
        <h6 className="about-section_desc pb-4">
        {item.desc}
        </h6>
        <hr />
        <Link className="nav-link text-danger text-center" to="/items">
          &larr; До машин
        </Link>
        <Link className="nav-link text-danger text-center" to="/reserve">
           Замовити тест-драйв &rarr;
        </Link>
        <Link className="nav-link white" to="/logout">
                    Вихід
                  </Link>
      </section>
    </>
  );
}

ItemDetails.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  transmission: PropTypes.string.isRequired,
  odometer: PropTypes.string.isRequired,
  battery: PropTypes.number.isRequired,
  ac: PropTypes.bool.isRequired,
  date_added: PropTypes.string.isRequired,
  
};
