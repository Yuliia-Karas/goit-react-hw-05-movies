import { useState } from 'react';
import { searchMovies } from 'components/Api';
import {
  SearchbarContainer,
  SearchInput,
  SearchButton,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

function Searchbar({ setSearchParams, onSubmit, setMovies }) {
  const [query, setQuery] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const results = await searchMovies({ query });
      setMovies(results);
    } catch (error) {
      console.log('error', error);
    }
    // todo: зберігати стейт в батьківський компонент про фільм
  }

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };

  return (
    <SearchbarContainer>
      <form onSubmit={handleSubmit}>
        <SearchInput
          onChange={handleChange}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={query}
        ></SearchInput>
        <SearchButton type="submit">
          <span>Search</span>
        </SearchButton>
      </form>
    </SearchbarContainer>
  );
}
export default Searchbar;

Searchbar.propTypes = {
  setSearchParams: PropTypes.func,
  onSubmit: PropTypes.func,
  setMovies: PropTypes.func,
};
