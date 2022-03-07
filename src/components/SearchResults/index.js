import React, { useContext } from "react";
import { SearchMoviesContext } from "../../contexts/SearchMoviesContext";
import Movies from "../common/Movies";
import Loader from "../common/Loader";

const SearchResults = () => {
    const { searchMoviesResults, doneFetch } = useContext(SearchMoviesContext);

    return (
        <>
            {
                doneFetch ? (
                    searchMoviesResults.length ?
                        <Movies moviesData={searchMoviesResults} sectionTitle={'Results'} url={''} /> :
                        "No pudimos encontrar peliculas")  :
                <Loader />
            }
        </>
    )
}

export default SearchResults;
