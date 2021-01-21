# Times Say

What does the Times say? This app retrieves movie reviews from the New York Times archives. The NYT Movie Reviews API is available here: https://developer.nytimes.com/docs/movie-reviews-api/1/overview

The live site is hosted by Heroku:

-  https://timessay.herokuapp.com/

## Technologies Used

The goal is to create a **S**ingle **P**age **A**pplication (**SPA**) using the React library and other Javascript packages from the vast `npm` repository. The project is hosted by Heroku.

Once again project management is handled with [Trello](https://trello.com/b/TrNxWlVZ/times-say).

## Interesting Challenges

The New York Times is an old newspaper and has articles from before World War 2, right in the nascent era of movies and filmmaking. I knew early on I would need to paginate the dataset to provide a good UX. Unfortunately the API does not expose the size of the total dataset, which would simplify generating the total page count from the first fetch request. Instead there is a `has_more` property which indicates there are more articles to retrieve. I settled on dynamically generating pages. The **next** button is always visible but it is only enabled when the `has_more` property is true. As you build out pages, previous page numbers are retained with state variables. It took me several different approaches before using a combination of the `useHistory` and `useParams` hooks that `react-router-dom` exposes. I'm not using `Link`s at all! By transferring search queries and page numbers via the URL, the Movies component becomes more self-sufficient.

I discovered how important it is to double check that your endpoints are correct. Due to one erroneous forward slash at the end of one of my endpoints, the API was redirecting to an unsecure `http` version of the resource, which would be met with a `Blocked mixed active content` error on modern browsers, because the app was loaded in secure `https` mode. I found myself going down a rabbit hole trying to track down the bug, but after some careful observation of the network requests console in the developer tools, I was able to connect the dots as to why the `http` redirect was happening: the API was parsing MY incorrect version of the endpoint (as an `https` endpoint) and returning the correct version of the endpoint (lacking the trailing forward slash) but as an `http` redirect. After correcting the bug in my code, the API simply responds with the requested resources, instead of redirecting first to the unsecure `http` version of the resource.

## Timeframe

| Task                                       | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------------------ | -------- | -------------- | ------------- | ----------- |
| Setup: Trello, GitHub, README, Scaffolding | H        | 2 hrs          | 2 hrs         | 2 hrs       |
| Render components with mock data           | H        | 4 hrs          | 2 hrs         | 2 hrs       |
| Fetch search queries                       | H        | 2 hrs          | 1 hrs         | 1 hrs       |
| Basic styling                              | H        | 4 hrs          | 4 hrs         | 4 hrs       |
| Routing                                    | M        | 4 hrs          | 4 hrs         | 4 hrs       |
| Advanced styling                           | M        | 4 hrs          | 4 hrs         | 4 hrs       |
| Pagination                                 | M        | 4 hrs          | 14 hrs        | 14 hrs      |
| Bug fixes                                  | M        | 8 hrs          | 8 hrs         | 8 hrs       |
| Critics picks                              | M        | 4 hrs          | X hrs         | X hrs       |
| Movie poster API                           | M        | 8 hrs          | 8 hrs         | 8 hrs       |
| Granular search options                    | M        | 8 hrs          | X hrs         | X hrs       |
| NYT Books API                              | L        | 12 hrs         | X hrs         | X hrs       |
| Total                                      | X        | 56 hrs         | 47 hrs        | 47 hrs      |

## Project Schedule

| Day         | Deliverable                             | Status      |
| ----------- | --------------------------------------- | ----------- |
| Jan 13      | Setup / Render mock data / Fetch search | complete    |
| Jan 14      | Basic styling / Routing                 | complete    |
| Jan 15      | Advanced styling / pagination           | complete    |
| Jan 16      | Critics picks / Movie poster API        | in progress |
| Jan 17      | Granular search options                 | incomplete  |
| Jan 18      | NYT Books API                           | incomplete  |
| Jan 19 - 20 | Polishing up                            | complete    |
| Jan 21      | Presentations                           |

## User Stories

-  As a movie buff, I want an easy way to search for movie reviews from the NY Times
-  As a movie buff, I want quick details about a movie like opening year and rating
-  As a movie buff, I want to see quick snippets of a review before investing time in reading one
-  As a movie buff, I want an easy way to access the entire review if I'm interested

### MVP Goals

-  [x] Successfully fetch review data based on search query
-  [x] Render the review blurb in a visually compelling interface
-  [x] Redirect to NYT website for the full review

### Stretch Goals

-  [x] Integrate a movie poster API to fetch high quality artwork to go with the review blurbs and generate visual interest
-  [ ] Render critics picks: a list of favorites curated by NYT staff
-  [ ] Allow granular search options like release year and review author
-  [ ] Integrate NYT Books API for book reviews

## Wireframes

**Landing page**
![landing page](https://i.imgur.com/6Odksw0.png)

**Review**
![review page](https://i.imgur.com/4kS30cQ.png)
