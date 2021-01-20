const About = () => {
   return (
      <div className='about'>
         <p>
            What does the Times say? This application retrieves movie reviews
            from <a href='https://www.nytimes.com/'>The New York Times</a>{' '}
            archives via the{' '}
            <a href='https://developer.nytimes.com/docs/movie-reviews-api/1/overview'>
               NYT Movie Reviews API
            </a>{' '}
            and presents the results in a visually compelling interface. It's
            built in <a href='https://reactjs.org/'>React</a> using{' '}
            <a href='https://react-bootstrap.github.io/'>React Bootstrap</a>{' '}
            components. I also grab movie posters from{' '}
            <a href='https://www.themoviedb.org/'>The Movie Database</a>.
         </p>
         <p>
            <span className='tmdb-attrib'>Please note:</span> This product uses
            the TMDb API but is not endorsed or certified by TMDb.
         </p>
         <p>
            <a href='https://github.com/fahali/times_say'>
               You can follow development of this application on GitHub.
            </a>
         </p>
      </div>
   );
};

export default About;
