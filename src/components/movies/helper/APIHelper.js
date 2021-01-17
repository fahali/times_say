class APIHelper {
   /* API KEY */
   static key = process.env.REACT_APP_API_KEY;

   /* API */
   static base = 'https://api.nytimes.com/svc/movies/v2';
   static critics = '/critics/';
   static reviews = '/reviews/';
   static search = 'search.json?';

   /* PARAMS */
   static and = '&';
   static key_param = 'api-key=';
   static query_param = 'query=';
   static offset_param = 'offset=';

   /* END POINTS */
   static searchEP = this.base + this.reviews + this.search;

   static searchURL = (query, offset) =>
      this.searchEP +
      this.key_param +
      this.key +
      this.and +
      this.query_param +
      query +
      this.and +
      this.offset_param +
      offset;
}

export default APIHelper;
