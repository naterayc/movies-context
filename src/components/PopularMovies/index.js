import React, { useContext } from "react";
import { PopularMoviesContext } from "../../contexts/PopularMoviesContext";
import Movies from "../common/Movies";
import Loader from "../common/Loader";

const Popular = () => {
    const { popular, doneFetch } = useContext(PopularMoviesContext);

    return (
        <>
            {
                doneFetch ? (
                    popular.length ?
                        <Movies moviesData={popular} sectionTitle={"¡ Popular Movies !"} url={'/popular-movies'}/> :
                        "No pudimos encontrar peliculas")  :
                <Loader />
            }
        </>
    )
}

export default Popular;
