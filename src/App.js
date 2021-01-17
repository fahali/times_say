import './App.css';

import { useState } from 'react';
import { Route } from 'react-router-dom';
import MovieContext from './components/movies/MovieContext';
import Header from './components/header/Header';
import Movies from './components/movies/Movies';
import MovieDetails from './components/movies/MovieDetails';

const App = () => {
   const [movie, setMovie] = useState(null);
   const [totalPages, setTotalPages] = useState(0);

   return (
      <div className='App'>
         <Header setTotalPages={setTotalPages} />
         <main>
            {/* TODO add redirect for /movies to empty search page 1 */}
            <Route
               exact
               path='/movies/:query/:page'
               render={({ match: { params } }) => (
                  <MovieContext.Provider value={{ setMovie }}>
                     <Movies
                        query={params.query}
                        page={params.page}
                        totalPages={totalPages}
                        setTotalPages={setTotalPages}
                     />
                  </MovieContext.Provider>
               )}
            />
            {/* TODO rethink how movies are keyed */}
            <Route
               exact
               path='/movie/:key'
               render={() => <MovieDetails movie={movie} />}
            />
         </main>
      </div>
   );
};

export default App;
