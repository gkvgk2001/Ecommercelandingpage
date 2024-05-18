import React from "react";

import mobileApp from "./images/Mobile app.png";
import Ellipse1 from "./images/Ellipse 3.png";
import Ellipse2 from "./images/Ellipse 2 (1).png";
import Ellipse3 from "./images/Ellipse 2.png";
import Ellipse4 from "./images/Ellipse 4.png";
import Playstore from "./images/playstore.png";
import Appstore from "./images/appstore.png";
import Circular1 from "./images/circular1.png";
import Circular2 from "./images/circular2.png";
import Circular3 from "./images/circular3.png";

import "./style.css";

const Voucher = () => {
  return (
    <div className="Voucher">
      <div className="VoucherContainer">
        <div className="leftvoucher">
          <div className="bgtxt">
            DOWNLOAD APP & <br />
            GET THE VOUCHER!
          </div>

          <div className="descpvoucher">
            Get 30% off for first transaction using <br />
            Rondovision mobile app for now.
          </div>

          <div className="imagecontainer">
            <div className="appstore">
              <img src={Appstore} alt="" />
            </div>
            <div className="appstore">
              <img src={Playstore} alt="" />
            </div>
          </div>
        </div>
        <div className="rightvoucher">
          <div className="ellipse ellipse1">
            <img src={Ellipse1} alt="" />
          </div>
          <div className="ellipse ellipse2">
            <img src={Ellipse2} alt="" />
          </div>
          <div className="ellipse ellipse3">
            <img src={Ellipse3} alt="" />
          </div>
          <div className="ellipse ellipse4">
            <img src={Ellipse4} alt="" />
          </div>

          <div className="circular circular1">
            <img src={Circular1} alt="" />
          </div>
          <div className="circular circular2">
            <img src={Circular2} alt="" />
          </div>
          <div className="circular circular3">
            <img src={Circular3} alt="" />
          </div>

          <div className="mobileapp">
            <img src={mobileApp} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voucher;
