const Movie = ({ movie }) => {
   return (
      <div className='movie'>
         <p>{movie.display_title}</p>
         <p>{movie.publication_date}</p>
      </div>
   );
};

export default Movie;
