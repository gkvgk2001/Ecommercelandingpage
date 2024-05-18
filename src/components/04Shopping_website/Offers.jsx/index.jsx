import React from "react";
import Girl from "./images/Girl.png";
import Star from "./images/Star 8.png";

import { useEffect, useRef } from "react";

import "./style.css";

const Offers = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const intersectionobserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("left")) {
              console.log(entry.target);
              entry.target.classList.add("animate-left");
            }
            if (entry.target.classList.contains("right")) {
              console.log(entry.target);

              entry.target.classList.add("animate-right");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (leftRef.current) intersectionobserver.observe(leftRef.current);
    if (rightRef.current) intersectionobserver.observe(rightRef.current);

    return () => {
      intersectionobserver.disconnect();
    };
  }, []);
  return (
    <div className="offers">
      <div className="offerscontainer">
        <div className="left" ref={leftRef}>
          <div className="stars star1">
            <img src={Star} alt="star" />
          </div>
          <div className="stars star2">
            <img src={Star} alt="star" />
          </div>
          <div className="stars star3">
            <img src={Star} alt="star" />
          </div>
          <div className="stars star4">
            <img src={Star} alt="star" />
          </div>
          <div className="girlimage">
            <img src={Girl} alt="" />
          </div>
        </div>
        <div className="right" ref={rightRef}>
          <div className="big-text big11">
            <div className="txt1 txt11">Payday</div>
            <div className="txt22">Sale Now</div>
          </div>

          <div className="smalltext sml11">
            <p>
              Spend minimal $100 get 30% off <br /> voucher code for your next
              purchase
            </p>
          </div>

          <div className="termcondition  smalltext sml11">
            <p>
              1 June - 10 June 2021 <br />
              *Terms & Conditions apply{" "}
            </p>
          </div>

          <div className="signupbtn shopbtn">Shop Now</div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
