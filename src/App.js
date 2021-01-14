import './App.css';

import { useState } from 'react';
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
            <Movies query={search} />
         </main>
      </div>
   );
};

export default App;
