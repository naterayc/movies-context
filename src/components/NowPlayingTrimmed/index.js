import React, { useContext } from "react";
import { NowPlayingMoviesContext } from "../../contexts/NowPlayingMoviesContext";
import Movies from "../common/Movies";
import Loader from "../common/Loader";

const NowPlayingTrimmed = () => {
    const { nowPlayingTrimmed, doneFetch } = useContext(NowPlayingMoviesContext);

    return (
        <>
            {
                doneFetch ? (
                    nowPlayingTrimmed.length ?
                        <Movies moviesData={nowPlayingTrimmed} sectionTitle={'¡ Now in Theatres !'} url={'/now-in-theatres'} /> :
                        "No pudimos encontrar peliculas")  :
                <Loader />
            }
        </>
    )
}

export default NowPlayingTrimmed;
