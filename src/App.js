import './App.css';

import { useState } from 'react';
import { Route } from 'react-router-dom';
import SearchContext from './components/header/SearchContext';
import MovieContext from './components/movies/MovieContext';
import Header from './components/header/Header';
import Movies from './components/movies/Movies';
import MovieDetails from './components/movies/MovieDetails';

const App = () => {
   // by initializing our search var with an empty string
   // if the user navigates to /movies, they will get the most recent reviews
   // an empty query returns the most recent reviews
   const [search, setSearch] = useState('');
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
