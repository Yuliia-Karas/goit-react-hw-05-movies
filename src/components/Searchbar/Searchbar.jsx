import css from './Searchbar.module.css';
// import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

 function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

    const handleChange = ({ target }) => {
        setQuery(target.value)
};  
          
 const handleSubmit = event => {
   event.preventDefault();
   onSubmit(query);
   setQuery('');
 };

  
  return (
    <div className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
                <input
          className={css.SearchForm__input}
          onChange={handleChange}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={query}
        ></input>
        <button type="submit" className={css.SearchForm__button}>
          <span className={css.SearchForm__button__label}>Search</span>
        </button>
      </form>
    </div>
  );
}
export default Searchbar;