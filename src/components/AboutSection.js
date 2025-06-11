import React from 'react';
import { Row, Col } from 'react-bootstrap';
import rent from '../imgs/rent.jpg';

export default function AboutSection() {
  return (
    <section className="about-section">
      {/* <h4 className="about-section__sub"></h4> */}
      <h2 className="about-section__primary pb-4">
       Дрібна техніка для вашого дому
      </h2>
      <Row className="mt-5">
        <Col sm={6}>
          <h4 className="about-section__left-title">
            Комфортні ціни та великий вибір
          </h4>
          <p className="about-section__desc">
          Часто кожен з нас потребує певну техніку, та не хочете купувати її 
          задля декількох використань - не проблема, адже Ви можете взяти її у
          нас в оренду за хорошими цінами, з можливістю доставки. Додавайте техніку до вподобаних 
          або одразу оформлюйте заявку.
          </p>
          <p>
            <a href="/register" className="btn btn-oval">
              Дізнатись більше
            </a>
          </p>
        </Col>
        <Col sm={6}>
          <img src={rent} className="img-fluid" alt="rent" />
        </Col>
      </Row>
    </section>
  );
}
