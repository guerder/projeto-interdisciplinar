import React, { useState, useEffect} from 'react';
import { Container, Row, Col, Card, CardImg, CardTitle, CardText, CardBody, Button } from 'reactstrap';

import api from '../../services/api';

import notFound from '../../assets/not-found.png';

const Article = () => {

  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    async function loadMovies() {
      const MovieList = await api.get('/movies');
      setMovies(MovieList.data);
    }

    loadMovies();
  }, []);
  
  return (
    <Container fluid>
      <Row>
      {movies &&
        movies.map(movie => (
          <Col md="2" key={movie.id}>
            <Card>
              <Button>{movie.title}
                <CardImg src={notFound} alt={movie.title} />
              </Button>
              <CardBody>
                <CardTitle>{movie.title}</CardTitle>
                <CardText>{movie.overview}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    );
  }
  
  export default Article;