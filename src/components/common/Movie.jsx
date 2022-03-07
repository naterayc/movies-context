import React from "react";
import PrimaryButton from "./PrimaryButton";
import { smallImage } from "../../constants"


const Movie = ({ id, poster, title, calification, overview }) => {

    return (
        <div className="movie" id={id}>
            <img src={smallImage(poster)} alt="foto" />
            <h4> {title} </h4>
            <div className="hidden-info">
                <div className="overview">{overview}</div>
                <PrimaryButton to={`movie/${id}`} text="Ver Pelicula" className={"btn-primary-hidden"} />
            </div>
        </div>
    )

}


export default Movie;