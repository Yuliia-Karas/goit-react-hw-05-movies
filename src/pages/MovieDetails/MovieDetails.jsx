// import css from './MovieDetails.module.css';
import { useParams } from "react-router-dom";
import {Link, Outlet} from "react-router-dom"

export default function MovieDetails() {
    const { movieId } = useParams();
    return (
      <main>
            MovieDetails with id {movieId}
            <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
            </ul>
            <Outlet/>
      </main>
    ); 
};

