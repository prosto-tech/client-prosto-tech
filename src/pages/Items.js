import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import ItemContainer from '../container/ItemContainer';

export default function Items() {
  return (
    <Container className="bg-dark">
      <Navigation />
      <ItemContainer />
      <Footer />
    </Container>
  );
}
