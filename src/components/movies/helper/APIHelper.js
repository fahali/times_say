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

   /* END POINTS */
   static searchEP = this.base + this.reviews + this.search;

   static searchURL = query =>
      this.searchEP +
      this.key_param +
      this.key +
      this.and +
      this.query_param +
      query;
}

export default APIHelper;
