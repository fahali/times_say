import './Movies.css';

import { useEffect, useState } from 'react';
import APIHelper from './helper/APIHelper';
import Movie from './Movie';

const Movies = ({ query }) => {
   const [movies, setMovies] = useState([]);

   const fetchMovies = async query => {
      const url = APIHelper.searchURL(query);

      const response = await fetch(url);
      const data = await response.json();

      return data.results.map((result, index) => {
         result.key = index;
         return result;
      });
   };

   useEffect(() => {
      fetchMovies(query).then(movies => setMovies(movies));
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
