import React from "react";

import { useState } from "react";
import "./style.css";
import sitename from "./images/sitename2.jpg";
import rightimg from "./images/rightimg.png";

const Hero = () => {
  const [menu, setmenu] = useState(false);
  return (
    <div className="hero-section">
      <div className="heroandnav">
        <div className="navbar">
          <div className="leftnav">
            <img src={sitename} alt="" />
          </div>
          <div className="rightnav">
            <div className={`list ${menu ? "open" : ""}`}>
              <ul>
                <li>Catlogue</li>
                <li>fashion</li>
                <li>favourite</li>
                <li>lifestyle</li>
              </ul>
            </div>

            <div>
              <button className="signupbtn pulse-animation">Sign up</button>
            </div>

            <div
              className="hamburger"
              onClick={() => {
                setmenu(!menu);
              }}
            >
              &#9776;
            </div>
          </div>
        </div>
      </div>

      <div className="herobanner">
        <div className="herobannerdiv">
          <div className="heroleft">
            <div className="big-text">
              <div className="txt1">Let's</div>
              <div className="txt2">explore</div>
              <div className="txt3">unique</div>
              <div className="txt4">clothes</div>
            </div>

            <div className="smalltext">
              Live for Influential and Innovative fashion!
            </div>

            <div className="btn">
              <button className="signupbtn shopnowbtn">Shop Now</button>
            </div>
          </div>

          <div className="heroright">
            <img src={rightimg} className="heroimg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
