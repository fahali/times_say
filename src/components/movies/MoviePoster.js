import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import APIHelper from './helper/APIHelper';

const MoviePoster = ({ query, year }) => {
   const [source, setSource] = useState('');

   const searchMovie = async (query, year) => {
      const request = APIHelper.tmdb_searchMovieRequest(query, year);
      const response = await fetch(request);
      const data = await response.json();

      return data.results.find(
         movie => movie.title.toLowerCase() === query.toLowerCase()
      );
   };

   const fetchPosterURL = async movie => {
      if (movie === undefined) return;

      const getConfig = async () => {
         const request = APIHelper.tmdb_configRequest();
         const response = await fetch(request);
         const data = await response.json();

         return data;
      };

      const config = await getConfig();

      return APIHelper.tmdb_posterURL(
         config.images.secure_base_url,
         movie.poster_path
      );
   };

   useEffect(() => {
      searchMovie(query, year).then(movie =>
         fetchPosterURL(movie).then(src => setSource(src))
      );
   }, [query, year]);

   return (
      <Card bg='dark' className='poster-card'>
         <Card.Img src={source} className='poster' />
      </Card>
   );
};

export default MoviePoster;
