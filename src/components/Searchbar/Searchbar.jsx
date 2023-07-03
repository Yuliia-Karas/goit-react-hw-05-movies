import css from './Searchbar.module.css';
// import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { searchMovies } from "components/Api"

function Searchbar({ setSearchParams, onSubmit, setMovies }) {
  const [query, setQuery] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const results = await searchMovies({ query });
      console.log(results);
      setMovies(results);
    } catch (error) {
      console.log('error', error);
    }
    // todo: зберігати стейт в батьківський компонент про фільм

    // searchMovies({ query });
  };



  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };

  return (
    <div className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={query}
        ></input>
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    </div>
  );
}
export default Searchbar;
