import { useState } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import MoviePoster from './MoviePoster';
import DetailsCard from './DetailsCard';

const MovieDetails = ({ movie }) => {
   const [foundPoster, setFoundPoster] = useState(true);

   const formatYear = date => date && date.split('-')[0];

   return (
      <CardGroup
         className='movie-details'
         style={foundPoster ? { width: '90%' } : { width: '75%' }}>
         {foundPoster && (
            <MoviePoster
               query={movie.display_title}
               year={formatYear(movie.opening_date)}
               setFoundPoster={setFoundPoster}
            />
         )}
         <DetailsCard movie={movie} year={formatYear(movie.opening_date)} />
      </CardGroup>
   );
};

export default MovieDetails;
