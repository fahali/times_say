import CardGroup from 'react-bootstrap/CardGroup';
import MoviePoster from './MoviePoster';
import DetailsCard from './DetailsCard';

const MovieDetails = ({ movie }) => {
   const formatYear = date => date && date.split('-')[0];

   return (
      // TODO 'hide' movieposter if no image available
      <CardGroup className='movie-details'>
         <MoviePoster
            query={movie.display_title}
            year={formatYear(movie.opening_date)}
            releaseDate={movie.opening_date}
         />
         <DetailsCard movie={movie} year={formatYear(movie.opening_date)} />
      </CardGroup>
   );
};

export default MovieDetails;
