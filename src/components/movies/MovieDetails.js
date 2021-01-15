import Card from 'react-bootstrap/Card';
import { capitalizeName, friendlyDate } from './helper/Helper';

const MovieDetails = ({ movie }) => {
   const headerDetails = () => {
      let details = '';

      if (movie.opening_date && movie.mpaa_rating) {
         details = `${friendlyDate(movie.opening_date)} | Rated ${
            movie.mpaa_rating
         }`;
      } else if (movie.opening_date) {
         details = friendlyDate(movie.opening_date);
      } else if (movie.mpaa_rating) {
         details = `Rated ${movie.mpaa_rating}`;
      }

      return details;
   };

   return (
      <Card bg='dark' className='details-card'>
         <Card.Header className='details-header'>
            <h1>{movie.display_title}</h1>
            <p>{headerDetails()}</p>
         </Card.Header>
         <Card.Body className='details-body'>
            <Card.Title>{movie.headline}</Card.Title>
            <Card.Subtitle className='mb-2'>{`${capitalizeName(
               movie.byline
            )} | ${friendlyDate(movie.publication_date)}`}</Card.Subtitle>
            <p>{movie.summary_short}</p>
         </Card.Body>
         <Card.Footer className='details-footer'>
            <a href={movie.link.url}>
               Read the rest at The New York Times. This will redirect you to
               The New York Times webpage.
            </a>
         </Card.Footer>
      </Card>
   );
};

export default MovieDetails;
