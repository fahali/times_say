import './Header.css';

import { Link } from 'react-router-dom';
import Search from './Search';

const Header = () => {
   return (
      <header>
         <h1>
            <Link to='/'>What does the Times say?</Link>
         </h1>
         <Search />
      </header>
   );
};

export default Header;
