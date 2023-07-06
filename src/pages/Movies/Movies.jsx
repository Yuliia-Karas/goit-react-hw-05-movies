import Searchbar from 'components/Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import { NavLink, useSearchParams, useLocation } from 'react-router-dom';
import { searchMovies } from 'components/Api';
import PropTypes from 'prop-types';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  useEffect(() => {
    const curentQuery = searchParams.get('query') ?? '';

    if (!curentQuery) return;

    const fetchMovies = async () => {
      try {
        const results = await searchMovies({ query: curentQuery });
        setMovies(results);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchMovies();
  }, [searchParams]);

  return (
    <div>
      <Searchbar setSearchParams={setSearchParams} />

      <>
        {movies && movies.results && (
          <ul>
            {movies.results.map(result => {
              return (
                <li key={result.id}>
                  <NavLink to={`${result.id}`} state={{ from: location }}>
                    <p>{result.original_title}</p>
                  </NavLink>
                </li>
              );
            })}{' '}
          </ul>
        )}
      </>
    </div>
  );
}

Movies.propTypes = {
  searchMovies: PropTypes.func,
};
