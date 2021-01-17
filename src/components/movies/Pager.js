import Pagination from 'react-bootstrap/Pagination';

const Pager = ({ hasMore, query, page }) => {
   // TODO add ellipses for long sets of pages
   // TODO add first and last buttons for long sets of pages
   // TODO page has to be stored so we don't lose page history going back
   // TODO can page item anchors be rendered as Links instead?
   // TODO disable singular pages

   const generatePages = () => {
      const items = [];
      page = Number(page);

      if (page > 1)
         items.push(
            <Pagination.Prev
               key={items.length}
               href={`/movies/${query}/${page - 1}`}
            />
         );

      for (let i = 0; i < page; i++) {
         items.push(
            <Pagination.Item
               key={items.length}
               href={`/movies/${query}/${i + 1}`}>
               {i + 1}
            </Pagination.Item>
         );
      }

      if (hasMore)
         items.push(
            <Pagination.Next
               key={items.length}
               href={`/movies/${query}/${page + 1}`}
            />
         );

      return items;
   };

   return <Pagination>{generatePages()}</Pagination>;
};

export default Pager;
