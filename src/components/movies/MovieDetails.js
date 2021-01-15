import Card from 'react-bootstrap/Card';
import { capitalizeName, friendlyDate } from './helper/Helper';

const MovieDetails = ({ movie }) => {
   return (
      <Card bg='dark' className='details-card'>
         <Card.Header className='details-header'>
            <h1>{movie.display_title}</h1>
            <p>
               {movie.opening_date && friendlyDate(movie.opening_date)}
               {movie.mpaa_rating && ` | Rated ${movie.mpaa_rating}`}
            </p>
         </Card.Header>
         <Card.Body className='details-body'>
            <Card.Title>{movie.headline}</Card.Title>
            <Card.Subtitle className='mb-2'>{`${capitalizeName(
               movie.byline
            )} | ${friendlyDate(movie.publication_date)}`}</Card.Subtitle>
            <p>{movie.summary_short}</p>
         </Card.Body>
         <Card.Footer className='details-footer'>
            <p>
               Read the rest at <a href={movie.link.url}>The New York Times</a>
            </p>
         </Card.Footer>
      </Card>
   );
};

export default MovieDetails;
