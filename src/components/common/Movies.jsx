import React from "react";
import { Link } from "react-router-dom";
// import PrimaryButton from "../Common/PrimaryButton";
import Movie from "./Movie";

const Movies = ({ moviesData, sectionTitle, url }) => (
    <>
        <div className="top-section">
            <h2 className="section-title">{sectionTitle}</h2>
            {window.location.pathname !== '/' ?
                null :
                <Link to={url} className="link-btn">
                    <div>More movies</div>
                </Link>
            }
        </div>
        <div className="container-movies">
            {moviesData.map(movie => {
                const { id, poster_path, title, vote_average, overview } = movie;
                return (
                    <Movie key={id} id={id} poster={poster_path} title={title} calification={vote_average} overview={overview} />
                )
            })}
        </div>
        {/* <PrimaryButton to="/" text="Volver" className="btn-primary-pd" /> */}
    </>
)

export default Movies;