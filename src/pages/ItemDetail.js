import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import ItemContainer from '../container/ItemContainer';

export default function ItemDetail() {
  return (
    <Container>
      <ItemContainer />
      <Footer />
    </Container>
  );
}
