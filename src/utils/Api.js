import axios from 'axios';


const KEY = 'f18e42173aa93d2e63f9c91aa9147cf6';
const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: KEY,
  language: 'en-US',
};

// У цій роботі будуть використовуватися наступні ендпоінти.

// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// https://api.themoviedb.org/3/trending/all/{time_window}
export const getMoviesTrending = async () => {
    try {
      console.log(axios.defaults);
    const { data } = await axios.get('/trending/movie/day');
       console.log(data);
      return data.results;
     
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
//api.themoviedb.org/3/movie/{movie_id}
export const getMovieDetails = async movieId => {
  try {
    console.log(axios.defaults);
    const { data } = await axios.get(`movie/${movieId}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// https://api.themoviedb.org/3/search/movie
export const searchMovies = async query => {
  try {
    console.log(axios.defaults);
    const { data } = await axios.get(`search/movie?query=${query}`);
    console.log(data);
    return data.results;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// https://api.themoviedb.org/3/movie/{movie_id}/credits
export const getMovieCredits = async movieId => {
  try {
       const { data } = await axios.get(`movie/${movieId}/credits`);
    console.log(data);
    return data.cast;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

// const getMovieCredits = async movieId => {
//   const apiKey = 'YOUR_API_KEY'; // Замініть на свій ключ API TMDb
//   const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`;

//   try {
//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching movie credits:', error);
//     return null;
//   }
// };

// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.
// https://api.themoviedb.org/3/movie/{movie_id}/reviews
export const getMovieReviews = async movieId => {
  try {
    console.log(axios.defaults);
    const { data } = await axios.get(`movie/${movieId}/reviews`);
    console.log(data);
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
