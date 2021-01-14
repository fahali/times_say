import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import SearchContext from './SearchContext';

const Search = () => {
   const { setSearch } = useContext(SearchContext);
   const [query, setQuery] = useState('');
   const history = useHistory();

   const handleSubmit = event => {
      event.preventDefault();
      setSearch(query);
      history.push('/movies');
   };

   const handleChange = event => setQuery(event.target.value);

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
               <Button variant='primary' type='submit' size='lg'>
                  Search!
               </Button>
            </InputGroup.Append>
         </InputGroup>
      </Form>
   );
};

export default Search;
