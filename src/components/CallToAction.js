import React from 'react';
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (

    <section className="call-action">
      <h4 className="call-action-text">Заповнюйте заявку із бажаним часом та очікуйте зворотнього дзвінка.</h4>
      <p>
        <Link className="btn btn-oval" to="/register">Орендувати</Link>
      </p>
    </section>

  );
}
