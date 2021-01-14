import './Movies.css';

import { useEffect, useState } from 'react';
import Movie from './Movie';

const Movies = ({ query }) => {
   const [movies, setMovies] = useState([]);

   useEffect(() => {
      const url =
         'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
         'api-key=' +
         process.env.REACT_APP_API_KEY +
         '&' +
         'query=' +
         query;
      fetch(url)
         .then(response => response.json())
         .then(data =>
            setMovies(
               data.results.map((result, index) => {
                  result.key = index;
                  return result;
               })
            )
         );
   }, [query]);

   return (
      <div className='movies-container'>
         {movies.map(movie => (
            <Movie key={movie.key} movie={movie} />
         ))}
      </div>
   );
};

export default Movies;
