import React from 'react';
import Headers from './components/Headers';
import Article from './components/Article';
import Footer from './components/Footer';
import { Container } from 'reactstrap';

function App() {
  return (
    <Container fluid className="pt-4">
      <Headers />
      <Article />
      <Footer />
    </Container>
    
  );
}

export default App;
