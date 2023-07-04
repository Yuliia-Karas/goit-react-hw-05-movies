import { useParams } from 'react-router-dom';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'components/Api';
import {
  MovieDetailsContainer,
  MovieDetailsGenres,
  GoBackLink,
  MovieInfo,
} from './MovieDetails.styled';
import PropTypes from 'prop-types';

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
    return <div>Loading ...</div>;
  }

  return (
    <main>
      <GoBackLink to={backLinkHref}>Go back</GoBackLink>
      <MovieDetailsContainer>
        <img
          width="200px"
          height="300px"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
        />
        <h2>{movie.title}</h2>
        <MovieInfo>
          User Scrore: {Math.round(movie.vote_average * 10)}%
        </MovieInfo>
        <h3>Overview</h3>
        <MovieInfo>{movie.overview}</MovieInfo>
        <h3>Genres</h3>
        <MovieDetailsGenres>
          {movie.genres.map(genr => {
            return <p key={genr.id}>{genr.name}</p>;
          })}
        </MovieDetailsGenres>
      </MovieDetailsContainer>
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

MovieDetails.propTypes = {
  getMovieDetails: PropTypes.func,
};
