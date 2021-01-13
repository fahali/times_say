const Search = () => {
   const handleSubmit = event => {
      event.preventDefault();
   };

   return (
      <form className='search-container' onSubmit={handleSubmit}>
         <input id='search' type='text' placeholder='Enter search query' />
         <button type='submit'>SEARCH</button>
      </form>
   );
};

export default Search;
