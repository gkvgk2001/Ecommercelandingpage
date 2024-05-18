import React from "react";

import Cards from "./cards";

import "./style.css";

import Card1 from "./images/card1.png";
import Card2 from "./images/card2.png";
import Card3 from "./images/card3.png";
import Arrow from "./images/Arrow 1.png";

const Newarrival = () => {
  return (
    <div className="Mainnewarrival">
      <div className="arrivalcontainer">
        <div className="headingside">
          <h1 className="heading22">New arrival</h1>

          <div className="headingback"></div>
        </div>

        <div className="cards">
          <Cards
            image={Card1}
            arrow={Arrow}
            heading={"Hoodies & Sweetshirt"}
            wide={"285px"}
          />
          <Cards
            image={Card2}
            arrow={Arrow}
            heading={"Coats & Parkas"}
            wide={"285px"}
          />
          <Cards
            image={Card3}
            arrow={Arrow}
            heading={"Tees & T-Shirt"}
            wide={"285px"}
          />
        </div>
      </div>
    </div>
  );
};

export default Newarrival;
