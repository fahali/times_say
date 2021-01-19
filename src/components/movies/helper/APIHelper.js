class APIHelper {
   /* API KEYS */
   static nyt_key = process.env.REACT_APP_NYT_API_KEY;
   static tmdb_key = process.env.REACT_APP_TMDB_API_KEY;

   /* COMMON PARAMS */
   static and = '&';
   static queryParam = 'query=';

   /* NYT API */
   static nyt_base = 'https://api.nytimes.com/svc/movies/v2';
   static nyt_critics = '/critics';
   static nyt_reviews = '/reviews';
   static nyt_search = '/search.json?';

   /* NYT PARAMS */
   static nyt_keyParam = 'api-key=';
   static nyt_offsetParam = 'offset=';

   /* NYT END POINTS */
   static nyt_searchEP = this.nyt_base + this.nyt_reviews + this.nyt_search;

   /* NYT API METHODS */
   static nyt_searchURL = (query, offset) =>
      this.nyt_searchEP +
      this.nyt_keyParam +
      this.nyt_key +
      this.and +
      this.queryParam +
      query +
      this.and +
      this.nyt_offsetParam +
      offset;
   /* END NYT API */

   /* TMDB API */
   static tmdb_init = { headers: { Authorization: `Bearer ${this.tmdb_key}` } };
   static tmdb_base = 'https://api.themoviedb.org/3';
   static tmdb_config = '/configuration';
   static tmdb_searchMovie = '/search/movie/?';

   /* TMDB PARAMS */
   static tmdb_posterSize = 'original';
   static tmdb_year = 'year=';

   /* TMDB END POINTS */
   static tmdb_configEP = this.tmdb_base + this.tmdb_config;
   static tmdb_searchMovieEP = this.tmdb_base + this.tmdb_searchMovie;

   /* TMDB API METHODS */
   static tmdb_posterURL = (url, path) => url + this.tmdb_posterSize + path;

   static tmdb_configRequest = () =>
      new Request(this.tmdb_configEP, this.tmdb_init);

   static tmdb_searchMovieRequest = (query, year) =>
      new Request(
         this.tmdb_searchMovieEP +
            this.queryParam +
            query +
            this.and +
            this.tmdb_year +
            year,
         this.tmdb_init
      );
   /* END TMDB API */
}

export default APIHelper;
