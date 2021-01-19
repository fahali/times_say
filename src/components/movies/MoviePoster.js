import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import APIHelper from './helper/APIHelper';

const MoviePoster = ({ query, year, releaseDate }) => {
   const [source, setSource] = useState('');

   const searchMovie = async (query, year, releaseDate) => {
      const request = APIHelper.tmdb_searchMovieRequest(query, year);
      const response = await fetch(request);
      const data = await response.json();

      return data.results.find(
         movie => movie.title === query && movie.release_date === releaseDate
      );
   };

   const fetchPosterURL = async movie => {
      console.log(movie);
      if (movie === undefined) return;

      const getConfig = async () => {
         const request = APIHelper.tmdb_configRequest();
         const response = await fetch(request);
         const data = await response.json();

         return data;
      };

      const config = await getConfig();
      console.log(config);

      return APIHelper.tmdb_posterURL(
         config.secure_base_url,
         movie.poster_path
      );
   };

   useEffect(() => {
      searchMovie(query, year, releaseDate).then(movie =>
         fetchPosterURL(movie).then(src => setSource(src))
      );
   }, [query, year, releaseDate]);

   return (
      <Card bg='dark' className='poster-card'>
         <Card.Img src={source} />
      </Card>
   );
};

export default MoviePoster;
