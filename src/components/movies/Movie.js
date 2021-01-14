import moment from 'moment';
import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const Movie = ({ movie }) => {
   const history = useHistory();

   const capitalizeName = name =>
      name
         .split('')
         .map(char => char.toUpperCase())
         .join('');

   const friendlyDate = date =>
      moment(date, 'YYYY-MM-DD').format('MMMM D, YYYY');

   const handleClick = () => history.push(`/movies/${movie.key}`);

   return (
      <Card bg='secondary' border='primary' onClick={handleClick}>
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
