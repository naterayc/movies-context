import React from "react";
import { originalImage } from "../../constants";
import PrimaryButton from "../common/PrimaryButton";
//import Movie from "./Movie";

const MovieDetailsContent = ({ movieDetails }) => {
    const {id, title, homepage, overview, poster_path, release_date, status, vote_average, tagline, budget } = movieDetails;
    return (
        <>
            <div className='movie-details' id={id}>
                <div>
                <img src={originalImage(poster_path)} alt="foto" />
                </div>
                <div>
                    <h2>{title}</h2>
                    <p>{tagline}</p>
                    <a href={homepage}>Sitio Web</a>
                    <p>Synopsis: {overview}</p>
                    <p>Budget: ${budget}</p>
                    <p>Release Date: {release_date}</p>
                    <p>Status: {status}</p>
                    <p>Calification: {vote_average}</p>
                </div>
            </div>
            <PrimaryButton to="/" text="Volver" className="btn-primary-pd" />
        </>
    )
}

export default MovieDetailsContent;