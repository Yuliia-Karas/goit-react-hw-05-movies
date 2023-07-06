import { getMoviesTrending } from '../../components/Api';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HomeContainer, ListItem, List } from './Home.styled';
import PropTypes from 'prop-types';

export default function Home() {
  // HTTP запит, домашня сторінка зі списком популярних кінофільмів
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [movies, setMovies] = useState([]);
  const location = useLocation();

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
  
    if (isLoading) {
    return 'Loading data...';
  }

  if (isError) {
    return 'Error while loading movies...';
  }

  return (
    <HomeContainer>
      <h1>Trending today</h1>

      <List>
        {movies.map(movie => (
          <Link
            to={`/movies/${movie.id}`}
            key={movie.id}
            state={{ from: location }}
          >
            <ListItem>{movie.title}</ListItem>
          </Link>
        ))}
      </List>
    </HomeContainer>
  );
}

Home.propTypes = {
  getMoviesTrending: PropTypes.func,
};