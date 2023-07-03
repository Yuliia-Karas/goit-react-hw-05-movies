// import css from './Home.module.css';
import { getMoviesTrending } from '../../components/Api';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Home() {
  // HTTP запит, домашня сторінка зі списком популярних кінофільмів
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [movies, setMovies] = useState([]);

  const fechData = async () =>  {
      try {
        const LoadedMovies = await getMoviesTrending();
        setMovies(LoadedMovies);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
  }
  
  
  useEffect(() => { fechData() }, []);
  
  console.log(movies);

  if (isLoading) {
    return 'Loading data...';
  }

  if (isError) {
    return 'Error while loading movies...';
  }

  return (
    <div>
      <h1>Trending today</h1>

      <ul>
        {movies.map(movie => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <li>{movie.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
