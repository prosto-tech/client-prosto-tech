import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

function App() {
  return (
    <Container>
      <Header />
      <AboutSection />
      <CallToAction />
      <Footer />
    </Container>
  );
}

export default App;
