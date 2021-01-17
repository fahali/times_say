import { useHistory } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';

const Pager = ({ hasMore, query, page, totalPages }) => {
   // TODO add ellipses for long sets of pages
   // TODO add first and last buttons for long sets of pages

   const history = useHistory();

   const handleClick = page => history.push(`/movies/${query}/${page}`);

   const generatePages = () => {
      const items = [];
      page = Number(page);
      totalPages = Number(totalPages);

      items.push(
         <Pagination.Prev
            key={items.length}
            disabled={!(page > 1)}
            onClick={() => handleClick(page - 1)}
         />
      );

      for (let i = 1; i <= totalPages; i++) {
         items.push(
            <Pagination.Item
               key={items.length}
               active={page === i}
               onClick={() => handleClick(i)}>
               {i}
            </Pagination.Item>
         );
      }

      items.push(
         <Pagination.Next
            key={items.length}
            disabled={!hasMore}
            onClick={() => handleClick(page + 1)}
         />
      );

      return items;
   };

   return <Pagination>{generatePages()}</Pagination>;
};

export default Pager;
