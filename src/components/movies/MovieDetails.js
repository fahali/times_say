import { Link } from 'react-router-dom';

const MovieDetails = ({ movie }) => {
   return (
      <div>
         <p>{movie.display_title}</p>
         <p>{`Rated: ${movie.mpaa_rating}`}</p>
         <p>{`Opening: ${movie.opening_date}`}</p>
         <p>{movie.byline}</p>
         <p>{`Published: ${movie.publication_date}`}</p>
         <p>{movie.headline}</p>
         <p>{movie.summary_short}</p>
         <Link to={movie.link.url}>Read the rest on NYT</Link>
      </div>
   );
};

export default MovieDetails;
