import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import ReservesContainer from '../container/ReservesContainer';

export default function Reserve() {
  return (
    <Container className="bg-dark">
      <Navigation />
      <ReservesContainer />
      <Footer />
    </Container>
  );
}
