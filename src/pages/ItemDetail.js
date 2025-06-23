import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import TechItemContainer from '../container/TechItemContainer';

export default function ItemDetail() {
  return (
    <Container>
      <TechItemContainer />
      <Footer />
    </Container>
  );
}
