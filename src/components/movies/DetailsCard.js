import Card from 'react-bootstrap/Card';
import { capitalizeName, friendlyDate } from './helper/Helper';

const DetailsCard = ({ movie, year }) => {
   const formatRating = rating =>
      rating && rating !== 'Not Rated' ? `Rated ${rating}` : 'Not Rated';

   return (
      <Card className='details-card'>
         <Card.Header className='details-header'>
            <h1>{movie.display_title}</h1>
            <div className='details-subheader'>
               <p>{year}</p>
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
            <a href={movie.link.url}>Read the rest at The New York Times.</a>
         </Card.Footer>
      </Card>
   );
};

export default DetailsCard;
