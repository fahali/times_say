import './Header.css';

import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Search from './Search';

const Header = () => {
   const [query, setQuery] = useState('');
   const history = useHistory();

   const handleClick = () => {
      setQuery('');
      history.push('/');
   };

   return (
      <header>
         <h1 onClick={handleClick}>What does the Times say?</h1>
         <Search query={query} setQuery={setQuery} />
      </header>
   );
};

export default Header;
