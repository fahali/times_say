import Card from 'react-bootstrap/Card';

const Movie = ({ movie }) => {
   return (
      <Card>
         <Card.Body>
            <Card.Title>{movie.display_title}</Card.Title>
         </Card.Body>
      </Card>
   );
};

export default Movie;
