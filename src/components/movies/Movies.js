import Movie from './Movie';

const Movies = ({ movies }) => {
   return (
      <div className='movies-container'>
         {movies.map(movie => (
            <Movie
               key={`${movie.display_title}.${movie.publication_date}`}
               movie={movie}
            />
         ))}
      </div>
   );
};

export default Movies;
