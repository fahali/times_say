# Times Say

What does the Times say? This app retrieves movie reviews from the New York Times archives. The NYT Movie Reviews API is available here: https://developer.nytimes.com/docs/movie-reviews-api/1/overview

The live site is hosted by Heroku:

-  https://timessay.herokuapp.com/

## Technologies Used

The goal is to create a **S**ingle **P**age **A**pplication (**SPA**) using the React library and other Javascript packages from the vast `npm` repository. The project is hosted by Heroku.

Once again project management is handled with [Trello](https://trello.com/b/TrNxWlVZ/times-say).

## Timeframe

| Task                                       | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------------------ | -------- | -------------- | ------------- | ----------- |
| Setup: Trello, GitHub, README, Scaffolding | H        | 2 hrs          | 2 hrs         | 2 hrs       |
| Render components with mock data           | H        | 4 hrs          | 2 hrs         | 2 hrs       |
| Fetch search queries                       | H        | 2 hrs          | 1 hrs         | 1 hrs       |
| Basic styling                              | H        | 4 hrs          | 4 hrs         | 4 hrs       |
| Routing                                    | M        | 4 hrs          | 4 hrs         | 4 hrs       |
| Advanced styling                           | M        | 4 hrs          | 4 hrs         | 4 hrs       |
| Pagination                                 | M        | 4 hrs          | 8 hrs         | 8 hrs       |
| Critics picks                              | M        | 4 hrs          | X hrs         | X hrs       |
| Movie poster API                           | M        | 8 hrs          | X hrs         | X hrs       |
| Granular search options                    | M        | 8 hrs          | X hrs         | X hrs       |
| NYT Books API                              | L        | 12 hrs         | X hrs         | X hrs       |
| Total                                      | X        | 56 hrs         | 25 hrs        | 25 hrs      |

## Project Schedule

| Day         | Deliverable                             | Status      |
| ----------- | --------------------------------------- | ----------- |
| Jan 13      | Setup / Render mock data / Fetch search | complete    |
| Jan 14      | Basic styling / Routing                 | complete    |
| Jan 15      | Advanced styling / pagination           | complete    |
| Jan 16      | Critics picks / Movie poster API        | in progress |
| Jan 17      | Granular search options                 | incomplete  |
| Jan 18      | NYT Books API                           | incomplete  |
| Jan 19 - 20 | Polishing up                            | incomplete  |
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

-  [ ] Integrate a movie poster API to fetch high quality artwork to go with the review blurbs and generate visual interest
-  [ ] Render critics picks: a list of favorites curated by NYT staff
-  [ ] Allow granular search options like release year and review author
-  [ ] Integrate NYT Books API for book reviews

## Wireframes

**Landing page**
![landing page](https://i.imgur.com/6Odksw0.png)

**Review**
![review page](https://i.imgur.com/4kS30cQ.png)
