import React, { useState, useEffect} from 'react';
import { Row, Col, Card, CardImg, CardTitle, CardText, CardBody, Button } from 'reactstrap';

import './styles.css'

import api from '../../services/api';

import notFound from '../../assets/not-found.png';

const Article = () => {

  const [movies, setMovies] = useState([]);

  const [page, setPage] = useState(1);
  
  useEffect(() => {
    async function loadMovies() {
      const MovieList = await api.get(`/movies?page=${page}`);
      setMovies(MovieList.data);
    }

    loadMovies();
  }, [page]);

  function getMovies(event){
    if(event.target.value === "prox"){
      setPage(page + 1);
    }else{
      setPage(page - 1);
    }
  }
  
  return (
    <>
      <Row className="mt-5">
        <Col md="6">
          <Button 
            className="btn-lg btn-block" 
            color="dark"
            value="ant"
            onClick={getMovies}
          >Anterior</Button>
        </Col>
        <Col md="6">
          <Button 
            className="btn-lg btn-block" 
            color="dark"
            value="prox"
            onClick={getMovies}
          >Próximo</Button>
        </Col>
      </Row>
      <Row>
      {movies &&
        movies.map(movie => (
          <Col md="2" key={movie.id} className="mt-5">
            <Card inverse className="text-white bg-dark">
              <Button>
                <CardImg src={notFound} alt={movie.title} />
              </Button>
              <CardBody>
                <CardTitle>{movie.title}</CardTitle>
                <CardText>{movie.overview.substring(0, 100).trim().concat("...")}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </>
    );
  }
  
  export default Article;