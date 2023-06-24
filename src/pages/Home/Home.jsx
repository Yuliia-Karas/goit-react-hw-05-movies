// import css from './Home.module.css';
import { getMovies } from '../../components/Api';

import { useState, useEffect } from 'react';

export default function Home() {
  // HTTP запит, домашня сторінка зі списком популярних кінофільмів
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(
    () => async () => {
      try {
        const LoadedMovies = await getMovies();
        setMovies(LoadedMovies);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );
  console.log(movies);

  if (isLoading) {
    return 'Loading data...';
  }

  if (isError) {
    return 'Error while loading posts...';
  }

  return (
    <div>
          <h1>Trending today</h1>
          <ul>
              {movies.map(movie => (
                  <li key={movie.id}> {movie.title}</li>))}
          </ul>
                </div>
  );
}

