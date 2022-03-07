import React, { useContext } from "react";
import { NowPlayingMoviesContext } from "../../contexts/NowPlayingMoviesContext";
import Movies from "../common/Movies";
import Loader from "../common/Loader";

const NowPlaying = () => {
    const { nowPlaying, doneFetch } = useContext(NowPlayingMoviesContext);

    return (
        <>
            {
                doneFetch ? (
                    nowPlaying.length ?
                        <Movies moviesData={nowPlaying} sectionTitle={'¡ Now in Theatres !'} url={'/now-in-theatres'} /> :
                        "No pudimos encontrar peliculas")  :
                <Loader />
            }
        </>
    )
}

export default NowPlaying;
