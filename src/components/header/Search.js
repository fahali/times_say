import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const Search = ({ query, setQuery, setTotalPages, disabled, setDisabled }) => {
   const history = useHistory();

   const handleSubmit = event => {
      event.preventDefault();
      setDisabled(true);
      // TODO don't reset pages if the location is the same as the url we're
      // trying to set
      setTotalPages(0);
      // empty query returns all reviews sorted in order of recency
      // set this explicitly for our URL and handle when fetching
      history.push(`/movies/${query.trim() === '' ? 'recent' : query}/1`);
      setQuery('');
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
