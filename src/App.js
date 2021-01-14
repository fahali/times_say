import './App.css';

import { useState } from 'react';
import SearchContext from './components/SearchContext';
import Header from './components/header/Header';
import Movies from './components/Movies';

const App = () => {
   const [search, setSearch] = useState('');
   const [movies, setMovies] = useState([]);

   return (
      <div className='App'>
         <SearchContext.Provider value={{ search, setSearch, setMovies }}>
            <Header />
         </SearchContext.Provider>
         <main>
            <Movies movies={movies} />
         </main>
      </div>
   );
};

export default App;
