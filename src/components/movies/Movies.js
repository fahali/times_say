import './Movies.css';

import { useEffect, useState } from 'react';
import Movie from './Movie';
import Pager from './Pager';
import APIHelper from './helper/APIHelper';

const Movies = ({ query, page, totalPages, setTotalPages }) => {
   const [movies, setMovies] = useState([]);
   const [hasMore, setHasMore] = useState(false);

   const fetchMovies = async (search, offset) => {
      const url = APIHelper.searchURL(search, offset);

      const response = await fetch(url);
      const data = await response.json();

      return data;
   };

   useEffect(() => {
      // send an empty string so we get results sorted in order of recency
      fetchMovies(query === 'recent' ? '' : query, (page - 1) * 20).then(
         data => {
            setMovies(
               data.results.map((result, index) => {
                  result.key = index; // TODO rethink how movies are keyed
                  return result;
               })
            );

            setHasMore(data.has_more);
            setTotalPages(pages => (pages < page ? page : pages));
         }
      );
   }, [query, page, setTotalPages]);

   return (
      <div className='movies-page'>
         <Pager
            hasMore={hasMore}
            query={query}
            page={page}
            totalPages={totalPages}
         />
         <div className='movies-container'>
            {movies.map(movie => (
               <Movie key={movie.key} movie={movie} />
            ))}
         </div>
      </div>
   );
};

export default Movies;
