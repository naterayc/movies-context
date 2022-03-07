import React, { createContext, useEffect, useState } from "react";
import { searchMoviesGet } from "../constants";

export const SearchMoviesContext = createContext();

const SearchMoviesContextProvider = ({ children }) => {
    const query = window.location.pathname.split("/")[2];
    const [doneFetch, setDoneFetch] = useState();
    const [searchMoviesResults, setSearchMoviesResults] = useState([]);

    useEffect(() => {

        const getSearchMovies = () => {
            fetch(searchMoviesGet(query))
                .then((res) => res.json())
                .then((data) => {
                    setDoneFetch(true);
                    setSearchMoviesResults(data.results);
    
                })
                .catch((err) => console.log(err));
        }
        
        getSearchMovies(query);
    }, [query]);


    return (
        <SearchMoviesContext.Provider value={{ doneFetch, searchMoviesResults }}>
            {children}
        </SearchMoviesContext.Provider>
    );
}

export default SearchMoviesContextProvider
