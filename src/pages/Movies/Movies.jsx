// import css from './Movies.module.css';

import Searchbar from 'components/Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { searchMovies } from 'components/Api';
import PropTypes from 'prop-types';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const curentQuery = searchParams.get('query') ?? '';

    if (!curentQuery) return;

    const fetchMovies = async () => {
      try {
        const results = await searchMovies(curentQuery);
        setMovies(results);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchMovies();
  }, [searchParams]);

  // const updateQueryString = ({ query }) => {
  //   const nextParams = { query } !== '' ? { query } : {};
  //   setSearchParams(nextParams);
  // };

  const updateQueryString = ({ query }) => {
    setSearchParams({ query });
  };

  return (
    <div>
      <Searchbar
        setSearchParams={setSearchParams}
        setMovies={setMovies}
        onChange={updateQueryString}
      />

      <>
        {movies && movies.results && (
          <ul>
            {movies.results.map(result => {
              return (
                <li key={result.id}>
                  <NavLink to={`${result.id}`}>
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
