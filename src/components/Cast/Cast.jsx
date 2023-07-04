import {
  CastContainer,
  CastItem,
  CastName,
  CastCharacter,
} from './Cast.styled';
import PropTypes from 'prop-types';

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
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <div>
      <CastContainer>
        {credits &&
          credits.length > 0 &&
          credits.map(credit => {
            return (
              <CastItem key={credit.id}>
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
                <CastName>{credit.name}</CastName>
                <CastCharacter>{credit.character}</CastCharacter>
              </CastItem>
            );
          })}
      </CastContainer>
    </div>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string,
};
