import React, { useContext } from "react";
import { MovieDetailsContext } from "../../contexts/MovieDetailsContext";
import MovieDetailsContent from "./MovieDetailsContent";
import Loader from "../common/Loader";

const MovieDetails = () => {
    const { movieDetails, doneFetch } = useContext(MovieDetailsContext);

    return (
        <>
            {
                doneFetch ? (
                    movieDetails ?
                        <MovieDetailsContent movieDetails={movieDetails}/> :
                        "No pudimos encontrar peliculas")  :
                <Loader />
            }
        </>
    )
}

export default MovieDetails;
