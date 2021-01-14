import Card from 'react-bootstrap/Card';

const Movie = ({ movie }) => {
   const capitalizeName = name =>
      name
         .split('')
         .map(char => char.toUpperCase())
         .join('');

   return (
      <Card>
         <Card.Img
            variant='top'
            src={movie.multimedia && movie.multimedia.src}
         />
         <Card.Body>
            <Card.Title>{movie.display_title}</Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>
               {capitalizeName(movie.byline)}
            </Card.Subtitle>
         </Card.Body>
      </Card>
   );
};

export default Movie;
