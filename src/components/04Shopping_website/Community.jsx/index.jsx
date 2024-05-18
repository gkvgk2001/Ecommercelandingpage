import React from "react";
import "./style.css";

const Community = () => {
  return (
    <div className="Community">
      <div className="communityContainer">
        <div className="content">
          <div className="bgtxt bgtr">
            JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO
          </div>
          <div className="smalltxt ">
            Type your email down below and be young wild generation
          </div>
          <div className="inputttt">
            <input type="text" placeholder="Add you email here" />
            <button className="signupbtn shopbtn sendbtn">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
