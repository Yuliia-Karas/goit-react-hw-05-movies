import css from './Searchbar.module.css';

export default function Searchbar() {
    
    return (
      <form>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter key word for search films"
        //   value={name}
        //   onChange={handleChange}
        />
        <button type="submit" className={css.button}>
          <span className={css['button-label']}>Search</span>
        </button>
      </form>
    );
}