import React, { useContext } from "react";
import { SimilarMoviesContext } from "../../contexts/SimilarMoviesContext";
import Movies from "../common/Movies";
import Loader from "../common/Loader";

const SimilarMovies = () => {
    const { similarMovies, doneFetch } = useContext(SimilarMoviesContext);

    return (
        <>
            {
                doneFetch ? (
                    similarMovies.length ?
                        <Movies moviesData={similarMovies} sectionTitle={"¡ Similar Movies !"} url={'/comming-soon'}/> :
                        "No pudimos encontrar peliculas similares")  :
                <Loader />
            }
        </>
    )
}

export default SimilarMovies;
