import { useHistory } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';

const Pager = ({ hasMore, query, page, totalPages }) => {
   const history = useHistory();

   const handleClick = page => history.push(`/movies/${query}/${page}`);

   const upTo11 = (items, page, totalPages) => {
      items.push(
         <Pagination.Prev
            key={items.length}
            disabled={page === 1}
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

   // TODO add behavior for ellipses
   const moreThan11 = (items, page, totalPages) => {
      items.push(
         <Pagination.First
            key={items.length}
            disabled={page === 1}
            onClick={() => handleClick(1)}
         />
      );

      items.push(
         <Pagination.Prev
            key={items.length}
            disabled={page === 1}
            onClick={() => handleClick(page - 1)}
         />
      );

      items.push(
         <Pagination.Item
            key={items.length}
            active={page === 1}
            onClick={() => handleClick(1)}>
            1
         </Pagination.Item>
      );

      let start;
      let end;

      if (page < 8) {
         start = 2;
         end = 8;
      } else if (page >= 8 && page <= totalPages - 4) {
         start = page - 2;
         end = page + 3;

         items.push(<Pagination.Ellipsis key={items.length} disabled={true} />);
      } else {
         start = page - (6 - (totalPages - page));
         end = totalPages;

         items.push(<Pagination.Ellipsis key={items.length} disabled={true} />);
      }

      for (let i = start; i < end; i++) {
         items.push(
            <Pagination.Item
               key={items.length}
               active={page === i}
               onClick={() => handleClick(i)}>
               {i}
            </Pagination.Item>
         );
      }

      if (page < 8) {
         items.push(<Pagination.Ellipsis key={items.length} disabled={true} />);
      } else if (page >= 8 && page <= totalPages - 4) {
         items.push(<Pagination.Ellipsis key={items.length} disabled={true} />);
      }

      items.push(
         <Pagination.Item
            key={items.length}
            active={page === totalPages}
            onClick={() => handleClick(totalPages)}>
            {totalPages}
         </Pagination.Item>
      );

      items.push(
         <Pagination.Next
            key={items.length}
            disabled={!hasMore}
            onClick={() => handleClick(page + 1)}
         />
      );

      items.push(
         <Pagination.Last
            key={items.length}
            disabled={page === totalPages}
            onClick={() => handleClick(totalPages)}
         />
      );

      return items;
   };

   const generatePages = () => {
      const items = [];
      page = Number(page);
      totalPages = Number(totalPages);

      return totalPages > 11
         ? moreThan11(items, page, totalPages)
         : upTo11(items, page, totalPages);
   };

   return <Pagination size='lg'>{generatePages()}</Pagination>;
};

export default Pager;
