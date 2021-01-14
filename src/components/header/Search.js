import { useContext } from 'react';
import SearchContext from './../SearchContext';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import './Search.css';

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
      <Form onSubmit={handleSubmit}>
         <InputGroup className='mb-3'>
            <FormControl
               id='search'
               placeholder='Search for movies...'
               onChange={handleChange}
               value={search}
               size='lg'
               htmlSize='48'
            />
            <InputGroup.Append>
               <Button variant='primary' type='submit' size='lg'>
                  Search!
               </Button>
            </InputGroup.Append>
         </InputGroup>
      </Form>
   );
};

export default Search;
