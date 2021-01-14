import './App.css';

import { useState } from 'react';
import { Route } from 'react-router-dom';
import SearchContext from './components/SearchContext';
import Header from './components/header/Header';
import Movies from './components/movies/Movies';

const App = () => {
   const [search, setSearch] = useState();

   return (
      <div className='App'>
         <SearchContext.Provider value={{ setSearch }}>
            <Header />
         </SearchContext.Provider>
         <main>
            <Route
               exact
               path='/movies'
               render={() => <Movies query={search} />}
            />
            <Route path='/movies/:key' render={({ match }) => <></>} />
         </main>
      </div>
   );
};

export default App;
