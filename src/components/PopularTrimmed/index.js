import React, { useContext } from "react";
import { PopularMoviesContext } from "../../contexts/PopularMoviesContext";
import Movies from "../common/Movies";
import Loader from "../common/Loader";

const PopularTrimmed = () => {
    const { popularTrimmed, doneFetch } = useContext(PopularMoviesContext);

    return (
        <>
            {
                doneFetch ? (
                    popularTrimmed.length ?
                        <Movies moviesData={popularTrimmed} sectionTitle={"¡ Popular Movies !"} url={'/popular-movies'}/> :
                        "No pudimos encontrar peliculas")  :
                <Loader />
            }
        </>
    )
}

export default PopularTrimmed;
