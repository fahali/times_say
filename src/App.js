import './App.css';

import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import MovieContext from './components/movies/MovieContext';
import About from './components/header/About';
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
            <Switch>
               <Route
                  path='/movies/:query/:page'
                  render={() => (
                     <MovieContext.Provider value={{ setMovie }}>
                        <Movies
                           totalPages={totalPages}
                           setTotalPages={setTotalPages}
                        />
                     </MovieContext.Provider>
                  )}
               />
               <Route
                  path='/movies'
                  render={() => <Redirect to='/movies/recent/1' />}
               />
               {/* TODO rethink how movies are keyed */}
               <Route
                  path='/movie/:key'
                  render={() => <MovieDetails movie={movie} />}
               />
               <Route
                  path='/movie'
                  render={() => <Redirect to='/movies/recent/1' />}
               />
               <Route path='/about' component={About} />
            </Switch>
         </main>
      </div>
   );
};

export default App;
