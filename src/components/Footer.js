import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../imgs/logo_dark.png';

export default function Footer() {
  return (

    <section className="about-section footer">
      {/* <h2 className="about-section__primary">
        <Link className="nav-link white" to="/">
          <img className="logo" src={logo} alt="Item shop ecoway" />
        </Link>
      </h2> */}
      <p>
       м. Тернопіль
        {' '}
        <br />
        
      </p>
      <p>
        "Просто Тех"
        { ' ' }
        {new Date().getFullYear()}
      </p>
    </section>

  );
}
