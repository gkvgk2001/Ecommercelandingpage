import React from "react";
import "./style11.css";

const Cards = ({ image, arrow, heading, wide }) => {
  return (
    <div className="cardscontainer">
      <div className="cardscomp">
        <div className="cardsimg" style={{ width: wide }}>
          <img src={image} alt="" />
        </div>

        <div className="carddesc">{heading}</div>
        <div className="cardexplore">
          <h4>Explore Now!</h4>
          <div className="arrowimg">
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
