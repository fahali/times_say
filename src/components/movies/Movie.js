import Card from 'react-bootstrap/Card';
import moment from 'moment';

const Movie = ({ movie }) => {
   const capitalizeName = name =>
      name
         .split('')
         .map(char => char.toUpperCase())
         .join('');

   const friendlyDate = date =>
      moment(date, 'YYYY-MM-DD').format('MMMM D, YYYY');

   return (
      <Card bg='secondary' border='primary'>
         <Card.Header>
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
