import './App.css';

import { useState } from 'react';
import { Route } from 'react-router-dom';
import SearchContext from './components/header/SearchContext';
import MovieContext from './components/movies/MovieContext';
import Header from './components/header/Header';
import Movies from './components/movies/Movies';
import MovieDetails from './components/movies/MovieDetails';

const App = () => {
   const [search, setSearch] = useState();
   const [movie, setMovie] = useState();

   return (
      <div className='App'>
         <SearchContext.Provider value={{ setSearch }}>
            <Header />
         </SearchContext.Provider>
         <main>
            <Route
               exact
               path='/movies'
               render={() => (
                  <MovieContext.Provider value={{ setMovie }}>
                     <Movies query={search} />
                  </MovieContext.Provider>
               )}
            />
            <Route
               path='/movies/:key'
               render={() => <MovieDetails movie={movie} />}
            />
         </main>
      </div>
   );
};

export default App;
