import React, { createContext, useEffect, useState } from "react";
import { popularMoviesGet } from "../constants";

export const PopularMoviesContext = createContext();

const PopularMoviesContextProvider = ({ children }) => {
    const [doneFetch, setDoneFetch] = useState();
    const [popular, setPopular] = useState([]);
    const [popularTrimmed, setPopularTrimmed] = useState([]);

    useEffect(() => {
        getPopularMovies();
    }, []);


    const getPopularMovies = () => {
        fetch(popularMoviesGet())
            .then((res) => res.json())
            .then((data) => {
                setDoneFetch(true);
                setPopular(data.results);
                setPopularTrimmed(data.results.slice(0,8));
            })
            .catch((err) => console.log(err));
    }

    return (
        <PopularMoviesContext.Provider value={{ doneFetch, popular, popularTrimmed }}>
            {children}
        </PopularMoviesContext.Provider>
    );
}

export default PopularMoviesContextProvider
