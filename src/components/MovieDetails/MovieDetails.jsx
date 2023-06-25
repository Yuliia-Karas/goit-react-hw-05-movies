// import css from './MovieDetails.module.css';
import { useParams } from "react-router-dom";

export default function MovieDetails() {
    const { movieId } = useParams();
    return <div>MovieDetails with id {movieId}</div>;
};

