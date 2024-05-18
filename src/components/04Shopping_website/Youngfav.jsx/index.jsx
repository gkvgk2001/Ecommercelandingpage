import React from "react";
import "./style.css";
// import sitename from "./images/sitename2.jpg";
import Card11 from "./images/Card-11.png";
import Card12 from "./images/Card-22.png";
import Arrow from "./images/Arrow 4.png";

import Cards from "../Newarrival.jsx/cards";

const Youngfav = () => {
  return (
    <div className="Youngfav">
      <div className="youngontainer">
        <div className="headingside headyoung">
          <h1 className=" heading11">Young's favourite</h1>

          <div className="headingback"></div>
        </div>

        <div className="cards cardh1">
          <Cards
            image={Card11}
            arrow={Arrow}
            heading={"Trending on instagram"}
            wide={"500px"}
          />
          <Cards
            image={Card12}
            arrow={Arrow}
            heading={"All Under $40"}
            wide={"500px"}
          />
        </div>
      </div>
    </div>
  );
};

export default Youngfav;
