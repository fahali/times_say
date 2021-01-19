import Card from 'react-bootstrap/Card';
import MoviePoster from './MoviePoster';
import DetailsCard from './DetailsCard';

const MovieDetails = ({ movie }) => {
   const formatYear = date => date && date.split('-')[0];

   return (
      // TODO add CardGroup and MoviePoster component
      <DetailsCard movie={movie} year={formatYear(movie.opening_date)} />
   );
};

export default MovieDetails;
