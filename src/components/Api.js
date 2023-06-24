import axios from 'axios';

// У цій роботі будуть використовуватися наступні ендпоінти.

// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.

const KEY = 'f18e42173aa93d2e63f9c91aa9147cf6';
const BASE_URL = 'https://api.themoviedb.org/3/';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: KEY,
  language: 'en-US',
};

export const getMovies = async () => {
  try {
    const { data } = await axios.get('trending/movie/day');
    return data.results;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

// Приклад cURL

// curl --request GET \
//      --url 'https://api.themoviedb.org/3/movie/11?api_key=f18e42173aa93d2e63f9c91aa9147cf6'

// Більше того, ви можете надсилати кілька запитів, просто розділяючи значення комами:
// приклад
// https://api.themoviedb.org/3/movie/157336?api_key=f18e42173aa93d2e63f9c91aa9147cf6&append_to_response=videos,images

// 'https://api.themoviedb.org/3/trending/all/day?language=en-US', options;
