import Card from 'react-bootstrap/Card';
import { capitalizeName, friendlyDate } from './helper/Helper';

const MovieDetails = ({ movie }) => {
   const formatYear = date => date && date.split('-')[0];

   const formatRating = rating =>
      rating && rating !== 'Not Rated' ? `Rated ${rating}` : 'Not Rated';

   return (
      // TODO add CardGroup and MoviePoster component
      <Card bg='dark' className='details-card'>
         <Card.Header className='details-header'>
            <h1>{movie.display_title}</h1>
            <div className='details-subheader'>
               <p>{formatYear(movie.opening_date)}</p>
               <p>{formatRating(movie.mpaa_rating)}</p>
            </div>
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
