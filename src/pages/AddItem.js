import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import AddItemContainer from '../container/AddItemContainer';

export default function AddItem() {
  return (
    <Container>
      <AddItemContainer />
      <Footer />
    </Container>
  );
}
