import React from "react";

import "./style.css";
import Brand1 from "./images/brand1.png";
import Brand2 from "./images/brand2.png";
import Brand3 from "./images/brand3.png";
import Brand4 from "./images/brand4.png";
import Brand5 from "./images/brand5.png";
import Brand6 from "./images/brand6.png";

const Banner = () => {
  return (
    <div className="Bannermain">
      <div className="bannercon">
        <div className="slide">
          <div className="brandsimg">
            <img src={Brand1} alt="" />
          </div>
          <div className="brandsimg">
            <img src={Brand2} alt="" />
          </div>
          <div className="brandsimg">
            <img src={Brand3} alt="" />
          </div>
          <div className="brandsimg">
            <img src={Brand4} alt="" />
          </div>
          <div className="brandsimg">
            <img src={Brand5} alt="" />
          </div>
          <div className="brandsimg">
            <img src={Brand6} alt="" />
          </div>

          <div className="brandsimg">
            <img src={Brand1} alt="" />
          </div>
          <div className="brandsimg">
            <img src={Brand2} alt="" />
          </div>
          <div className="brandsimg">
            <img src={Brand3} alt="" />
          </div>
          <div className="brandsimg">
            <img src={Brand4} alt="" />
          </div>
          <div className="brandsimg">
            <img src={Brand5} alt="" />
          </div>

          <div className="brandsimg">
            <img src={Brand6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
