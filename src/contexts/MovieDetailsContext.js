import React, { createContext, useEffect, useState } from "react";
import { movieDetailsGet } from "../constants";

export const MovieDetailsContext = createContext();

const MovieDetailsContextProvider = ({ children }) => {
    const movie_id = window.location.pathname.split("/")[2];
    const [doneFetch, setDoneFetch] = useState();
    const [movieDetails, setMovieDetails] = useState([]);

    useEffect(() => {

        const getMovieDetails = () => {
            fetch(movieDetailsGet(movie_id))
                .then((res) => res.json())
                .then((data) => {
                    setDoneFetch(true); 
                    console.log(data);
                    setMovieDetails(data);
    
                })
                .catch((err) => console.log(err));
        }
        
        getMovieDetails(movie_id);
    }, [movie_id]);


    return (
        <MovieDetailsContext.Provider value={{ doneFetch, movieDetails }}>
            {children}
        </MovieDetailsContext.Provider>
    );
}

export default MovieDetailsContextProvider
