// import css from './Movies.module.css';

import Searchbar from 'components/Searchbar/Searchbar';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { searchMovies } from 'components/Api';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const curentQuery = searchParams.get('query');
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
  console.log(movies);

  

  const handleFormSubmit = ({ query }) => {
    setSearchParams(query);
  };

  return (
    <div>
      <Searchbar
        setSearchParams={setSearchParams}
        onSubmit={handleFormSubmit}
        setMovies={setMovies}
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
            {/* movies={movies} */}
          </ul>
        )}
      </>
    </div>
  );
}
