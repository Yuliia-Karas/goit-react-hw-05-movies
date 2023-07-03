// import css from './MovieDetails.module.css';
import { useParams } from 'react-router-dom';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'components/Api';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const movieData = await getMovieDetails(movieId);
        setMovie(movieData);
      } catch (error) {
        console.log('error', error);
        setMovie(null);
      }
    };

    fetchMovieData();
  }, [movieId]);

  

  if (!movie) {
    return (
      <div>
       Loading ...
      </div>
    );
  }

  // const { movieId } = useParams();

  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  // const [movie, setMovie] = useState('');

  // const location = useLocation();
  // const backLinkHref = location.state?.from ?? '/movies';

  // useEffect(
  //   () => async () => {
  //     try {
  //       const MovieDetails = await getMovieDetails(movieId);
  //       console.log(MovieDetails);
  //       setMovie(MovieDetails);
  //     } catch (error) {
  //       setIsError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   },
  //   [movieId]
  // );

  // if (isLoading) {
  //   return 'Loading data...';
  // }

  // if (isError) {
  //   return 'Error while loading movie...';
  // }

  return (
    <main>
      <Link to={backLinkHref}>Go back</Link>
      <div>
        <h2>{movie.title}</h2>
        <img
          width="200px"
          height="300px"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
        />
        <p>User Scrore: {Math.round(movie.vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <div>
          {' '}
          {movie.genres.map(genr => {
            return <p key={genr.id}>{genr.name}</p>;
          })}
        </div>
      </div>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
}
