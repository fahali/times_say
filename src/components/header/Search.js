import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const Search = ({ query, setQuery, setTotalPages }) => {
   const [disabled, setDisabled] = useState(false);
   const history = useHistory();

   const handleSubmit = event => {
      event.preventDefault();
      setDisabled(true);
      setTotalPages(0);
      // empty query returns all reviews sorted in order of recency
      // set this explicitly for our URL and handle when fetching
      history.push(`/movies/${query === '' ? 'recent' : query}/1`);
   };

   const handleChange = event => {
      setDisabled(false);
      setQuery(event.target.value);
   };

   return (
      <Form onSubmit={handleSubmit}>
         <InputGroup className='mb-3'>
            <FormControl
               id='query'
               placeholder='Search for movies...'
               onChange={handleChange}
               value={query}
               size='lg'
               htmlSize='48'
            />
            <InputGroup.Append>
               <Button
                  variant='primary'
                  type='submit'
                  size='lg'
                  disabled={disabled}>
                  Search!
               </Button>
            </InputGroup.Append>
         </InputGroup>
      </Form>
   );
};

export default Search;
