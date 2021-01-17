import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import MovieContext from './MovieContext';
import { capitalizeName, friendlyDate } from './helper/Helper';

const Movie = ({ movie }) => {
   const { setMovie } = useContext(MovieContext);
   const history = useHistory();

   const handleClick = () => {
      setMovie(movie);
      history.push(`/movie/${movie.key}`); // TODO rethink how movies are keyed
   };

   return (
      <Card bg='dark' className='movie-card' onClick={handleClick}>
         <Card.Header className='movie-header'>
            <small>{friendlyDate(movie.publication_date)}</small>
         </Card.Header>
         <Card.Body>
            <Card.Title>{movie.display_title}</Card.Title>
            <Card.Subtitle className='mb-2'>
               {capitalizeName(movie.byline)}
            </Card.Subtitle>
         </Card.Body>
         <Card.Img
            variant='bottom'
            src={movie.multimedia && movie.multimedia.src}
         />
      </Card>
   );
};

export default Movie;
