import React, { createContext, useEffect, useState } from "react";
import { similarMoviesGet } from "../constants";

export const SimilarMoviesContext = createContext();

const SimilarMoviesContextProvider = ({ children }) => {
    const movie_id = window.location.pathname.split("/")[2];
    const [doneFetch, setDoneFetch] = useState();
    const [similarMovies, setSimilarMovies] = useState([]);

    useEffect(() => {

        const getSimilarMovies = () => {
            fetch(similarMoviesGet(movie_id))
                .then((res) => res.json())
                .then((data) => {
                    setDoneFetch(true);
                    setSimilarMovies(data.results.slice(0,8));
    
                })
                .catch((err) => console.log(err));
        }
        
        getSimilarMovies(movie_id);
    }, [movie_id]);


    return (
        <SimilarMoviesContext.Provider value={{ doneFetch, similarMovies }}>
            {children}
        </SimilarMoviesContext.Provider>
    );
}

export default SimilarMoviesContextProvider
