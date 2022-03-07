import React, { createContext, useEffect, useState } from "react";
import { nowPlayingMoviesGet } from "../constants";

export const NowPlayingMoviesContext = createContext();

const NowPlayingMoviesContextProvider = ({ children }) => {
    const [doneFetch, setDoneFetch] = useState();
    const [nowPlaying, setNowPlaying] = useState([]);
    const [nowPlayingTrimmed, setNowPlayingTrimmed] = useState([]);

    useEffect(() => {
        getNowPlayingMovies();
    }, []);


    const getNowPlayingMovies = () => {
        fetch(nowPlayingMoviesGet())
            .then((res) => res.json())
            .then((data) => {
                setDoneFetch(true);
                setNowPlaying(data.results);
                setNowPlayingTrimmed(data.results.slice(0,8))

            })
            .catch((err) => console.log(err));
    }

    return (
        <NowPlayingMoviesContext.Provider value={{ doneFetch, nowPlaying, nowPlayingTrimmed }}>
            {children}
        </NowPlayingMoviesContext.Provider>
    );
}

export default NowPlayingMoviesContextProvider
