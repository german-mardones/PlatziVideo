import React from "react";
import Proptypes from 'prop-types';
import PlayIcon from '../assets/static/play-icon.png';
import AddIcon from '../assets/static/plus-icon.png';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = ({cover, title, year, contentRating, duration}) => (
    <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title}  />
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" src={PlayIcon} alt="Play Icon" /> 
                <img className="carousel-item__details--img" src={AddIcon} alt="Plus Icon" /> 
            </div>
            <p className="carousel-item__details--title">{title}</p>
            <p className="carousel-item__details--subtitle">
                {`${year} ${contentRating} ${duration}`}
            </p>
        </div>
    </div>
);

CarouselItem.proptypes = {
    cover: Proptypes.string,
    title: Proptypes.string,
    year: Proptypes.number,
    contentRating: Proptypes.string,
    duration: Proptypes.number,
}

export default CarouselItem;