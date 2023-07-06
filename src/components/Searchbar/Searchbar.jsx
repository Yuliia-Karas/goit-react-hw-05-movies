import { useState } from 'react';
import {
  SearchbarContainer,
  SearchInput,
  SearchButton,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

function Searchbar({ setSearchParams }) {
  const [query, setQuery] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    setSearchParams({ query });
    console.log(event.target.value);
    // todo: зберігати стейт в батьківський компонент про фільм
  }

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  return (
    <SearchbarContainer>
      <form onSubmit={handleSubmit}>
        <SearchInput
          onChange={handleInputChange}
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
