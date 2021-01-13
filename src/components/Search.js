import { useContext } from 'react';
import SearchContext from './SearchContext';

const Search = () => {
   const { search, setSearch, setMovies } = useContext(SearchContext);

   const handleSubmit = async event => {
      event.preventDefault();

      const url =
         'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
         'api-key=' +
         process.env.REACT_APP_API_KEY +
         '&' +
         'query=' +
         search;
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
   };

   const handleChange = event => setSearch(event.target.value);

   return (
      <form className='search-container' onSubmit={handleSubmit}>
         <input
            id='search'
            type='text'
            placeholder='Enter search query'
            onChange={handleChange}
            value={search}
         />
         <button type='submit'>SEARCH</button>
      </form>
   );
};

export default Search;
