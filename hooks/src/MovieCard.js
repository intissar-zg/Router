import React from 'react'
import {Card,CardDeck} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars'

const MovieCard = ({movie}) => {
    return (
    
  <Card>
    <Link style={{textDecoration:"none"}} to={`/Description/${movie.id}`}>
    <Card.Img variant="top" src={movie.PosterURL} />
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text>
    {movie.description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
     <ReactStars value={movie.rating} edit={false}></ReactStars>
    </Card.Footer>
    </Link>
  </Card>
  
  
 

    )
}

export default MovieCard
