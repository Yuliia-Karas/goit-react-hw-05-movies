// import css from './Cast.module.css';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'components/Api';

export default function Cast() {
  const { movieId } = useParams();
  const [credits, setCredit] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const fetchCast = async () => {
      try {
        const cast = await getMovieCredits(movieId);
        setCredit(cast);
      } catch (error) {
        console.log('error', { error });
        setCredit([]);
        // display error message to user
      }
    };
    fetchCast();
  }, [movieId]);
  console.log(credits);

  return (
    <div>
      
      <ul>
        {credits &&credits.length>0 && credits.map(credit => {
          return (
            <li key={credit.id}>
              <img
                width="100px"
                height="150px"
                src={
                  credit.profile_path
                    ? `https://image.tmdb.org/t/p/original/${credit.profile_path}`
                    : 'default-image-url'
                }
                alt={credit.name}
              />
              <h3>{credit.name}</h3>
              <p>{credit.character}</p>
            </li>
          );
        })}
      </ul>
      
      
    </div>
  );
}
