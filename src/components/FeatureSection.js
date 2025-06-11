import React from 'react';
import { Row, Col } from 'react-bootstrap';
import item from '../imgs/feature-ride.png';

export default function FeatureSection() {
  return (
    <section className="about-section feature-section">
      <Row className="mt-2">
        <Col sm={6}>
          <img src={item} className="img-fluid" alt="rent" />
        </Col>
        <Col sm={6}>
          <h4 className="about-section__left-title ">
             Тут
          </h4>
          <p className="about-section__desc">
           
          </p>
          <p>
            <a href="/register" className="btn btn-oval">
              Переглянути
            </a>
          </p>
        </Col>
      </Row>
    </section>
  );
}
